import React from 'react'
import { Card } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'

const MenuLink = (props) => {

	const navigate = useNavigate()

	const links = (e) => {if(e.target.classList.contains('clickable')){e.target.classList.remove('clickable');navigate(props.href)}}

	return (
		<Card 
			onTouchEnd={(e) => navigate(props.href)}
			onClick={(el) => links(el)} 
			className="blocks menulink fallable noselect xposrandom" 
			style={{
				height:120,
				textAlign: "center",
				display: "flex",
				alignItems:"center",
				textDecoration:"none",
				width:400,
				//backgroundColor:"lightgrey",
				//background: `url(${props.imgUrl})`,
				//backgroundPosition: "right",
				backgroundSize:"50%",
				backgroundRepeat: "no-repeat"
		}}
		>	
			<h1>{props.titel}</h1>
		</Card>
	)
}

export default MenuLink		

