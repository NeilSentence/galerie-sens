import React, {Component} from 'react'
import ZurWand from './../components/zurwand'

const BilderwandInfo = props => {
	
	const style = {
		beschreibung:{
			flexBasis: '100%'
		},
		sctn_subheading: {
			alignItems: 'center',
			flex: '0 0 33.333%'
		}
	}
	
	return (
		<div className="sctn sctn_bilderwand">
			<h1 className="sctn_heading delayed-fallable">{props.titel}</h1>
			<div className="sctn_body">
				<div className="sctn_subheading">
					<div style={style.beschreibung} className="delayed-fallable greybg">{props.beschreibung}</div>
					<ZurWand wandLaden={() => {console.log(`Wand ${props.titel} wird geladen...`)}}>Zurück zur Wand</ZurWand>
				</div>
			</div>
		</div>
	)
}

export default BilderwandInfo
