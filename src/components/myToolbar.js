import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'

const styles = {
	root: {
		background: 'none',
		display: 'flex',
		minHeight: '50px'
	}
}

const useStyles = makeStyles(styles)

const MyToolbar = props => {
	const classes = useStyles()
	return <Toolbar className={classes.root}>{props.children}</Toolbar>
}

export default MyToolbar