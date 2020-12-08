import React from 'react'
import { Card, Button } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'

const MenuLink = (props) => {

	const navigate = useNavigate()
	
	// TODO: nur .menulink h1 als quasi <a> link

	return (
		<Card className="blocks menulink fallable noselect" style={{
			height:120,
			background:"#f1f1f1",
			textAlign: "center",
			display: "flex",
			alignItems:"center",
			textDecoration:"none",
			width:400,
			backgroundColor:"lightgrey",
			background: `url(${props.imgUrl})`,
			backgroundPosition: "right",
			backgroundSize:"50%",
			backgroundRepeat: "no-repeat"
		}}
		>	
			<h1 onTouchEnd={() => navigate(props.href)} onClick={() => navigate(props.href)}>{props.titel}</h1>
		</Card>
	)
}

export default MenuLink		

