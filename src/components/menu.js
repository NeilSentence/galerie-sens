import React, {useState} from 'react'
import AppBar from '@material-ui/core/AppBar'
import MyToolbar from './myToolbar'
import PageTitle from './pageTitle'
import MenuButton from './menuButton'
import AdminButton from './adminButton'
import Scene from './menudrop' 
import MenuLink from './menulink'
import MenuClose from './menuclose'


function Menu (props) {
	const styles = {
		outerStyleL: {width:"50%",display:"inline-block",position:"relative",left:"0"},
		outerStyleR: {width:"50%",display:"inline-block",position:"relative",right:"0",order: 3},
		innerStyleL: {display:"flex", justifyContent:"flex-start"},
		innerStyleR: {display:"flex", justifyContent:"flex-end"}
	}

	const [manualSet, setManualSet] = useState(false)
	const [showMenu, setShowMenu] = useState(false)
	const [removeNonMenuHtml, setRemoveNonMenuHtml] = useState(false)
	
	const numberOfDummies = 32
	// IMG/aquarell.jpg IMG/objekt.png
	
	const elements = () => {
		return (
			<>
			<MenuLink imgUrl="" setRemoveNonMenuHtml={()=>{setRemoveNonMenuHtml(true)}} href={"/bilder/aquarelle"} titel="Aquarelle" />
			<MenuLink imgUrl="" setRemoveNonMenuHtml={()=>{setRemoveNonMenuHtml(true)}} href={"/bilder/objekte"} titel="Objektkunst" />
			<MenuLink imgUrl="" setRemoveNonMenuHtml={()=>{setRemoveNonMenuHtml(true)}} href={"/bilder/acryl"} titel="Acrylmalerei" />
			<MenuLink imgUrl="" setRemoveNonMenuHtml={()=>{setRemoveNonMenuHtml(true)}} href={"/bilder/suesses"} titel="Süßstoff" />
			<MenuLink imgUrl="" setRemoveNonMenuHtml={()=>{setRemoveNonMenuHtml(true)}} href={"/kuenstlerin"} titel="zur Person" />
			<MenuClose setShowMenu={()=>{setShowMenu(false)}} setRemoveNonMenuHtml={()=>{setRemoveNonMenuHtml(true)}}/>
			</>
		)
	}

	function menuAlfredo(){
  		if(!manualSet) setShowMenu(true)	
  	}
	setTimeout(menuAlfredo,6500)
 
 	/*
 	useEffect(() => {	
	  	
	},[])
 	*/
	
  	const handleClick = () => {
  		setManualSet(true)
  		setShowMenu(!showMenu) 
  		setRemoveNonMenuHtml(false)
  		if (showMenu) {
  			const delayed_fallables = document.querySelectorAll(".delayed-fallable");
			delayed_fallables.forEach((i) => {
				// DEBUG: console.log(i);
				i.style.position = 'initial';
				i.style.left = 'auto !important';
				i.style.top = 'auto !important';
				i.style.transform = 'rotate(0rad) !important';
			})
			setRemoveNonMenuHtml(true)
  		}
  	}
  	// erst wieder verwendet wenn es admin buttons (login usw gibt. dort nervt das Menü)
  	
  	const killMenu = () => {
  		setShowMenu(false)
  		const delayed_fallables = document.querySelectorAll(".delayed-fallable");
		delayed_fallables.forEach((i) => {
			// DEBUG: console.log(i)
			i.style.position = 'initial'
			i.style.left = 'auto !important'
			i.style.top = 'auto !important'
			i.style.transform = 'rotate(0rad) !important'
			setRemoveNonMenuHtml(true)
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
							<MenuButton onPress={handleClick} />
						</div>
					</div>
					<div style={styles.outerStyleR}>
						<div style={styles.innerStyleR}>
							<AdminButton onPress={killMenu} href="/" text="Startseite" />
							<AdminButton onPress={killMenu} href="/impressum" text="Impressum" />
						</div>
					</div>
				</MyToolbar>
			</AppBar>
			{showMenu && <Scene elements={elements()} numberOfDummies={numberOfDummies} stateMenu={()=>{return showMenu}} removeNonMenuHtml={()=> {return removeNonMenuHtml}} />}
		</>
	)	
}
export default Menu
