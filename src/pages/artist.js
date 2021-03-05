import React from 'react'

const Artist = (props) => {
	const style = {
		section: {},
		heading: {
			margin:0,
    		padding: 10,
    		display: "inline-block",
    		background: "lightgrey",
    		color: 'lightgrey',
    		position: 'relative',
    		zIndex: 2,
    		pointerEvents: 'none'
		},
		subheading: {
			justifyContent: "flex-start",
			flex: '0 0 33.333%'
		},
		bioList: {
			textAlign:'left',fontSize:'1.25rem',listStyle:'none'
		},
		bioItem: {
			marginBottom:'1.2em'
		},
		bioItemSubList: {marginBottom:'1em'},
		sublistItem: {fontSize:'1em',marginBottom:'0.9em'},
		kontaktBereich: {
			display:'flex',justifyContent:'center',marginTop:'3em'
		},
		kontaktBtn: {fontSize:'1.3em'}
	}

	return (
		<div className="sctn sctn_artist" style={style.section}>
			<h1 className="sctn_heading delayed-fallable" style={style.heading}>Hilke Sens</h1>
			<div className="sctn_body">
				<div className="sctn_subheading" style={style.subheading}></div>
				<ul className="bio_list" style={style.bioList}>
					<li className="bioItem" style={style.bioItem}>1974 – 1980 Studium der Kunstpädagogik in Berlin</li>
					<li className="bioItem" style={style.bioItem}>seit 1999 Dozentin in der Kunstschule Bederkesa (KUBE e.V.)</li>
					<li className="bioItem" style={style.bioItem}>2001 (2013) Zweite (erste) Vorsitzende der KUBE e.V.</li>
					<li className="bioItem" style={style.bioItem,style.bioItemSubList}><p>seit 2008 Mitglied der Künstlervereinigungen</p><ul><li className="sublistItem" style={style.sublistItem}>„Die Arche“ (Beverstedt)</li><li className="sublistItem" style={style.sublistItem}>„Paradox“ (Lohra)</li><li className="sublistItem" style={style.sublistItem}>„KreDo“ (Donnern)</li></ul></li>
					<li className="bioItem" style={style.bioItem}>seit 1998 regelmäßige Ausstellungen im Landkreis Cuxhaven, in Bremerhaven, Worpswede, Bremen, Hamburg, Göttingen, München, Chaumont (Frankreich).</li>
					<li className="bioItem" style={style.bioItem}>2018 Teilnahme an den „Ice Art Championship“ in Fairbanks, Alaska</li>
				</ul>	
				<div className="kontakt_bereich" style={style.kontaktBereich}>
					<button className="kontakt" style={style.kontaktBtn}>Kontakt</button>
				</div>
			</div>
		</div>
	)
}

export default Artist
