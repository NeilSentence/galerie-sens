import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { useNavigate } from 'react-router-dom'

const styles = {
	root: {
		textTransform: 'none',
		borderRadius: 0,
		borderTop: '1px solid #787878',
		borderBottom: '1px solid #787878',
		borderRight: '1px solid #787878',
		"&:nth-child(1)": {
			borderLeft: '1px solid #787878'
		}
	}
}
const useStyles = makeStyles(styles)

const AdminButton = (props) => {
	const navigate = useNavigate()
	const classes = useStyles()
	return (<Button onClick={() => {props.onPress();navigate(props.href)}} className={classes.root+" navbarbutton"}>{props.text}</Button>)
}

export default AdminButton
