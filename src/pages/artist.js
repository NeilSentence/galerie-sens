import React from 'react'
import { useNavigate } from 'react-router-dom'

const Artist = props => {


	const navigate = useNavigate()

	const contactLink = () => {
		navigate('/')
		navigate('/kontakt')
	}
	
	const rootForBGChange = document.getElementById('root')
	rootForBGChange.style.background = 'rgb(240,240,240)'


	const artistInfo = {
		// hier werden die einzelnen Zeilen reingepackt
	}

	const style = {
		section: {},
		sectionBody: {},
		heading: {
			margin:0,
    		padding: 10,
    		display: 'block',
    		background: 'rgb(240,240,240)',
    		color: 'rgb(120,120,120)',
    		position: 'initial',
    		zIndex: 4,
    		pointerEvents: 'none',
    		width: 150,
    		margin: '0 auto'
		},
		subheading: {
			justifyContent: "flex-start",
			flex: '0 0 33.333%'
		},
		bioList: {
			textAlign:'left',fontSize:'1.25rem',listStyle:'none',marginLeft:'-400px'
		},
		bioItem: {
			marginBottom:'1.2em'
		},
		linkeSeite: {
			marginRight:'25px',textAlign:'right',right:0,width:'50%',display:'inline-block',verticalAlign:'top'
		},
		rechteSeite: {left:0,width:'calc(50% - 25px)',display:'inline-block',verticalAlign:'top'},
		//bioItemSubList: {marginBottom:'1em'},
		sublistItem: {fontSize:'1em',marginBottom:'0.9em', listStyle:'disc'},
		kontaktContainer: {
			display:'flex',justifyContent:'center',marginTop:'3em',position:'relative'
		},
		kontaktBtn: {transition: 'background 1s ease', padding:'0.8em',fontSize:'1.3em', border: '1px solid grey', fontFamily:'Delius-Regular',background: 'none',color: 'rgb(120,120,120)',cursor:'pointer'}
	}

	return (
		<div className="sctn sctn_artist" style={style.section}>
			<h1 className="sctn_heading delayed-fallable" style={style.heading}>Hilke Sens</h1>
			<div className="sctn_body" style={style.sectionBody}>
				<ul className="bio_list" style={style.bioList}>
					<li className="bioItem" style={style.bioItem}><span className="linke_seite" style={style.linkeSeite}>1974 – 1980</span><span className="rechte_seite" style={style.rechteSeite}>Studium der Kunstpädagogik in Berlin</span></li>
					<li className="bioItem" style={style.bioItem}><span className="linke_seite" style={style.linkeSeite}>seit 1999</span><span className="rechte_seite" style={style.rechteSeite}>Dozentin in der Kunstschule Bederkesa (KUBE e.V.)</span></li>
					<li className="bioItem" style={style.bioItem}><span className="linke_seite" style={style.linkeSeite}>2001 (2013)</span><span className="rechte_seite" style={style.rechteSeite}> zweite (erste) Vorsitzende der KUBE e.V.</span></li>
					<li className="bioItem" style={style.bioItem}><span className="linke_seite" style={style.linkeSeite}>seit 2008</span><span className="linke_seite" style={style.rechteSeite}>Mitglied der Künstlervereinigungen</span></li>
					<li className="bioItem" style={style.bioItem}><span className="linke_seite" style={style.linkeSeite}></span><span style={style.rechteSeite}><ul><li className="sublistItem" style={style.sublistItem}>„Die Arche“ (Beverstedt)</li><li className="sublistItem" style={style.sublistItem}>„Paradox“ (Lohra)</li><li className="sublistItem" style={style.sublistItem}>„KreDo“ (Donnern)</li></ul></span></li>
					
					<li className="bioItem" style={style.bioItem}><span className="linke_seite" style={style.linkeSeite}>seit 1998</span><span className="rechte_seite" style={style.rechteSeite}>regelmäßige Ausstellungen im Landkreis Cuxhaven, in Bremerhaven, Worpswede, Bremen, Hamburg, Göttingen, München, Chaumont (Frankreich).</span></li>
					<li className="bioItem" style={style.bioItem}><span className="linke_seite" style={style.linkeSeite}>2018</span><span className="rechte_seite" style={style.rechteSeite}>Teilnahme an den „Ice Art Championship“ in Fairbanks, Alaska</span></li>
				</ul>	
				<div className="kontakt_container" style={style.kontaktContainer}>
					<button className="kontakt" style={style.kontaktBtn} onTouchEnd={(el) => {contactLink(el)}} onClick={(el) => {el.preventDefault();contactLink(el)}}>Kontakt</button>
				</div>
			</div>
		</div>
	)
}

export default Artist
