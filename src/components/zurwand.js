import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const styles = {
	root: {
		background: '#777777',
		color:'#eeeeee',
		textTransform: 'none',
		borderRadius: 10,
		marginTop: '1em',
    	flexBasis: 150,
    	margin: 'auto',
    	marginTop: '5em',
    	width: 0,
		"&:hover": {
			background: '#655446'
		}
	}
}

const useStyles = makeStyles(styles)

const ZurWand = (props) => {
	const wandLaden = () => {props.wandLaden()}
	const classes = useStyles()
	return <Button 
		className={classes.root} 
		onTouchStart={(el) => {wandLaden()}}
		onClick={(el) => {el.preventDefault();wandLaden()}}
	>{props.label}</Button>
}

export default ZurWand 