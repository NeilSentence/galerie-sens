import React from 'react'


const MenuClose = (props) => {

	const close = (e) => {
		if(e.target.classList.contains('clickable')){
			// DEBUG: console.log("closed clicked!")
			props.kill()
			e.target.classList.remove('clickable');	
		}
	}

	return (
		<div 
			onTouchStart={(el) => {el.preventDefault();close(el)}} 
			onClick={(el) => {el.preventDefault();close(el)}} 
			className="blocks menulink fallable noselect xposrandom menuclose" 
			style={{textAlign:'center',height:50,width:50,background:'#cccccc',display:"flex",alignItems:'center'}}
		><p style={{margin:'0 auto',fontSize:'1.75em',pointerEvents:'none'}}>X</p></div>
	)
}

export default MenuClose		

