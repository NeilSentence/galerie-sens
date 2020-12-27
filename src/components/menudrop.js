import React from "react"
import Dummy from './dummies'
import Matter from 'matter-js'

/*
	set menu display state to false:
	this.props.toggleRemoveNonMenuHtml()

	get current state:
	this.props.state()
*/


let world, engine, runner

const { Engine, Runner, World, Bodies, MouseConstraint, Composites, Body } = Matter

class Scene extends React.Component {
	shouldComponentUpdate(nextProps, nextState){
	   return false
	}
	constructor(props){
		super(props)
		// TODO: eigentlich muss window state ein paar Stufen höher und ge-propt werden.
		this.state = {
	    	removeNonMenuHtml: this.props.removeNonMenuHtml(),
	    	height: window.innerHeight,
	    	width: window.innerWidth
	    }
	    window.addEventListener("resize", this.updateDimensions)
	    this.updateDimensions = this.updateDimensions.bind(this)
	    this.run = this.run.bind(this)
	}

	style = {
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
  	run = () => {

  		// define DomElement Lists
		const fallables = document.querySelectorAll(".fallable")
		let delayed_fallables = document.querySelectorAll(".delayed-fallable")
		const super_delayed_fallables = document.querySelectorAll(".super-delayed-fallable")

		// declare names for matter stack objects, to be filled with Bodies based on DomElements Lists 
		let menulinks, colorblocks, htmlblocks = false

		// switch var for left / right side image drop:
		// let xPosSwitch = true

		// initialize Engine / World
		engine = Engine.create({positionIterations:10,velocityIterations:8})
		world  = engine.world
		runner = Runner.create()


		// Start Runner & set timescale
		Runner.start(runner,engine)
		engine.timing.timeScale = 0.4

		// function to setup / size matter objects:
		const sizeBoxes = (DomElements, randomPosition, AngularVelocity) => {
			const matterStack = Composites.stack(	
		  		// xx, yy, columns, rows, columnGap, rowGap, cb
		  		0, 0, DomElements.length, 1, 0, 0,
		  		(xx, yy, i) => {
		  			const { x, y, width, height } = DomElements[i].getBoundingClientRect();
		  			let xPos, yPos
		  			if (randomPosition) {
		  				xPos = Math.floor((Math.random() * (this.state.width-200)) + 1)
		  				yPos = -this.state.height+200
		  			} else {
		  				xPos = x; yPos = y
		  			}
		    		const box = Bodies.rectangle(xPos, yPos, width, height, {isStatic:true})
		    		const randomAngularV = () => (Math.random()>0.5)? 1 : -1;
		    		Body.setAngularVelocity( box, Math.PI/AngularVelocity*randomAngularV())
		    		return box
		    	}
	    	)
	    	return matterStack
		}

		const dropStuff = matterStack => {
			// mach sie nur noch isStatic:false
			matterStack.bodies.forEach((block) => {
				Body.setStatic(block, false)	
			})
		}








		menulinks = sizeBoxes(fallables,true,500)
		World.add(world, [menulinks])
		dropStuff(menulinks)

	    const delayedSizingColorBlocks = () => {
		    colorblocks = sizeBoxes(super_delayed_fallables,true,50)
			World.add(world,[colorblocks])
			const dropColor = () => dropStuff(colorblocks)
			setTimeout(dropColor, 3200)
	    }
	    setTimeout(delayedSizingColorBlocks, 50)






		// console.log("Called in: menudrop.js; typeof menulinks (should be object):"+typeof menulinks) 
	    const wallThickness = 100
		const wallHeight = this.state.height*2
		const wallY = 0
	    const floor = Matter.Bodies.rectangle(this.state.width/2,this.state.height,this.state.width,100)
	    const wallR = Matter.Bodies.rectangle(this.state.width+50,wallY,wallThickness,wallHeight)
	    const wallL = Matter.Bodies.rectangle(-50,wallY,wallThickness,wallHeight)
	    const ceil  = Matter.Bodies.rectangle(this.state.width/2,-this.state.height-50,this.state.width,100)
	    Body.setStatic(floor, true)
	    Body.setStatic(wallR, true)
	    Body.setStatic(wallL, true)
	    Body.setStatic(ceil,  true)

		const mouseConstraint = MouseConstraint.create(
  			engine, {element: document.querySelector("#mjs-wrapper")}
		)

		World.add(world, [mouseConstraint, floor, wallL, wallR, ceil])
		

		const addStuff = () => {
			htmlblocks = sizeBoxes(delayed_fallables,false,1000)
			World.add(world,[htmlblocks])
			dropStuff(htmlblocks)
		}
		setTimeout(addStuff, 2000)

		// mouse / touch position readouts:
		let origMouseX, origMouseY
		let mouseHasMoved = false

		fallables.forEach(el => {
	  		el.addEventListener("mousedown", e => {
	    		// Es gibt schon den "navigate to href" Event Listener im Menulink Component
	    		// man könnte noch irgendeinen Effekt der bei allen fallables passiert hier anbringen.
	    		// get mouse position and navigate only when it hasn't changed much.
	    		const recordOrigMousePos = () => {
		    		const event = window.event
		    		origMouseX = event.pageX
		    		origMouseY = event.pageY
		    		// DEBUG: console.log("Called in: menudrop.js; mouseHasMoved, origMouseX, origMouseY: "+mouseHasMoved, origMouseX, origMouseY)
	    		}
	    		if (mouseHasMoved) recordOrigMousePos()
	    	})

	    	el.addEventListener("touchstart", e => {
	    		const recordOrigMousePos = () => {
		    		const event = window.event
		    		// DEBUG: console.dir("Called in: menudrop.js; (touch)event: "+event) // get touch event
		    		origMouseX = event.changedTouches[0].pageX
		    		origMouseY = event.changedTouches[0].pageY
		    		// DEBUG: console.log("Called in: menudrop.js; at touch start: mouseHasMoved: "+mouseHasMoved+"at: "+origMouseX, origMouseY)
	    		}
	    		if (mouseHasMoved) recordOrigMousePos()

	    	})

	    	el.addEventListener("mousemove", e => {
	    		mouseHasMoved = true
	    	})

	    	el.addEventListener("touchmove", e => {
	    		mouseHasMoved = true
	    	})

	    	el.addEventListener("mouseup", e => {
	    		const event = window.event
	    		const newMouseX = event.pageX
	    		const newMouseY = event.pageY
	    		if (!( (newMouseX > origMouseX+5) || (newMouseY > origMouseY+5) || (newMouseY < origMouseY-5) || (newMouseX < origMouseX-5) )) {
	    			// DEBUG: alert("OPosX:"+origMouseX+" OPosX:"+origMouseY+" NPosX:"+newMouseX+" NPosX:"+newMouseY)
	    			// navigate to link target:
	    			// hack: add class: "navigatable"
	    			el.classList.add("clickable")
	    			// DEBUG: alert("Called in: menudrop.js; @mouseup; props.removeNonMenuHtml: "+this.props.removeNonMenuHtml)
	    			// DEBUG: console.dir("Called in: menudrop.js; @mouseup: el.classList: "+el.classList)
	    		}
	    		mouseHasMoved = false
	    	})

	    	el.addEventListener("touchend", e => {
	    		const event = window.event
	    		const newMouseX = event.changedTouches[0].pageX
		    	const newMouseY = event.changedTouches[0].pageY
	    		if (!( (newMouseX > origMouseX+5) || (newMouseY > origMouseY+5) || (newMouseY < origMouseY-5) || (newMouseX < origMouseX-5) )) {
	    			// DEBUG: alert("OPosX:"+origMouseX+" OPosX:"+origMouseY+" NPosX:"+newMouseX+" NPosX:"+newMouseY)
	    			// navigate to link target:
	    			// hack: add class: "navigatable"
	    			el.classList.add("clickable")
	    			// alert(this.props.removeNonMenuHtml)
	    			// DEBUG: console.dir("Called in: menudrop.js; after touch: "+el.classList)
	    		}
	    		mouseHasMoved = false
	    	})
	    	// TODO: garbage collect event listeners!
		}) 	

		// wird im update immer wieder ausgeführt:
		// takes matter stack & the corresponding DOM-Elements list as input
		// assigns new top,left and transform: rotation
		const updateBoxes = (matterElements,DomElements) => {
			if (typeof matterElements === 'object'){
				matterElements.bodies.forEach((block, i) => {
					const thisFallable = DomElements[i]
					const {x, y} = block.vertices[0]
					//console.log("Called in: menudrop.js; matterElement x,y:"+x+","+y)
					thisFallable.style.position = 'absolute'
					thisFallable.style.top = `${y}px`
					thisFallable.style.left = `${x}px`
					thisFallable.style.transform = `translate(-50%, -50%) rotate(${block.angle}rad) translate(50%, 50%)`				
				})
			} 
			else {
				console.log('Matter Composite Stack not (yet) instantiated.')
			}
		}

	    const update = () => {
	  		/*
			    TODO: adjust size of object on update to adjust for changing text blocks:
			    const { width, height } = fallables[i].getBoundingClientRect();
			*/
			// DEBUG:console.dir("Called in: menudrop.js at top of update fn; prop removeNonMenuHtml: "+this.props.removeNonMenuHtml)
		  	updateBoxes(menulinks,fallables)
			updateBoxes(colorblocks,super_delayed_fallables)
			
			if (!this.props.removeNonMenuHtml()){
				// this HAS to be factored out in some higher level state:
				console.log("removeNonMenuHtml false")
				// each render cycle: declare new delayed fallables:				
				updateBoxes(htmlblocks,delayed_fallables)
			}
			else {
				console.log("removeNonMenuHtml true")
				Matter.Composite.clear(htmlblocks, false)
				delayed_fallables.forEach((i) => {
				// DEBUG: console.log(i)
				i.style.position = 'initial'
				i.style.left = 'auto'
				i.style.top = 'auto'
				i.style.transform = 'rotate(0rad)'
			})

			}
  			Engine.update(engine)
  			window.requestAnimationFrame(update)
		}
		update()
	}
  	componentDidMount(){
		this.run()
		this.updateDimensions()
	}

	componentDidUpdate(){
		this.updateDimensions()
	}
	componentWillUnmount(){
		// cancel matter
		// remove event listeners?
		Runner.stop(runner)
		World.clear(world)
        Engine.clear(engine)
        // set removeNonMenuHtml flag
	} 

	updateDimensions = () => {
    	this.setState({
	      	height: window.innerHeight,
	      	width: window.innerWidth
    	})
   	}
   	
   	render(){
		const Dummies = []
		for (let i=0; i < this.props.numberOfDummies; i++) {
   			Dummies.push(<Dummy/>)
		} 
	  	
	  	return (
			<div id="mjs-wrapper" style={this.style.wrapper}>
				{this.props.elements}
				{Dummies}
			</div>
		)
	}
}
export default Scene



















/*

 if(e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel'){
        var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
        x = touch.pageX;
        y = touch.pageY;
    } else if (e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' || e.type == 'mouseover'|| e.type=='mouseout' || e.type=='mouseenter' || e.type=='mouseleave') {
        x = e.clientX;
        y = e.clientY;
    }

*/