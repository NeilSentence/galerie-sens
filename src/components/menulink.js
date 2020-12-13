import React from 'react'
import { Card } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'

const MenuLink = (props) => {

	const navigate = useNavigate()

	return (
		<Card className="blocks menulink fallable noselect xposrandom" style={{
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

