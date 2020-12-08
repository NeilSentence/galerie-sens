import React from 'react'

const styles = {
	h1style: {}
}

function BilderWand () {
	// fetch from db als bildDaten
	const bildDaten = [{bildID:1,titel:"Titel(Test)"}]

	// create the HTML, insert styles}
	const BildComponents = bildDaten.map(b => <div key={b.bildID}><h1 style={styles.h1style}>{b.titel}</h1>{/*etc*/}</div>)

	return (
		<>{BildComponents}</>
	)
	
}

export default BilderWand