import React, { useState } from 'react'
import ZurWand from './../components/zurwand'
import Einzelbild from './../components/einzelbild'

// hier müssen Bilder geladen werden
// const bilder = []
// bilder.map(...) erstelle <BildThumb />


const Bilderwand = props => {

	const [einzelAnsicht, setEinzelAnsicht] = useState(false)
	const [selectedArt, setSelectedArt] = useState(0)

	let SingleArtView = einzelAnsicht

	//setEinzelAnsicht(false) infinite loop because component re-renders

	//alert(props.match.params)

	// ### click auf Bild -> setEinzelAnsicht! && set Bildinfos

	const style = {
		header:{
			display:'flex',
			flexDirection: 'row',
    		alignItems: 'center',
    		justifyContent: 'space-between',
    		top: 0,
    		height: 64,
    		position: 'fixed',
    		zIndex: 1
		},
		heading: {
			height: 36,
			zIndex:2,
			color:'lightgrey',
			pointerEvents: 'none',
			fontSize:'1.5em'
		},
		wand:{
			background:'#2b2b2b',
			height:'100vh',
			width:'100%',
			position: 'fixed',
		    top: 0,
		    left: 0
		},
		arrowcontrols:{
			position:'absolute',
			zIndex:3,
			color:'rgb(240,240,240)',
			display:'flex',
			alignItems:'center',
			left:50,
			height:'100%',
			top:0,
			width:'calc(100% - 100px)',
			justifyContent:'space-between',
			fontSize:'2.5em',
			flexDirection:'row-reverse',
			pointerEvents:'none'
		},
		arrow:{
			opacity:'0.6',
			transition:'opacity 0.2s ease',
			fontWeight:900,
			cursor:'pointer',
			pointerEvents:'all'
		},
		imagewrapper:{
			position:'absolute',
			top:0,
			width:'100vw',
			height:'100%',
			display: 'flex',
		    flexDirection: 'row',
		    alignItems: 'center',
		    justifyContent: 'center',
		    transition: 'left 1s ease'
		},
		image:{
			cursor:'pointer',
			display:'inline',
			opacity:0,
			animationName:'fadein',
			animationDuration:'0.4s',
			animationDelay:'1s',
			animationTimingFunction: 'ease',
			animationFillMode: 'forwards',
			height:'70%'
		},
		bildtitel:{
			color: 'lightgrey'
		}
	}

	// clickEvent auf IMG, 
	// dann <p className="bild_titel" style={style.bildtitel}>{props.bilder[0].titel}</p> 
	// unter Einzelbildansicht (EBA)

	const bilder = props.bilder
	/*
		[i]
			.titel
			.beschreibung
			.preis
			.tags
			.groesse.x/.y/.z
			.gewicht
			.altSrc // [filename2,filename3]
			.source
			.alt#txt
			.verkauft // true,false
	*/


	// NAVIGATION BY ARROW KEYS WILL NOT CALL CURRENTART FUNCTION !!!!!!
	

	const currentArt = () => {
		const wrappers = document.getElementsByClassName('bilderwrapper')
		let wrapper
		for (const index in wrappers) {
			if (typeof wrappers[index].style !== 'undefined') {
				if (wrappers[index].style.left === '0%') {
					wrapper = wrappers[index]
				}
			}
		}
		setSelectedArt(wrapper.querySelector('img').id)
	}

	



	const singleArtView = (el) => {
		setSelectedArt(el.target.id)
		setEinzelAnsicht(true)
		SingleArtView = true
	}

	const bilderHTML = bilder.map((bild) => {
		const left = bild.id*100

		const wrapperstyleobj = JSON.stringify(style.imagewrapper)
		const newwrapperstyle = JSON.parse(wrapperstyleobj)
		newwrapperstyle.left=left+'%'

		const imgstyleobj = JSON.stringify(style.image)
		const newimgstyle = JSON.parse(imgstyleobj)
		if (bild.schatten) {
			newimgstyle.WebkitBoxShadow='0px 0px 52px 0px rgba(0, 0, 0, 1)'
			newimgstyle.MozBoxShadow   ='0px 0px 52px 0px rgba(0, 0, 0, 1)'
			newimgstyle.boxShadow      ='0 0 10px rgba(0,0,0,1),0 0 30px rgba(0,0,0,0.85),0 0 40px rgba(0,0,0,0.45),0 0 50px rgba(0,0,0,0.3),0 0 60px rgba(0,0,0,0.25)'
		}

        return (<div key={bild.id} className="bilderwrapper" style={newwrapperstyle}><img id={bild.id} className="wandbild" style={newimgstyle} alt={bilder[bild.id].altTxt} src={bilder[bild.id].source} onClick={(el)=>{singleArtView(el)}}/></div>)
    })

	const getZahl = (obj) => {
		// get css value str:
		const origLeft = obj.style.left
		// cut off '%':
		const nurZahl = origLeft.substring(0,origLeft.length-1)	
		return(parseInt(nurZahl))
		// return nurZahl
	}

	const bilderwrap = document.getElementsByClassName('bilderwrapper')
	// getElementsByClassName returns HTMLCollection not nodelist! Deswegen muss man dort ein bisschen nachhelfen:
	HTMLCollection.prototype.forEach = Array.prototype.forEach

	const checkForUnnecessaryArrows = () => {

		const larrw = document.getElementById('leftarrow')
		const rarrw = document.getElementById('rightarrow')

		if (bilderwrap[0].style.left === '0%') {
			larrw.style.display = 'none'
		} else {
			larrw.style.display = 'block'
		}
		if (bilderwrap[bilderwrap.length-1].style.left === '0%') {
			rarrw.style.display = 'none'
		} else {
			rarrw.style.display = 'block'
		}
	}


	document.addEventListener('keydown',function(evt){
		evt.stopImmediatePropagation()
		if(document.querySelector('.bilderwrapper') !== null) {
			evt = evt || window.event
			if (bilderwrap.length > 1) {

				if (evt.keyCode === 37) {
					
					if (bilderwrap[0].style.left !== '0%') {
					
						bilderwrap.forEach((wrap) => {

							const zahl = getZahl(wrap)
							wrap.style.left = (zahl+100)+'%'
						})
						currentArt()
					}
				}
				
				else if (evt.keyCode === 39) {
					
					if (bilderwrap[bilderwrap.length-1].style.left !== '0%') {
			    		
			    		bilderwrap.forEach((wrap) => {

							const zahl = getZahl(wrap)
			    			wrap.style.left = (zahl-100)+'%'
			    		})
			    		currentArt()
			    	}
			    }

			    // check buttons
			    checkForUnnecessaryArrows()
				
			}
		}
	})


    const arrowcontrols = (bilder) => {
    	if (bilder.length > 1) {

			const arrownavigation = (e) => {
				
				if (e.currentTarget.id === "leftarrow") {
					bilderwrap.forEach((wrap) => {
						const zahl = getZahl(wrap)
						wrap.style.left = (zahl+100)+'%'
					})
				}
				else {
					bilderwrap.forEach((wrap) => {
						const zahl = getZahl(wrap)
						wrap.style.left = (zahl-100)+'%'
					})
				}

				checkForUnnecessaryArrows()
			}
	    	return(
		    	<div className="arrowcontrols" style={style.arrowcontrols}>
					<div className="arrow" onClick={(el) => {arrownavigation(el);currentArt()}}  id="rightarrow" style={style.arrow}>&#x25E8;</div>
					<div className="arrow" onClick={(el) => {arrownavigation(el);currentArt()}} id="leftarrow" style={style.arrow}>&#x25E7;</div>
					<style>
		  				{`.arrow:hover{opacity:1 !important}#leftarrow{display:none}`}
					</style>
				</div>
			)
		}
    } 

	return (
		<div className="sctn sctn_bilderwand">
			<div className="sctn_header" style={style.header}>
				<h1 className="sctn_heading" style={style.heading}>{props.titel}</h1>
				<ZurWand label="Anmerkungen" wandLaden={() => {console.log(`Wand ${props.titel} wird geladen...`)}}>Anmerkungen der Künstlerin</ZurWand>
			</div>
			<div className="sctn_body">
				{arrowcontrols(bilder)}
				<div className="sctn_wand" style={style.wand}>
					{bilderHTML}
				</div>
			</div>
			{SingleArtView && <Einzelbild bildinfos={bilder[selectedArt]} schliessen={()=>{setEinzelAnsicht(false);SingleArtView = false}} />}
		</div>
	)
}

export default Bilderwand