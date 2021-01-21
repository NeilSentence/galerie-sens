import React from 'react'
import { hslaStr, randomSize } from './utils/helpers'

const Dummy = (props) => {

	const randmSzStr = randomSize(25,55)
	
	const style = {
		width:randmSzStr,
		height:randmSzStr,
		background:'hsla('+hslaStr()+')',
		top:-5000,
		left:20,
		position:'absolute'
	}

	return (
		<div className='blocks dummies super-delayed-fallable xposrandom' onMouseOver={(el) => {el.target.style.opacity = 0.5}} onMouseLeave={(el) => {el.target.style.opacity = 1}} style={style}></div>
	)
}

export default Dummy		
