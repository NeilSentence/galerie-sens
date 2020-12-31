import React, {Component} from 'react'
import ZurWand from './../components/zurwand'

class Bilderwand extends Component {
	constructor(props){
		super(props)
		// TODO: eigentlich muss window state ein paar Stufen höher und ge-propt werden.
		this.state = {
	      	scrollPosX: 0
	    }
	}
	style = {
		beschreibung:{
			flexBasis: '100%'
		}
	}
	render() {
		return (
			<div className="sctn sctn_bilderwand">
				<h1 className="sctn_heading delayed-fallable">{this.props.titel}</h1>
				<div className="sctn_body">
					<div className="sctn_subheading">
						<div style={this.style.beschreibung} className="delayed-fallable greybg">{this.props.beschreibung}</div>
						<ZurWand wandLaden={() => {console.log(`Wand ${this.props.titel} wird geladen...`)}}>Zur Bilderwand</ZurWand>
					</div>
				</div>
			</div>
		)
	}
}

export default Bilderwand
