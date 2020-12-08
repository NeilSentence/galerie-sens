import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { useNavigate } from 'react-router-dom'

const styles = {
	root: {
		background: '#333333',
		color:'#eeeeee',
		textTransform: 'none',
		borderRadius: 0,
		borderRight: '1px solid black',
		"&:hover": {
			background: '#000000'
		},
		"&:nth-child(1)": {
			borderLeft: '1px solid black'
		}
	}
}
const useStyles = makeStyles(styles)

const AdminButton = (props) => {
	const navigate = useNavigate()
	const classes = useStyles()
	return (<Button onClick={() => navigate(props.href)} className={classes.root}>{props.text}</Button>)
}

export default AdminButton
