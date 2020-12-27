import React, { useState, useEffect } from "react"
import Matter from "matter-js"
import Dummy from './dummies'


function Scene() {
  	const style = {
	    wrapper: {
	      display: "block",
	      height:     '100vh',
	      width:      '100vw',
	      position:   'fixed',
	      background: 'rgba(255,255,255,0.88)'
	    },
	    blocks: {},
	    menulink: {
	    	// TODO: hier kann man schön conditional logic als breakpoints fahren, abhängig von this.state.width /.height
	    }
  	}

  	const [height, setHeight] = useState(0);
  	const [width, setWidth] = useState(0);

  	useEffect(() => {
    	// hier wird die Component upgedated 
  	});


  	setCount(count + 1)


	let world, engine, runner
	const { Engine, Runner, World, Bodies, MouseConstraint, Composites, Body } = Matter
	
	const updateDimensions = () => {
    	setState({
	      	height: window.innerHeight,
	      	width: window.innerWidth
    	})
   	}

	window.addEventListener("resize", updateDimensions)

	

	return (
		<div id="mjs-wrapper" style={style.wrapper}>
			{props.elements}
			{Dummies}
		</div>
	)

}