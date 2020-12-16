import React, {Component} from 'react'
import AppBar from '@material-ui/core/AppBar'
import MyToolbar from './myToolbar'
import PageTitle from './pageTitle'
import MenuButton from './menuButton'
import AdminButton from './adminButton'
import Scene from './menudrop' 
import MenuLink from './menulink'

const styles = {
	outerStyleL: {width:"50%",display:"inline-block",position:"relative",left:"0"},
	outerStyleR: {width:"50%",display:"inline-block",position:"relative",right:"0",order: 3},
	innerStyleL: {display:"flex", justifyContent:"flex-start"},
	innerStyleR: {display:"flex", justifyContent:"flex-end"}
}


class Menu extends Component {

	constructor() {
		// muss dort props rein, in constructor & super?
		super()
		this.state = {menuDrop:false, removeNonMenuStuff:false}
		this.handleClick = this.handleClick.bind(this)
		this.killMenu = this.killMenu.bind(this)
	}

	numberOfDummies = 52
	// IMG/aquarell.jpg IMG/objekt.png
	elements() {
		return <>
			<MenuLink imgUrl="" href={"/bilder/aquarelle"} titel="Aquarelle" />
			<MenuLink imgUrl="" href={"/bilder/objekte"} titel="Objektkunst" />
			<MenuLink imgUrl="" href={"/bilder/acryl"} titel="Acrylmalerei" />
			<MenuLink imgUrl="" href={"/bilder/suesses"} titel="Süßstoff" />
			<MenuLink imgUrl="" href={"/kuenstlerin"} titel="zur Person" />
		</>}

	// ab hier bricht das Syntax-Highlighting zusammen weil elements JSX enthält.

  	handleClick() {
  		this.setState(prevState => {
  			// immer, wenn der Menüknopf geklickt wird,
  			// und es sich schließen soll,
  			// werden die delayed-fallables mit der class "remove-fallable" versehen.
  			// diese werden in menuDrop.js dann nicht zur Welt hinzugefügt
  			// TODO: if(!menuDrop){foreach delayed-fallable:.classList.add("fallen")}    it.classList.contains("fallen"), remove ) all delayed-fallables will get class  
			return {
				menuDrop:!prevState.menuDrop
			}			
  		})
  	}
  	// erst wieder verwendet wenn es admin buttons (login usw gibt. dort nervt das Menü)
  	
  	killMenu() {
  		this.setState({menuDrop:false})
  	}
  	menuAlfredo() {
  		setTimeout(() => this.setState({menuDrop:true}),10000)
  		
  	}

  	componentDidMount(){this.menuAlfredo()}
	
  	
  	render() {
  		return (
			<>
				<AppBar>
					<MyToolbar>
						<PageTitle classes="page_titel" href="/" text="Galerie Sens" />
						<div style={styles.outerStyleL}>
							<div style={styles.innerStyleL}>
								<MenuButton onPress={this.handleClick} />
							</div>
						</div>
						<div style={styles.outerStyleR}>
							<div style={styles.innerStyleR}>
								<AdminButton onPress={this.killMenu} href="/" text="Startseite" />
								<AdminButton onPress={this.killMenu} href="/impressum" text="Impressum" />
							</div>
						</div>
					</MyToolbar>
				</AppBar>
				{this.state.menuDrop ? <Scene elements={this.elements()} numberOfDummies={this.numberOfDummies} stateMenu={()=>{return this.state.menuDrop}} stateRemoveNonMenu={()=>{return this.state.removeNonMenuStuff}} toggle={p=>{this.setState(p)}} /> : <div></div>}
			</>
		)	
  	}	
}
export default Menu
