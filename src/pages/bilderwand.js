import React, { useState/*, useEffect*/ } from 'react'
import ZurWand from './../components/zurwand'
import Einzelbild from './../components/einzelbild'
// import { useParams } from 'react-router-dom'

// hier müssen Bilder geladen werden
// const bilder = []
// bilder.map(...) erstelle <BildThumb />


const Bilderwand = props => {

	// getElementsByClassName returns HTMLCollection not nodelist! Deswegen muss man dort ein bisschen nachhelfen:
	HTMLCollection.prototype.forEach = Array.prototype.forEach


	const checkForUnnecessaryArrows = () => {

		const wrappers = document.getElementsByClassName('bilderwrapper')
		const larrw = document.getElementById('leftarrow')
		const rarrw = document.getElementById('rightarrow')

		if (wrappers[0].style.left === '0%') {
			larrw.style.display = 'none'
		} else {
			larrw.style.display = 'block'
		}
		if (wrappers[wrappers.length-1].style.left === '0%') {
			rarrw.style.display = 'none'
		} else {
			rarrw.style.display = 'block'
		}
	}

	const getZahl = (obj) => {
		// get css value str:
		const origLeft = obj.style.left
		// cut off '%':
		const nurZahl = origLeft.substring(0,origLeft.length-1)	
		return(parseInt(nurZahl))
		// return nurZahl
	}

	const slide = dir => {
		const wrappers = document.getElementsByClassName('bilderwrapper')
		if (dir === "left") {
			wrappers.forEach((wrap) => {
				const zahl = getZahl(wrap)
				console.log(zahl)
				wrap.style.left = (zahl+100)+'%'
			})
		}
		else {
			wrappers.forEach((wrap) => {
				const zahl = getZahl(wrap)
				console.log(zahl)
				wrap.style.left = (zahl-100)+'%'
			})
		}
	}


	const arrownavigation = (e) => {
				
		console.log("leftValues")
		if (e.currentTarget.id === "leftarrow") {
			slide('left')
		}
		else {
			slide('right')
		}
		currentArt()
		checkForUnnecessaryArrows()
	}


	// let { pathParams } = useParams(); abandoned due to REACT ISSUES...
	// useEffect(()=>{console.log(pathParams)},[pathParams]);

	

	const currentArt = () => {

		// sets the state of selected art to the id number of the currently centered img 
		// used for arrow navigation including inside single art (arrow keys)

		const wrappers = document.getElementsByClassName('bilderwrapper')

		let wrapper
		for (const index in wrappers) {
			if (typeof wrappers[index].style !== 'undefined') {
				if (wrappers[index].style.left === '0%') {
					wrapper = wrappers[index]
				}
			}
		}
		// console.dir(wrapper)
		setSelectedArt(wrapper.querySelector('img').id)
	}


	// Funktion, die je nach dem URL-Parameter oben in der Addresszeile 
	// (z.B. https://galerie-sens.de/bilder/suesses/3) auf das entsprechende Bild "fährt". 
	// Das brauchte etwas Bastelei:

	const urlParamNumber = () => {

		// aktualisiere die oben definierte Variable die die Bildelemente enthält: 
		const wrappers = document.getElementsByClassName('bilderwrapper')

		// wenn es mehr als eins sind, muss das Programm überhaupt erst aktiv werden, sonst springe nach unten:
		if (wrappers.length > 1) {
			// test: console.log("es gibt mehr als ein Bild")

			// erstelle eine Variable, die den genauen Text der URL, inkl. der Bildnummer, enthält:
			const CSSleftValueIndex = window.location.href

			// erstelle eine Variable, die eine Liste der Positionsnummern des Zeichens "/" enthält:
			// (z.B. ist das letzte / an 5., 6., 12. und 32. Position, dann soll hier [5,6,12,21] erzeugt werden)
			let indices = []
			// eine Wiederholung, die diese URL-Zeichenkette Stelle für Stelle durchgeht, 
			// und wenn das jeweilige Zeichen ein / ist, dann füge diese Stelle der indices-Liste hinzu.
			for(let i=0; i<CSSleftValueIndex.length;i++) {
		    	if (CSSleftValueIndex[i] === "/") indices.push(i)
			}
			// erzeuge eine neue Zeichenkette, 
			// die alles von der obigen URL-Textvariablen abschneidet was vor und inkl. dem letzten "/" steht.
			// Oder andersherum: die nur die Bild-Zahl am Ende übriglässt.
			const outputStr = CSSleftValueIndex.slice(indices[indices.length-1]+1)

			// Neue Variable: multipliziere diese Zahl mit 100, damit wir zu Positions-Prozenten für die Bewegung des Layouts kommen:
			// diese Multiplikation macht aus der Zeichenkette automatisch eine Zahl
			// Bsp. oben: das 4. Bild (ausgehend vom 0.) also sollten, 
			// ausgehend von left:0% alle Bilder um -3*100% nach links verschoben werden. 
			const leftIntegerValue = outputStr*100
			
			// wrappers sind die die Bilder umschließenden HTML-divs, für jeden dieser Elemente einmal das Style-Attribut "links" 
			// als reine Zahl auslesen (getZahl erledigt dies),
			// und dann die oben ermittelte Hunderterzahl davon abziehen.

			wrappers.forEach((wrap) => {
				const zahl = getZahl(wrap)
				wrap.style.left = (zahl-leftIntegerValue)+'%'
			})

			// funktioniert! Jetzt muss ich nur noch die Navigation links / rechts anpassen:

			checkForUnnecessaryArrows()
		}
	}

	setTimeout(urlParamNumber(),100)

	// CSS left value of all image wrappers must now deduct this value fron its current value.


	// test: alert(urlParamNumber())




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




	const singleArtView = (el) => {

		// switching of single art 

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

	



	React.useEffect(function setupListener() {
	    function handleKeyPress(evt) {

			const wrappers = document.getElementsByClassName('bilderwrapper')
			if(document.querySelector('.bilderwrapper') !== null) {
				//evt = evt || window.event
				//alert(evt.keyCode)

				if (evt.keyCode === 37) {

					if (wrappers[0].style.left !== '0%') slide('left')
				}
				else if (evt.keyCode === 39) {

					if (wrappers[wrappers.length-1].style.left !== '0%') slide('right')
			    }
				// re-focus on now centered art
				currentArt()
			    // check buttons
			    checkForUnnecessaryArrows()
			}
	
	    }
	    window.addEventListener('keydown', handleKeyPress)

	    return function cleanupListener() {
	      window.removeEventListener('keydown', handleKeyPress)
	    }
  	})



    const arrowcontrols = (bilder) => {
    	if (bilder.length > 1) {

	    	return(
		    	<div className="arrowcontrols" style={style.arrowcontrols}>
					<div className="arrow" onClick={(el) => {arrownavigation(el)}} id="rightarrow" style={style.arrow}>&#x25E8;</div>
					<div className="arrow" onClick={(el) => {arrownavigation(el)}} id="leftarrow"  style={style.arrow}>&#x25E7;</div>
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
				{arrowcontrols(props.bilder)}
				<div className="sctn_wand" style={style.wand}>
					{bilderHTML}
				</div>
			</div>
			{SingleArtView && <Einzelbild key={props.id} bildinfos={props.bilder[selectedArt]} schliessen={()=>{setEinzelAnsicht(false);SingleArtView = false}} />}
		</div>
	)
}

export default Bilderwand