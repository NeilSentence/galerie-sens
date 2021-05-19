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

class MatterScene extends React.Component {
	shouldComponentUpdate(nextProps, nextState) {
	   return false
	}
	
	constructor(props){
		super(props)
		// TODO: eigentlich muss window state ein paar Stufen höher und ge-propt werden.
		this.state = {
	    	height: window.innerHeight,
	    	width: window.innerWidth
	    }
	  /*  window.addEventListener("resize", this.updateDimensions)
	    this.updateDimensions = this.updateDimensions.bind(this)
	    this.run = this.run.bind(this)*/
	}

	style = {
	    wrapper: {
	      display:    'block',
	      height:     '100vh',
	      width:      '100vw',
	      position:   'fixed',
	      background: 'rgb(50,50,50)',
	      zIndex: 4
	    },
	    blocks: {},
	    menulink: {
	    	// TODO: hier kann man schön conditional logic als breakpoints fahren, abhängig von this.state.width /.height
	    }
  	}
  	
  	run = () => {
  		const subheading = document.querySelectorAll('.sctn_heading')[0]
  		subheading.style.position = 'relative'

  		// define DomElement Lists
		const fallables = document.querySelectorAll(".fallable")
		let delayed_fallables = document.querySelectorAll(".delayed-fallable")
		delayed_fallables.forEach(el => {
			el.style.background = 'darkgrey'
		    //el.style.color = 'rgb(240,240,240)'
		})

		const navbarbuttons = document.querySelectorAll(".navbarbutton")
		navbarbuttons.forEach(el => {
			el.style.color = 'rgb(240,240,240)'
			el.classList.add("navbarhover")
		})

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
			setTimeout(dropColor, 2500)
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
			// TODO: BUG: Dies wird auch ausgeführt, wenn Menü frühzeitig wieder geschlossen wird.
			// Denn: der setTimeout wird nicht gecancelt.
			// if (document.querySelector('.sctn_header') !== null) document.querySelector('.sctn_header').style.flexDirection = 'row-reverse'
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
	    		// DEBUG: console.log('mousedown')
	    		const recordOrigMousePos = () => {
		    		const event = window.event
		    		origMouseX = event.pageX
		    		origMouseY = event.pageY
		    		// DEBUG: console.log("Called in: menudrop.js; mouseHasMoved, origMouseX, origMouseY: "+mouseHasMoved, origMouseX, origMouseY)
	    		}
	    		if (mouseHasMoved) recordOrigMousePos()
	    	})

	    	el.addEventListener("touchstart", e => {
	    		// DEBUG: console.log('touchstart')
	    		const recordOrigMousePos = () => {
		    		const event = window.event
		    		// DEBUG: console.dir("Called in: menudrop.js; (touch)event: "+event) // get touch event
		    		origMouseX = event.changedTouches[0].pageX
		    		origMouseY = event.changedTouches[0].pageY
		    		// DEBUG: console.log("Called in: menudrop.js; at touch start: mouseHasMoved: "+mouseHasMoved+"at: "+origMouseX, origMouseY)
	    		}
	    		//if (mouseHasMoved) 
	    		recordOrigMousePos()
	    	})

	    	el.addEventListener("mousemove", e => {
	    		// DEBUG: console.log('mousemove')
	    		mouseHasMoved = true
	    	})

	    	el.addEventListener("touchmove", e => {
	    		// DEBUG: console.log('touchmove')
	    		mouseHasMoved = true
	    	})

	    	el.addEventListener("mouseup", e => {
	    		// DEBUG: console.log('mouseup')
	    		const event = window.event
	    		const newMouseX = event.pageX
	    		const newMouseY = event.pageY
	    		if (!( (newMouseX > origMouseX+5) || (newMouseY > origMouseY+5) || (newMouseY < origMouseY-5) || (newMouseX < origMouseX-5) )) {
	    			// DEBUG: alert("OPosX:"+origMouseX+" OPosX:"+origMouseY+" NPosX:"+newMouseX+" NPosX:"+newMouseY)
	    			// navigate to link target:
	    			// hack: add class: "clickable" for navigation
	    			el.classList.add("clickable")
	    			// DEBUG: alert("Called in: menudrop.js; @mouseup; props.removeNonMenuHtml: "+this.props.removeNonMenuHtml)
	    			// DEBUG: console.dir("Called in: menudrop.js; @mouseup: el.classList: "+el.classList)
	    		}
	    		mouseHasMoved = false
	    	})

	    	el.addEventListener("touchend", e => {
	    		// DEBUG: console.log('touchend')
	    		const event = window.event
	    		const newMouseX = event.changedTouches[0].pageX
		    	const newMouseY = event.changedTouches[0].pageY
		    	//console.log('newMouseX: '+newMouseX+', newMouseY: '+newMouseY+', origMouseX: '+origMouseX+', origMouseY: '+origMouseY)
	    		if (!( (newMouseX > origMouseX+5) || (newMouseY > origMouseY+5) || (newMouseY < origMouseY-5) || (newMouseX < origMouseX-5) )) {
	    			// DEBUG: alert("OPosX:"+origMouseX+" OPosX:"+origMouseY+" NPosX:"+newMouseX+" NPosX:"+newMouseY)
	    			// navigate to link target:
	    			// hack: add class: "clickable" for navigation
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
					thisFallable.style.position = 'fixed'
					thisFallable.style.top = `${y}px`
					thisFallable.style.left = `${x}px`
					thisFallable.style.transform = `translate(-50%, -50%) rotate(${block.angle}rad) translate(50%, 50%)`				
				})
			} 
			/* DEBUG: else {
				console.log('Matter Composite Stack not (yet) instantiated.')
			}*/
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
				// DEBUG: console.log("removeNonMenuHtml false")
				// each render cycle: declare new delayed fallables:				
				updateBoxes(htmlblocks,delayed_fallables)
			}
			else {
				// DEBUG: console.log("removeNonMenuHtml true")
				if (typeof htmlblocks === 'object') Matter.Composite.clear(htmlblocks, false)
			}
  			Engine.update(engine)
  			window.requestAnimationFrame(update)
		}
		update()
	}
  	componentDidMount(){
		this.run()
		//this.updateDimensions()
	}

	componentDidUpdate(){
		//this.updateDimensions()
	}
	componentWillUnmount(){
		// cancel matter
		// remove event listeners?
		Runner.stop(runner)
		World.clear(world)
        Engine.clear(engine)
        // set removeNonMenuHtml flag
	} 

	/*updateDimensions = () => {
    	this.setState({
	      	height: window.innerHeight,
	      	width: window.innerWidth
    	})
   	}*/
   	
   	render(){
		const Dummies = []
		for (let i=0; i < this.props.numberOfDummies; i++) {
   			Dummies.push(<Dummy key={i} />)
		} 
	  	
	  	return (
			<div id="mjs-wrapper" style={this.style.wrapper}>
				{this.props.elements}
				{Dummies}
			</div>
		)
	}
}
export default MatterScene



















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