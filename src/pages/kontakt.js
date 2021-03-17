import React from 'react'

const Kontakt = props => {


	const style = {
		section: {},
		heading: {
			margin:0,
    		padding: 10,
    		display: "inline-block",
    		background: 'rgb(240,240,240)',
    		color: 'rgb(120,120,120)',
    		position: 'initial',
    		zIndex: 4,
    		pointerEvents: 'none'
		},
		kontaktList: {

		}
	}

	return (		
		<div className="sctn sctn_kontakt" style={style.section}>
			<h1 className="sctn_heading delayed-fallable" style={style.heading}>Ich freue mich über Nachrichten!!</h1>
			<div className="sctn_body" style={style.sectionBody}>
				<ul className="kontakt_list" style={style.kontaktList}>
				</ul>
			</div>
		</div>
	)
}

export default Kontakt