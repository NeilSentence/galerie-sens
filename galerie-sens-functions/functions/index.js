const functions = require('firebase-functions')
const app = require('express')();
const firebaseAuth = require('./util/firebase-auth')
const { 
	alleBilderLaden, 
	einBildHochladen, 
	updateBildInfos,
	einBildLaden,
	bildLoeschen
} = require('./handlers/bilder')
const { 
	registrierung, 
	login, 
	profilLoeschen,
	uploadProfilbild, 
	updateProfilInfo,
	profilDetailsLaden
} = require('./handlers/kuenstler')

// Bild liken
// Bild unliken


/*============================\\
||                            ||
||          ROUTES            ||
||                            ||
\\============================*/

// Bilder-Routes
app.get('/bilder', alleBilderLaden) // Bilderwand
app.get('/bild/:bildID', einBildLaden) // Detailansicht
app.post('/bild', firebaseAuth, einBildHochladen) // Upload
app.post('/bild/update', firebaseAuth, updateBildInfos) //  Bildinfos-Update
app.delete('/bild/:bildID', firebaseAuth, bildLoeschen) // Bild löschen

// Künstler-Routes
app.post('/registrierung', registrierung)
app.post('/login', login)
app.delete('/kuenstler', firebaseAuth, profilLoeschen) // Profil löschen
app.post('/kuenstler/profilbild', firebaseAuth, uploadProfilbild)
app.post('/kuenstler', firebaseAuth, updateProfilInfo)
app.get('/kuenstler/:profilID', profilDetailsLaden)


// refactoring: https://youtu.be/m_u6P5k0vP0?t=5591

// https://baseurl.com/api/

exports.api = functions.region('europe-west1').https.onRequest(app)


