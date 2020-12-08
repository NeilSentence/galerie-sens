	// Validate Input Data
	// https://youtu.be/m_u6P5k0vP0?t=3986

const isEmail = (email) => {
	const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return email.match(emailRegEx)
}

const isEmpty = (string) => {
	return string.trim() === "" 
}

const feldleerFehler = "Sorry, dieses Feld darf nicht leer sein."

exports.validateSignup = (kuenstler) => {
	let errors = {}
	if (isEmpty(kuenstler.email))       errors.email = feldleerFehler
	else if (!isEmail(kuenstler.email)) errors.email = 'Es sieht so aus, als ob die Email-Addresse nicht dem Format "name@anbieter.xy" folgt. Bitte überprüfen!'
	if (isEmpty(kuenstler.passwort)) errors.passwort = feldleerFehler
	if (kuenstler.passwort !== kuenstler.bestaetigtesPasswort) errors.conformPasswort = "Die Passwörter stimmen nicht überein!"
	if (isEmpty(kuenstler.passwort)) errors.passwort = "Bitte geben Sie Ihrem Profil einen Namen. Das muss nicht Ihr eigener sein."

	return {
		errors,
		valid: Object.keys(errors).length === 0 ? true : false
	}
}

exports.validateLogin = (kuenstler) => {
	let errors = {}
	if (isEmpty(kuenstler.passwort)) errors.passwort = feldleerFehler
	if (isEmpty(kuenstler.email)) errors.email = feldleerFehler
	else if (!isEmail(kuenstler.email)) errors.email = 'Es sieht so aus, als ob die Email-Addresse nicht dem Format "name@anbieter.xy" folgt. Bitte überprüfen!'
	
	return {
		errors,
		valid: Object.keys(errors).length === 0 ? true : false
	}
}

exports.reduceUserDetails = (data) => {
	let userDetails = {}
	if (!isEmpty(data.profilName)) userDetails.profilName = data.profilName
	if (!isEmpty(data.beschreibung)) userDetails.beschreibung = data.beschreibung
	if (!isEmpty(data.ort)) userDetails.ort = data.ort
	if (!isEmpty(data.plz)) userDetails.plz = data.plz
	if (data.tags.length > 0) userDetails.tags = data.tags
}