const { admin, db } = require('../util/admin') 
const config = require('../util/config') 

const firebase = require('firebase')
firebase.initializeApp(config)

const { validateSignup, validateLogin, reduceUserDetails } = require('../util/validation')

const keinProfilbild = 'kein-profilbild.png'

// POST-request: /registrierung, kein header / auth, folgendes obj im body:
exports.registrierung = (req,res) => {
	const neuerNutzer = {
		email: req.body.email,
		passwort: req.body.passwort,
		bestaetigtesPasswort: req.body.bestaetigtesPasswort,
		profilname: req.body.profilname
	}
	// Validierung
	const { errors, valid } = validateSignup(neuerNutzer)
	if (!valid) return res.status(400).json(errors)

	// user creation
	// https://youtu.be/m_u6P5k0vP0?t=2666
	let token, userID
	let reject = false
	
	db
	.collection('logins')
	.get()
	.then(data => {
		data.forEach(login => {
			// zuerst checken, ob email in der Liste der registrierten Nutzer existiert. Wenn ja, error:
			if (neuerNutzer.email === login._fieldsProto.email.stringValue) {
				reject = reject+"mail"
			}
			else if (neuerNutzer.profilname === login._fieldsProto.profilname.stringValue) {
				reject = reject+"name"
			}
		})
	})
	.then(() => {
		if (reject) return res.status(400).json({kuenstlerIn: "Diese(r) KünstlerIn existiert bereits."})
		else {
			return firebase
			.auth()
			.createUserWithEmailAndPassword(neuerNutzer.email, neuerNutzer.passwort)
			.then(data => {
				userID = data.user.uid
				return data.user.getIdToken()
			})
			.then(idToken => {
				token = idToken
				const userCredentials = {
					email: neuerNutzer.email,
					registriertSeit: new Date().toISOString(),
					profilname: neuerNutzer.profilname,
					userID, // weil userID == userID
					nachname: "",
					vormane: "",
					plz: "",
					ort: "",
					beschreibung: "",
					tags: [],
					bilder: [],
					likesOutNachBildern:[], 
					likesInNachBildern:[], // {bildID: "", anzahl:0}; erhalten: likesInNachBildern.length
					profilBildUrl: `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${keinProfilbild}?alt=media`
				}
				db
				.doc(`/kuenstler/${userID}`)
				.set(userCredentials)
				db
				.collection('logins')
				.doc(userID).set({userID:userCredentials.userID, email:userCredentials.email,profilname:userCredentials.profilname})
				return db
			})
			.then(() => {
				res.status(201).json({token})
			})
			.catch(err => {
				console.error(err)
				if (err.code ==='auth/email-already-in-use') res.status(400).json({email: 'Diese Email existiert bereits im System.'})
				 										else res.status(500).json({error: err.code})
			})
		}
	})
} 

// POST-request: /login, header: auth token, folgendes obj in body:
exports.login = (req,res) => {
	const loginversuch = {
		email: req.body.email,
		passwort: req.body.passwort
	}
	const { errors, valid } = validateLogin(loginversuch)
	if (!valid) res.status(400).json(errors)

	firebase.auth().signInWithEmailAndPassword(loginversuch.email,loginversuch.passwort)
	.then(data => {
		return data.user.getIdToken()
	})
	.then(token => {
		return res.json({token})
	})
	.catch(err => {
		console.error(err)	
		if (err.code === "auth/wrong-password" || err.code === "auth/user-not-found") {
			return res.status(403).json({general: "Nutzer existiert nicht oder Passwort ist leider falsch."})	
		}
		return res.status(500).json({error: err.code})
	})
} 

// POST-request: /kuenstler/profilbild, body: form-data (file upload), header: auth token
exports.uploadProfilbild = (req, res) => {
	/*
	request in dieser Form:
	userID: "....efjlkejflkwjeflwe3r234wefwef"
	
	token im Header: "Bearer hwefjhwfjwf ....."
	*/
	const BusBoy = require('busboy')
	const path   = require('path')
	const os     = require('os')
	const fs     = require('fs')

	const busboy = new BusBoy({ headers: req.headers })
	let imageFilename
	let imageToBeUploaded = {}

	busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
		if (mimetype !== "image/jpeg" && mimetype !== "image/png" && mimetype !== "image/webp") {
			res.status(400).json({ error: "Dieses Bildformat wird hier leider nicht unterstützt."})
		}
		// my.image.png
		const splitFileName = filename.split('.')
		const imageExtension = splitFileName[splitFileName.length-1]
		// eg. 1604373067882.png
		imageFilename = `${Date.now()}.${imageExtension}`
		const filePath = path.join(os.tmpdir(), imageFilename)
		console.dir(filePath)
		imageToBeUploaded = { filePath, mimetype }
		file.pipe(fs.createWriteStream(filePath))
	})
	busboy.on('finish', () => {
		admin
		.storage()
		.bucket()
		.upload(imageToBeUploaded.filePath, {
			resumable: false,		
			metadata: {
				metadata: {
					contentType: imageToBeUploaded.mimetype
				}
			}
		})
		.then(() => {
			//https://firebasestorage.googleapis.com/v0/b/galerie-sens.appspot.com/o/kein-profilbild.png?alt=media
			const profilBildUrl = `http://firebasestorage.googelapis.com/v0/b/${
				config.storageBucket}/o/${imageFilename
			}?alt=media`
			return db.doc(`/kuenstler/${req.user.uid}`).update({ profilBildUrl })
		})
		.then(() => {
			res.json({ message: 'Bild wurde erfolgreich hochgeladen.'})
		})
		.catch(err => {
			console.error(err)
			res.status(500).json({error: err.code})
		})
	})
	busboy.end(req.rawBody)
}

// POST-request: /kuenstler, header: auth, body: folgendes obj:
// TAGS separat??
exports.updateProfilInfo = (req, res) => {
	let profilInfo = reduceUserDetails(req.body)
	/*
	{
		profilname: "Nils Sens",
	    nachname: "Sens",
	    vormane: "Nils",
	    plz: "27616",
	    ort: "Stubben", 
	    beschreibung: "Ich bin mein eigener Endgegner."
	}
	*/
	db
	.doc(`/kuenstler/${req.user.uid}`)
	.update(profilInfo)
	.then(() => {
		res.json({ message: "Details wurden aktualisiert."})
	})
	.catch(err => {
		console.error(err)
		res.status(500).json({error: err.code})
	})

	// Tags:
	// Liste von Tags kommt rein -> wird auf bestehende gecheckt. Wo schon welche existieren, heißt es löschen.
	// Ansonsten hinzufügen.
	/*

	Bei Künstlern:

	tags = {
		aquarell:1,
		abstrakt:0,... 	
	}

	Wenn ich nun anzahl -1; check if (kuenstlerIn.uid.tags["abstrakt"] < 1) dann wech!

	*/

}

// eigene Nutzer-Details anzeigen:
// GET-request: /kuenstler, header: auth, kein body
exports.eigeneProfilDetailsLaden = (req,res) => {
	let userData = {}
	db
	.doc(`/kuenstler/${req.user.uid}`).get()
	.then(doc => {
		if (doc.exists) {
			userData = doc.data()
			return db.collection('kuenstler').where("userID", "==", req.user.uid)
		} else return res.status(401).json({ error: "Profil existiert nicht."})	
		
	})
	.then(data => {
		return res.json(userData)
	})
	.catch(err => {
		console.log(err)
		return res.status(500).json({ error: err.code})
	})
}

// DELETE-request: /kuenstler, header: auth, kein body
exports.profilLoeschen = (req, res) => {
	const userID = req.user.uid
	let batch = db.batch()

	// Bilderuploads des Künstlers löschen:
	db.collection('bilder').where('kuenstlerIn','==',userID).get()
  	.then(querySnapshot => {
        querySnapshot.forEach(doc => {
            // For each doc, add a delete operation to the batch
            batch.delete(doc.ref)
        })
    })
    /* TODO: Likes unliken:
    .then(() => {
		// gehe alle vergebenen Likes durch und unlike
    })
    */
    // Künstlerprofil löschen:
    .then(() => {
		batch.delete(db.doc(`/kuenstler/${userID}`))	
	})
	//Login aus Liste löschen:
	.then(() => {
    	// Künstlerprofil löschen:
		batch.delete(db.doc(`/logins/${userID}`))	
	})
	// TODO: Bilder aus Bucket löschen

	.then(() => {
    	batch.commit()

    	// Auth löschen:
		const user = firebase.auth().currentUser
		user.delete()
    	.then(() => {
    		res.json(`Profil ${userID} wurde gelöscht.`)
    	})
    	.catch((err) => {
    		res.status(404).json("Nutzer-Account konnte nicht gelöscht werden. Bitte melden Sie sich bei stubben@hotmail.de.")
    	})
    })
    .catch((err) => {
    	res.status(500).json({error: err.code})
    })
}

// Test: funktioniert auch das Löschen der vom Künstler hochgeladenen Bilder?
// documentation: get().where().delete()
