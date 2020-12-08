import React, {Component} from 'react'

// TODO: add Impressum Layout & Content

class Impressum extends Component {
	render() {
		return (
			<div className="sctn sctn_impressum">
				<h1 className="sctn_heading">Impressum</h1>
				<div className="sctn_body">

				<h1>Datenschutzerklärung</h1>

				<h2>Seiteninhaberin:</h2>
				<p>Hilke Sens</p>
				<p>Die Nutzung meiner Seite ist ohne eine Angabe von personenbezogenen Daten möglich. Für die Nutzung des Kontaktformulars ergeben sich allerdings folgende Regelungen. Eure Namen u. Kontaktdaten werden von uns nur gemäß den Bestimmungen des deutschen Datenschutzrechts (siehe Bundesdatenschutzgesetz (BDSG) & Telemediengesetz (TMG)) verarbeitet. Ein Hacker oder Spion kann allerdings immer in der Leitung hängen, das lässt sich nicht ausschließen!</p>

				<h2>Kontaktmöglichkeit:</h2>
				<p>Ihr könnt mich über ein Kontaktformular kontaktieren. In diesem Fall landen eure Angaben nur zum Zwecke der Kontaktaufnahme auf meinem Emailserver und werden ggf. handschriftlich abkopiert. Eine Weitergabe erfolgt nicht und ich mache auch sonst nichts mit den Daten.</p>

				<h2>Auskunft/Korrektur/Löschung:</h2>
				<p>Fragen zu euren Daten immer gern und kostenlos! Berichtigung, Löschung, usw. ist jederzeit möglich, sollte dem keine gesetzliche Aufbewahrungspflicht entgegenstehen.</p>

				<h2>Offline zu erreichen (Atelier):</h2>
				<p>Amtsstraße 8</p>
				<p>27624 Stadt Geestland</p>
				<p>0171/3470338</p>
				<p>stubben@hotmail.de</p>

				<h2>Web Design:</h2>
				<p> Nils Sens; germandentalnx@gmail.com</p>
				</div>
			</div>
		)
	}
}

export default Impressum