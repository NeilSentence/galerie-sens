// authorization check ('Middleware')
// als 2. Argument in den Route-Funktionen 

const { admin, db } = require('./admin')

module.exports = (req, res, next) => {
	let idToken
	if (
		req.headers.authorization && 
		req.headers.authorization.startsWith('Bearer ')
	){
		idToken = req.headers.authorization.split('Bearer ')[1]
	} else {
		console.error('kein Token gefunden.')
		return res.status(403).json({error: "Sie sind hierzu nicht berechtigt."})
	}
	admin
	.auth()
	.verifyIdToken(idToken)
	.then((decodedToken) => {
		req.user = decodedToken
		//console.log(decodedToken)
		return db
		.collection('kuenstler')
		.where('userID', "==", req.user.uid)
		.limit(1)
		.get()
	})
	.then((data) => {
		req.user.uid = data.docs[0].data().userID
		return next()
	})
	.catch((err) => {
		console.error("Fehler beim Zugangstoken.", err)
		return res.status(403).json(err)
	})
}