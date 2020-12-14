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
		this.state = {menuDrop:false}
		this.handleClick = this.handleClick.bind(this)
		this.killMenu = this.killMenu.bind(this)
	}

	numberOfDummies = 12
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
			return {
				menuDrop:!prevState.menuDrop
			}			
  		})
  	}
  	// erst wieder verwendet wenn es admin buttons (login usw gibt. dort nervt das Menü)
  	killMenu() {
  		this.setState(prevState => {
			return {
				menuDrop:false
			}			
  		})
  	}


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
				{this.state.menuDrop ? <Scene elements={this.elements()} numberOfDummies={this.numberOfDummies} menudrop={p=>{this.setState(p)}} /> : <div></div>}
			</>
		)	
  	}	
}

export default Menu
