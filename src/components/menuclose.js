import React from 'react'

const MenuClose = (props) => {


	const style = {
		outer:{
			textAlign:'center',
			height:50,
			width:50,
			display:"flex",
			alignItems:'center',
			background: '#323232',
			border: '1px solid #787878',
	    	color:'rgb(240,240,240)',
	    	cursor: 'pointer'
		},
		inner: {
			margin:'0 auto',
			fontSize:'1.75em',
			pointerEvents:'none'
		}
	}

	const close = (e) => {
		if(e.target.classList.contains('clickable')){
			// DEBUG: console.log("closed clicked!")
			props.kill()
			e.target.classList.remove('clickable');	
		}
	}

	return (
		<div 
			onTouchEnd={(el) => {close(el)}} 
			onClick={(el) => {el.preventDefault();close(el)}} 
			className="blocks menulink fallable noselect xposrandom menuclose" 
			style={style.outer}
		><p style={style.inner}>X</p></div>
	)
}

export default MenuClose