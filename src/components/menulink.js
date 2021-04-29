import React from 'react'
import { useNavigate } from 'react-router-dom'
import { hslaStr } from './utils/helpers'

const MenuLink = props => {

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
	const links = (e) => {

		console.log(e.target.classList.contains('clickable'))

		if(e.target.classList.contains('clickable')){
			props.setRemoveNonMenuHtml()
			e.target.classList.remove('clickable')
			navigate('/')
			navigate(props.href)
			resetStyle()
			setTimeout(props.kill,500)
		}
	}

	const styles = {
		root: {
			width: '25vw',
			maxWidth:400,
			height: '10vh',
			textAlign: 'center',
			display: 'flex',
			alignItems: 'center',
			textDecoration:"none",
			padding: '0.9em',
			cursor: 'pointer',
			pointerEvents: 'all',
			background:'hsla('+hslaStr()+')',
			color: '#000',
			"&:hover": {
				opacity:0.5
			}
		},
		h1: {
			fontSize:22,
			width:'100%',
			pointerEvents: 'none'
		}
	}

	return (
		<div 
			onTouchEnd={(el) => {links(el)}}
			onClick={(el) => {el.preventDefault();links(el)}} 
			className="blocks menulink fallable noselect xposrandom"
			style={styles.root}
		>	
			<h1 style={styles.h1}>{props.titel}</h1>
		</div>
	)
}

export default MenuLink		

