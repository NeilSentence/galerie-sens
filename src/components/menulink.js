import React from 'react'
import { Card } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'

const MenuLink = (props) => {

	const navigate = useNavigate()
	const resetStyle = () => {
		const delayed_fallables = document.querySelectorAll(".delayed-fallable")
  		delayed_fallables.forEach((i) => {
			// DEBUG: console.log(i)
			i.style.position = 'initial'
			i.style.left = 'auto'
			i.style.top = 'auto'
			i.style.transform = 'rotate(0rad)'
		})
	}
	const links = (e) => {if(e.target.classList.contains('clickable')){props.setRemoveNonMenuHtml();e.target.classList.remove('clickable');navigate('/');navigate(props.href);resetStyle()}}

	return (
		<Card 
			onTouchStart={(el) => {links(el)}}
			onClick={(el) => {el.preventDefault();links(el)}} 
			className="blocks menulink fallable noselect xposrandom" 
			style={{
				height:90,
				textAlign: "center",
				display: "flex",
				alignItems:"center",
				textDecoration:"none",
				width:300,
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

