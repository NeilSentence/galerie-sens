import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
const styles = {
	root: {
		"&:hover": {			
		},
		"&:nth-child(1)": {
		}
	}
}
const useStyles = makeStyles(styles)
const MyButton = (props) => {
	const classes = useStyles()
	return <Button className={classes.root} component={Link} to={props.href}>{props.text}</Button>
}
export default MyButton
