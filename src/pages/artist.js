import React from 'react'

const Artist = (props) => {
	const style = {
		heading: {
			margin:0,
    		padding: 10,
    		display: "inline-block",
    		background: "#333333",
    		color: 'lightgrey',
    		position: 'relative',
    		zIndex: 2,
    		pointerEvents: 'none'
		},
		subheading: {
			justifyContent: "flex-start",
			flex: '0 0 33.333%'
		}
	}

	return (
		<div className="sctn sctn_artist">
			<h1 className="sctn_heading delayed-fallable" style={style.heading}>Hilke Sens</h1>
			<div className="sctn_body">
				<div className="sctn_subheading" style={style.subheading}>
					<div className="delayed-fallable greybg">Künstlerin aus Geestland, Niedersachsen.</div>
					<div className="delayed-fallable greybg">Email: stubben@hotmail.de</div>
					<div className="delayed-fallable greybg">Tel: 04743-9138612</div>
				</div>
			</div>
		</div>
	)
}

export default Artist
