import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'


const ZurWand = props => {
	const styles = {
		root: {
			background: '#333',
			zIndex:1,
			color:'lightgrey',
			fontSize:12,
			textTransform: 'none',
			marginLeft: 4,
			"&:hover": {
				background: '#000'
			}
		}
	}
	const useStyles = makeStyles(styles)

	const wandLaden = () => {props.wandLaden()}
	const classes = useStyles()
	return <Button 
		className={classes.root} 
		onTouchStart={(el) => {wandLaden()}}
		onClick={(el) => {el.preventDefault();wandLaden()}}
	>{props.label}</Button>
}

export default ZurWand 