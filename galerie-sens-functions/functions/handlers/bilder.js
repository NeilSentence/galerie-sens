const { db } = require('../util/admin') 

// GET-request /bilder, kein header / auth
exports.alleBilderLaden = (req, res) => {
	db
	.collection('bilder').orderBy('createdAt','desc')
	.get()
	.then(data => {
		let bilder = []
		data.forEach(doc => {
			bilder.push({
				bildID: doc.id,
				...doc.data()
			})
		})
		res.json(bilder)
	})
	.catch(err => console.error(err))
}

// POST-request /bild, auth header, body: titel, beschreibung
exports.einBildHochladen = (req, res) => {

	// TODO: if(kuenstler hat > 249 Bilder) {erlaube den Upload nicht. Grund: man kann bei der Profillöschung nur bis 250 Operationen "batchen".}
	const titel = req.body.titel
	const neuesBild = {
		titel: titel,
		beschreibung: req.body.beschreibung,
		kuenstlerIn:req.user.uid,
		breiteMm:0,
		hoeheMm:0,
		tags:[],
		bildUrl:"",
		likes:[], // "userID1", "userID5", ... likes.length 
		preisEuro:"kein Preis angegeben",
		versandKostenEuro:"keine Versandinfos angegeben",
		istVerkauft:false,
		createdAt: new Date().toISOString()
	}
	db
	.collection('bilder')
	.add(neuesBild)
	.then(doc => {
		res.json({message: `Bild ${doc.id} mit dem Titel "${titel}" wurde hinzugefügt.`})
	})
	.catch(err => {
		console.error(err)
		res.status(500).json({error: 'Irgendwas hat nicht geklappt.'})
	})
}

// POST-request: bild/update, Header: auth, folgendes Obj im body
exports.updateBildInfos = (req, res) => {
	const bild = {
		bildID:req.body.bildID,
		infos: {
			titel:req.body.titel,
			beschreibung:req.body.beschreibung,
			breiteMm:req.body.breiteMm,
			hoeheMm:req.body.hoeheMm,
			tags:req.body.tags,
			bildUrl:req.body.bildUrl,
			likes:req.body.likes,
			preisEuro:req.body.preisEuro,
			versandKostenEuro:req.body.versandKostenEuro
		}
	}
	const bildID = bild.bildID
	if (db.kuenstler[req.user.uid].bilder.indexOf(bildID) !== -1 ) {
		db
		.doc('/bilder${bildID}')
		.update(bild.infos)
		.then(doc => {
			res.status(200).json({message: `Bei Bild "${req.body.titel}" wurde ein Update der Detailinfos durchgeführt.`})
		})
		.catch(err => {
			console.error(err)
			res.status(500).json({error: 'Irgendwas hat beim Bildinfo-Update nicht geklappt.'})
		})	
	}
	else {
		console.error(err)
		return res.status(400).json({error: 'Die Bild-ID konnte nicht zugeordnet werden.'})
	}
}

// GET-request: /bild/:bildID, kein header / auth
exports.einBildLaden = (req, res) => {
	const bildID = req.params.bildID
	let bild = {}
	// console.dir(req.params) -> {bildID: "9834kjh349834987"}
	db
	.doc(`/bilder/${bildID}`) // params ist einfach der GET-request "Pfad": ...api/bild/9834kjh349834987 
	.get()
	.then(doc => {
		if (!doc.exists) {
			return res.status(404).json({error: "Bild nicht gefunden."})
		}
		bild = doc.data()
		bild.bildID = doc.id
		return res.json(bild)
	})
	.catch(err => {
		console.error(err)
		return res.status(500).json({error: err.code})
	})	
}

// DELETE-request: /bild/:bildID, header: auth 
exports.bildLoeschen = (req, res) => {
	const bildID = req.params.bildID
	db
	.doc(`/bilder/${bildID}`) // params ist einfach der DELETE-request "Pfad": ...api/bild/9834kjh349834987 
	.get()
	.then(doc => {
	// 1. Bild aus der Bilder-Collection löschen
		if (!doc.exists) return res.status(404).json({error: "Bild nicht gefunden."})
		// nur wenn es ein Bild des eingeloggten Künstlers ist:
		if (db.kuenstler[req.user.uid].bilder.indexOf(bildID) !== -1 ) document.delete()
		else res.status(403).json({error: "Sie dürfen nur eigene Bilder löschen."}) /*status:403*/
	})
	.then(() => {
		res.json({message: `Bild ${bildID} wurde gelöscht.`})
	})
	// 2. Alle dort enthaltenen Likes zurückdröseln
	//    Durch die Liste aller Likes gehen, und dieses Bild herausnehmen.
	// 	  Dabei gleichzeitig (nested loop) durch die Liste der Künstler gehen (die wir schön griffbereit haben), und dieses Bild aus der Liste der vergebenen Likes nehmen.
	
	// 3. Erhaltene Likes-Objekte im kuenstler (userID) durchgehen, und forEach (bild) { if(bild.bildID == bildID) bild löschen. 

	// 4. Bild aus der 

	.catch(err => {
		console.error(err)
		return res.status(500).json({error: err.code})
	})	
	// TODO: .batch() !!
}