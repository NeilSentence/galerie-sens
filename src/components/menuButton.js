import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const styles = {
	root: {
		border: '1px solid #787878',
		textTransform: 'none',
		borderRadius: 0
	}
}

const useStyles = makeStyles(styles)

const MenuButton = (props) => {
	const click = (e) => {console.log(e.type);props.toggle(e)}
	const classes = useStyles()
	return <Button 
		className={classes.root+" navbarbutton"} 
		onTouchEnd={(e)=> {click(e)}}
		onClick={(e)=> {click(e)}}
	>Menü</Button>
}

export default MenuButton 
