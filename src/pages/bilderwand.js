import React from 'react'
import ZurWand from './../components/zurwand'

// hier müssen Bilder geladen werden
// const bilder = []
// bilder.map(...) erstelle <BildThumb />

const Bilderwand = (props) => {
	const style = {
		wand:{
			background:'#cccccc',
			height:'100%',
			width:'100%',
			position:'relative'
		}
	}
	
	return (
		<div className="sctn sctn_bilderwand">
			<h1 className="sctn_heading delayed-fallable">{props.titel}</h1>
			<ZurWand label="Anmerkungen der Künstlerin" wandLaden={() => {console.log(`Wand ${props.titel} wird geladen...`)}}>Anmerkungen der Künstlerin</ZurWand>
			<div className="sctn_body">
				<div className="sctn_wand" style={style.wand}>
					<img src="/IMG/asfkba.jpg" />
				</div>
			</div>
		</div>
	)
}

export default Bilderwand