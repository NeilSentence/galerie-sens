import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const styles = {
	root: {
		background: '#333333',
		color:'#eeeeee',
		textTransform: 'none',
		borderLeft: '1px solid black',
		borderRight: '1px solid black',
		borderRadius: 0,
		"&:hover": {
			background: '#000000'
		}
	}
}

const useStyles = makeStyles(styles)

const MenuButton = (props) => {
	const click = () => {props.toggle()}
	const classes = useStyles()
	return <Button 
		className={classes.root} 
		onTouchStart={(el) => {el.preventDefault();click()}}
		onClick={(el) => {el.preventDefault();click()}}
	>Menü</Button>
}

export default MenuButton 
