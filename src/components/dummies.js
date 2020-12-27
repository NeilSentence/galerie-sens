import React from 'react'

const randomSize = () => {return Math.floor((Math.random() * 55) + 25)}

const Dummy = () => {

	const randomHue = () => {return Math.floor((Math.random() * 360) + 0)}
	const hsla = hue => {return `${hue},43%,62%,1`}
	const dummiesStyle = () => {
	    	const hslaStr = hsla(randomHue())
	    	const randmSzStr = randomSize()
	    	// DEBUG: console.log("Called in: dummies.js; breiteHoehe: "+randmSzStr)
	    	return {width:randmSzStr,height:randmSzStr,background:'hsla('+hslaStr+')',top:-5000,left:20,position:"absolute"}
	}
	const switchColor = (e) => {
		e.preventDefault();
		const color = e.target.style.background
		let tar = e.target
		let el = document.getElementById("mjs-wrapper")
		el.style.background = color
		e.target.style.background = "lightgrey"
		const rePaint = (element, target, color) => {
			element.style.background = "none"
			target.style.background = color
		}
		setTimeout(rePaint, 500, el,tar,color)
	}
	return (
		<div className='blocks dummies super-delayed-fallable xposrandom' onTouchStart={switchColor} onMouseDown={switchColor} style={dummiesStyle()}></div>
	)
}

export default Dummy		
