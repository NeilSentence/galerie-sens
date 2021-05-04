import React, { useState } from 'react'
import Kontakt from './kontakt'

const KontaktDisclaimer = props => {

	// geiler Effekt:
	// backdropFilter: blur(10px) 

	const [showKontakt, setShowKontakt] = useState(false)
	
	const style = {
		section: {display:'flex',alignItems: 'center', justifyContent: 'center', width: '100vw'},
		formular:{position:'fixed',padding:'2em',border:'1px solid rgb(200,200,200)', alignSelf: 'center',minWidth: '750px', maxWidth: '1800px'},
		greys:{marginBottom:'2em'},
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
		formularItem: {marginBottom:'2em',padding:20,textAlign:'center'},
		kontaktInput: {height:40,fontSize:'1.2em',textAlign:'center',padding:'20',minWidth:'450px'},
		okButton: {padding:'1.5em',fontSize:'1.1em',textAlign:'center',margin: '0 auto',display:'inherit',marginBottom:'2em'}
	}

	const rootForBGChange = document.getElementById('root')
	rootForBGChange.style.background = 'rgb(240,240,240)'

	const closeDisclaimer = () => {
		setShowKontakt(true)
	}

	return (		
		<div className="sctn sctn_kontakt_disclaimer" style={style.section}>
			<div className="formular" style={style.formular}>
				<div className="formular_item" id="disclaimer" style={style.formularItem}>
					<div className="sctn_subheading" style={style.greys}>
						<span className="sctn_heading delayed-fallable" style={style.heading}>Nehmen</span><span className="sctn_heading delayed-fallable" style={style.heading}>Sie</span><span className="sctn_heading delayed-fallable" style={style.heading}>mit</span><span className="sctn_heading delayed-fallable" style={style.heading}>mir</span><span className="sctn_heading delayed-fallable" style={style.heading}>durch</span><span className="sctn_heading delayed-fallable" style={style.heading}>die</span><span className="sctn_heading delayed-fallable" style={style.heading}>angebotene</span><span className="sctn_heading delayed-fallable" style={style.heading}>Kontaktmöglichkeit</span><span className="sctn_heading delayed-fallable" style={style.heading}>Verbindung</span><span className="sctn_heading delayed-fallable" style={style.heading}>auf,</span><span className="sctn_heading delayed-fallable" style={style.heading}>werden</span><span className="sctn_heading delayed-fallable" style={style.heading}>Ihre</span><span className="sctn_heading delayed-fallable" style={style.heading}>Eingaben</span><span className="sctn_heading delayed-fallable" style={style.heading}>gespeichert,</span><span className="sctn_heading delayed-fallable" style={style.heading}>damit</span><span className="sctn_heading delayed-fallable" style={style.heading}>ich</span><span className="sctn_heading delayed-fallable" style={style.heading}>Sie</span><span className="sctn_heading delayed-fallable" style={style.heading}>zur</span><span className="sctn_heading delayed-fallable" style={style.heading}>Beantwortung</span><span className="sctn_heading delayed-fallable" style={style.heading}>Ihrer</span><span className="sctn_heading delayed-fallable" style={style.heading}>Anfrage</span><span className="sctn_heading delayed-fallable" style={style.heading}>kontaktieren</span><span className="sctn_heading delayed-fallable" style={style.heading}>kann.</span><span className="sctn_heading delayed-fallable" style={style.heading}>Ohne</span><span className="sctn_heading delayed-fallable" style={style.heading}>Ihre</span><span className="sctn_heading delayed-fallable" style={style.heading}>Einwilligung</span><span className="sctn_heading delayed-fallable" style={style.heading}>werden</span><span className="sctn_heading delayed-fallable" style={style.heading}>diese</span><span className="sctn_heading delayed-fallable" style={style.heading}>Daten</span><span className="sctn_heading delayed-fallable" style={style.heading}>nicht</span><span className="sctn_heading delayed-fallable" style={style.heading}>an</span><span className="sctn_heading delayed-fallable" style={style.heading}>Dritte</span><span className="sctn_heading delayed-fallable" style={style.heading}>weitergegeben.</span><span className="sctn_heading delayed-fallable" style={style.heading}>Sie</span><span className="sctn_heading delayed-fallable" style={style.heading}>erhalten</span><span className="sctn_heading delayed-fallable" style={style.heading}>auf</span><span className="sctn_heading delayed-fallable" style={style.heading}>Antrag</span><span className="sctn_heading delayed-fallable" style={style.heading}>Ihrerseits</span><span className="sctn_heading delayed-fallable" style={style.heading}>kostenlose</span><span className="sctn_heading delayed-fallable" style={style.heading}>Auskunft</span><span className="sctn_heading delayed-fallable" style={style.heading}>darüber,</span><span className="sctn_heading delayed-fallable" style={style.heading}>welche</span><span className="sctn_heading delayed-fallable" style={style.heading}>personenbezogenen</span><span className="sctn_heading delayed-fallable" style={style.heading}>Daten</span><span className="sctn_heading delayed-fallable" style={style.heading}>über</span><span className="sctn_heading delayed-fallable" style={style.heading}>Sie</span><span className="sctn_heading delayed-fallable" style={style.heading}>gespeichert</span><span className="sctn_heading delayed-fallable" style={style.heading}>wurden.</span><span className="sctn_heading delayed-fallable" style={style.heading}>Sie</span><span className="sctn_heading delayed-fallable" style={style.heading}>haben</span><span className="sctn_heading delayed-fallable" style={style.heading}>ein</span><span className="sctn_heading delayed-fallable" style={style.heading}>Anrecht</span><span className="sctn_heading delayed-fallable" style={style.heading}>auf</span><span className="sctn_heading delayed-fallable" style={style.heading}>Berichtigung</span><span className="sctn_heading delayed-fallable" style={style.heading}>falscher</span><span className="sctn_heading delayed-fallable" style={style.heading}>Daten</span><span className="sctn_heading delayed-fallable" style={style.heading}>und</span><span className="sctn_heading delayed-fallable" style={style.heading}>auf</span><span className="sctn_heading delayed-fallable" style={style.heading}>die</span><span className="sctn_heading delayed-fallable" style={style.heading}>Sperrung</span><span className="sctn_heading delayed-fallable" style={style.heading}>oder</span><span className="sctn_heading delayed-fallable" style={style.heading}>Löschung</span><span className="sctn_heading delayed-fallable" style={style.heading}>Ihrer</span><span className="sctn_heading delayed-fallable" style={style.heading}>personenbezogenen</span><span className="sctn_heading delayed-fallable" style={style.heading}>Daten.</span>
					</div>
					<button style={style.okButton} onTouchEnd={(el) => {closeDisclaimer(el)}}
			onClick={(el) => {el.preventDefault();closeDisclaimer(el)}}>OK</button>
				</div>
				
			</div>
			{showKontakt && <Kontakt/>}
		</div>
	)
}

export default KontaktDisclaimer