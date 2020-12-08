const admin = require('firebase-admin')
admin.initializeApp() // leer weil in der .firebaserc bereits unter default: galerie-sens steht.

const db = admin.firestore()

module.exports = { admin, db }