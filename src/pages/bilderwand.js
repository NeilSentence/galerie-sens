import React, {Component} from 'react'

class Bilderwand extends Component {
	constructor(props){
		super(props)
		// TODO: eigentlich muss window state ein paar Stufen höher und ge-propt werden.
		this.state = {
	      	scrollPosX: 0
	    }
	}
	render() {
		return (
			<div className="sctn sctn_bilderwand">
				<h1 className="sctn_heading delayed-fallable">{this.props.titel}</h1>
				<div className="sctn_body">
					<div className="sctn_subheading">
						<div className="delayed-fallable greybg">{this.props.beschreibung}</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Bilderwand
