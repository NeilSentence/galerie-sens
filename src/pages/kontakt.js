import React from 'react'
import { useNavigate } from 'react-router-dom'

const Kontakt = props => {

	// geiler Effekt:
	// backdropFilter: blur(10px) 

	const navigate = useNavigate()
	const zuKuenstler = () => {
		navigate('/')
		navigate('/kuenstlerin')
	}
	
	const style = {
		section: {zIndex:2000,width:'100vw',height:'100vh',position:'fixed',left:0,top:0,background:'rgb(240,240,240)',display:'flex',alignItems: 'center', justifyContent: 'center'},
		formular:{padding:'2em',border:'1px solid rgb(200,200,200)', alignSelf: 'center',minWidth: '750px', maxWidth: '1800px'},
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
		greys:{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'},
		formularItem: {padding:20,textAlign:'center'},
		kontaktInput: {marginTop:'1em',height:40,fontSize:'1.2em',textAlign:'center',padding:'20',minWidth:'450px'},
		submitButton: {padding:'1.5em',fontSize:'1.1em',textAlign:'center',margin: '1em auto 0.5em',display:'inherit'},
		cancelButton: {padding:'1em',fontSize:'0.85em',marginTop:'1em'}
	}

	const rootForBGChange = document.getElementById('root')
	rootForBGChange.style.background = 'rgb(240,240,240)'

	return (		
		<div className="sctn sctn_kontakt" style={style.section}>
			<div className="formular" style={style.formular}>
				<div className="formular_item" id="kontaktart" style={style.formularItem}>
					<div className="sctn_subheading" style={style.greys}>
						<span className="sctn_heading delayed-fallable" style={style.heading}>Wie</span><span className="sctn_heading delayed-fallable" style={style.heading}>oder</span><span className="sctn_heading delayed-fallable" style={style.heading}>wo</span><span className="sctn_heading delayed-fallable" style={style.heading}>kann</span><span className="sctn_heading delayed-fallable" style={style.heading}>ich</span><span className="sctn_heading delayed-fallable" style={style.heading}>Sie</span><span className="sctn_heading delayed-fallable" style={style.heading}>kontaktieren?</span>
					</div>
					<input placeholder="Email, Telefon, etc. " type="text" id="input_kontaktart" className="kontakt_input" style={style.kontaktInput}/>
				</div>

				<div className="formular_item" id="message" style={style.formularItem}>
					<input placeholder="Eine Nachricht hinterlassen (optional)" type="text" id="input_message" className="kontakt_input" style={style.kontaktInput}/>
				</div>
				<button type="submit" onClick={zuKuenstler} style={style.submitButton}>Absenden</button>
				<button type="cancel" onClick={zuKuenstler} style={{...style.submitButton, ...style.cancelButton}}>Abbrechen</button>
			</div>
			

		</div>
	)
}

export default Kontakt