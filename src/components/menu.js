import React, {useState, useEffect } from 'react'
import AppBar from '@material-ui/core/AppBar'
import MyToolbar from './myToolbar'
import PageTitle from './pageTitle'
import MenuButton from './menuButton'
import AdminButton from './adminButton'
import MatterScene from './drop' 
import MenuLink from './menulink'
import MenuClose from './menuclose'
import UseEscape from './utils/esckey'


const Menu = props => {
	const styles = {
		outerStyleL: {width:"50%",display:"inline-block",position:"relative",left:"0"},
		outerStyleR: {width:"50%",display:"inline-block",position:"relative",right:"0",order: 3},
		innerStyleL: {display:"flex",justifyContent:"flex-start"},
		innerStyleR: {display:"flex",justifyContent:"flex-end"}
	}

	const [manualSet, setManualSet] = useState(false)
	const [showMenu, setShowMenu] = useState(false)
	const [removeNonMenuHtml, setRemoveNonMenuHtml] = useState(false)
	
	const numberOfDummies = 25
	// IMG/aquarell.jpg IMG/objekt.png
	
	const elements = () => {
		return (
			<>
			<MenuLink  kill={()=>{killMenu()}} imgUrl="" setRemoveNonMenuHtml={()=>{setRemoveNonMenuHtml(true)}} href={"/bilder/kfu/0"} titel="Kalligrafische Experimente" />
			<MenuLink  kill={()=>{killMenu()}} imgUrl="" setRemoveNonMenuHtml={()=>{setRemoveNonMenuHtml(true)}} href={"/bilder/glitches/0"} titel="Glitches" />
			<MenuLink  kill={()=>{killMenu()}} imgUrl="" setRemoveNonMenuHtml={()=>{setRemoveNonMenuHtml(true)}} href={"/bilder/fotocollagen/0"} titel="Fotocollagen" />
			<MenuLink  kill={()=>{killMenu()}} imgUrl="" setRemoveNonMenuHtml={()=>{setRemoveNonMenuHtml(true)}} href={"/bilder/oelsand/0"} titel="Naturstoffe" />
			<MenuLink  kill={()=>{killMenu()}} imgUrl="" setRemoveNonMenuHtml={()=>{setRemoveNonMenuHtml(true)}} href={"/bilder/upcycling/0"} titel="Upcycling" />
			<MenuLink  kill={()=>{killMenu()}} imgUrl="" setRemoveNonMenuHtml={()=>{setRemoveNonMenuHtml(true)}} href={"/bilder/zufallsbegegnungen/0"} titel="Zufallsbegegnungen" />
			<MenuLink  kill={()=>{killMenu()}} imgUrl="" setRemoveNonMenuHtml={()=>{setRemoveNonMenuHtml(true)}} href={"/bilder/portraits/0"} titel="Portraits" />
			<MenuLink  kill={()=>{killMenu()}} imgUrl="" setRemoveNonMenuHtml={()=>{setRemoveNonMenuHtml(true)}} href={"/bilder/suesses/0"} titel="Sweets" />
			<MenuLink  kill={()=>{killMenu()}} imgUrl="" setRemoveNonMenuHtml={()=>{setRemoveNonMenuHtml(true)}} href={"/kuenstlerin"} titel="zur Person" />
			<MenuClose kill={()=>{killMenu()}} setRemoveNonMenuHtml={()=>{setRemoveNonMenuHtml(true)}}/>
			</>
		)
	}



	const killMenu = () => {
		// alert("showmenu: "+showMenu)
  		setRemoveNonMenuHtml(true)
  		const delayedClose = () => {
  			setShowMenu(false)
  			// alert("showmenu: "+showMenu)

  			// ⚠️ PROBLEM: state wird zwar geändert, aber es ist asynch & wird in diesem Render nicht beachtet!

  			// if .sctn_header exists
  			// if (document.querySelector('.sctn_header') !== null) document.querySelector('.sctn_header').style.flexDirection = 'row'
  		}
  		const delayed_fallables = document.querySelectorAll(".delayed-fallable")
  		delayed_fallables.forEach((i) => {
			// DEBUG: console.log(i)
			i.style.position = 'initial'
			i.style.left = 'auto'
			i.style.top = 'auto'
			i.style.transform = 'rotate(0rad)'
			i.style.background = 'rgb(240,240,240)'
			i.style.color = '#787878'
		})
		const navbarbuttons = document.querySelectorAll(".navbarbutton")
		navbarbuttons.forEach(el => {
			el.classList.remove("navbarhover")
		})
		setTimeout(delayedClose,50)
		return 
  	}

  	// EVENT LISTENER FOR ESCAPE KEY:

  	/* document.addEventListener('keydown',function(evt){
		
		//evt.stopImmediatePropagation()
	    if (document.querySelector('.page_titel') !== null) {
			evt = evt || window.event
			if (evt.keyCode === 27) {
	  			if (!showMenu) {
	  				setManualSet(true)
	  				setShowMenu(true)
	  				setRemoveNonMenuHtml(false)
	  			}
	  			else killMenu()
			}
		}
	})

	*/

	const menuCall = () => {
		if (!showMenu) {
  			//setManualSet(true)
  			setShowMenu(true)
  			setRemoveNonMenuHtml(false)
	  	}
	  	else killMenu()
	}

	UseEscape(() => {

		//console.log("esc")
		menuCall()

	})

	const handleClick = (e) => {
		if (e.type === 'click') {
			menuCall()
		}
	}
 	
	/*function getTranslationMap(choice) {
		const choices = {
		   "true": "do something",
		   "false": "do something else"
		}
  
  		return choices[choice.toString()] ?? "not found";
	}*/

	useEffect(() => {
		// console.log("vor urlcheck")
		if (window.location.href === "http://localhost:3000/"){
		const timeoutID = window.setTimeout(() => {
			// console.log("im timeout, vor menuAlfredo")
	    	menuAlfredo()
		}, 250)
		// return () => window.clearTimeout(timeoutID)
    }
	},[])

	const menuAlfredo = () => {
		// console.log("im menuAlfredo")
		setShowMenu((state) => {
			if(!state){
  		        setShowMenu(true)
  			}
			return state
		})		
  	}

  	

  	
  	// how are we going to refactor setState()??

	return (
		<>
			<AppBar>
				<MyToolbar>
					<PageTitle classes="page_titel" href="/" text="Galerie Sens" />
					<div style={styles.outerStyleL}>
						<div style={styles.innerStyleL}>
							<MenuButton 
								toggle={(e)=>{handleClick(e)}} 
							/>
						</div>
					</div>
					<div style={styles.outerStyleR}>
						<div style={styles.innerStyleR}>
							<AdminButton onPress={killMenu} href="/kontakt" text="Kontakt" />
							<AdminButton onPress={killMenu} href="/" text="Startseite" />
							<AdminButton onPress={killMenu} href="/impressum" text="Impressum" />
						</div>
					</div>
				</MyToolbar>
			</AppBar>
			{showMenu && <MatterScene 
				elements={elements()} 
				numberOfDummies={numberOfDummies} 
				removeNonMenuHtml={()=>{return removeNonMenuHtml}}
			/>}
		</>
	)	
}
export default Menu
