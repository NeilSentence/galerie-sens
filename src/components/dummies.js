import React from 'react'

const Dummy = () => {

	const randomHue = () => {return Math.floor((Math.random() * 360) + 0)}
	const hsla = hue => {return `${hue},43%,62%,1`}
	//const breitehoehe = () => {return  Math.floor((Math.random() * 120) + 50)}
	const dummiesStyle = () => {
	    	//const breiteHoehe = breitehoehe() 
	    	//console.log(breiteHoehe)
	    	const hslaStr = hsla(randomHue())
	    	return {width:70,height:70,background:'hsla('+hslaStr+')',top:0,left:20,position:"absolute"}
	}
	const switchColor = (e) => {
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
		<div className='blocks dummies fallable' onTouchStart={switchColor} onMouseDown={switchColor} style={dummiesStyle()}></div>
	)
}

export default Dummy		
