const bilder = {
	kuenstlerIn: "userID", 
    titel: "Bildtitel",
    beschreibung: "Dies ist ein Beschreibungstext",
    tags: ["aquarell", "landschaftsbild"],
    preisEuro: 550,
    // nurAbholer: false,
    versandkostenEuro: 5,
   	breiteCm: 50.8,
	hoeheCm: 23,
	bildQuelle: "URI/ref...", 
	// alternativBilder: ["URI/ref...","URI/ref..."],
	likes: 3,
	istVerkauft:false,
	createdAt: (timestamp: new Date().toISOString())
	// kommentare: 5 // ("um wiederholte kostenpflichtige Zugriffe zu minimieren")
}
	
const kuenstler = {
	// TODO: momentan ist ID == 'kuenstlerIn'. Braucht ID wie Bilder, AUTO, REG
    profilname: "Hilke Sens", // *REG / PROFILUPDATE
    nachname: "Sens", // *REG / PROFILUPDATE
    vormane: "Hilke", // *REG / PROFILUPDATE
    email: "...",  // *REG 
    userID: "...", // AUTO, REG 
    // ?? profilUrl: "...", or simply combination of general route + UID ?
    profilBildUrl: "...", // UPLOAD
    
    plz: "", // PROFILUPDATE
    ort: "", // PROFILUPDATE
    beschreibung: "Ich bin kreativ.", // PROFILUPDATE
    tags: [{name:"aquarell",anzahl:1}, {...}], // DYN || PROFILUPDATE

    bilder: ["bildId1","bildId2"] // BildIds, DYN; bilder.length ergibt die Anzahl der hochgeladenen Bilder
    likesErhalten: [{bildID: "bildId1", anzahl:1},{bildID: "bildId2", anzahl:5}], // DYN; keine Info, von wem. 
    likesVergeben: ["bildId1","bildId2"], // DYN ??? Dann könnte man "meine Lieblingsbilder" anzeigen. UPDATE....
    registriertSeit: "" // AUTO, REG
}

const likes = {
	[{bildID: "", likedBy: ["","",...]}, {...} ]// DYN
}

// REGISTRIERUNG NEU
{
    "email": "germandentalnx@gmail.com",
    "passwort": "123456",
    "bestaetigtesPasswort": "123456",
    "profilname": "Nils Sens"
}

// LOGIN
{
    "email": "germandentalnx@gmail.com",
    "passwort": "123456"
}
// req.header: "Bearer access token"



// UPLOAD PROFILBILD

// req.body: (form-data)
// req.header: "Bearer access token"



// UPDATE BILDINFOS
/*
	req.body: 
	{
		bildID,
		infos = {
			titel:"",
			beschreibung:"",
			breiteMm:0,
			hoeheMm:0,
			tags:[{}],
			bildUrl:"",
			likes:0,
			preisEuro:0,
			versandKostenEuro:0
		}
	}

*/

// example image


{       
    "titel": "Herbstliches Flugobjekt 1",
    "beschreibung": "Ein Aquarell.",
    "kuenstlerIn": "Hilke Sens",
    "breiteMm":600,
    "hoeheMm":400,
    "tags":["aquarell","abstrakt","experimentell","malerei"],
    "bildUrl":"",
    "likes":0,
    "preisEuro":500,
    "versandKostenEuro":5
}