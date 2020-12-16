import React from "react"
import Matter from "matter-js"
import Dummy from './dummies'


/*
	set menu display state to false:
	this.props.toggle({menuDrop:false})

	get current state:
	this.props.state()
*/



class Scene extends React.Component {
	constructor(props){
		super(props)
		// TODO: eigentlich muss window state ein paar Stufen höher und ge-propt werden.
		this.state = {
	      	height: window.innerHeight,
	      	width: window.innerWidth,
	    }
	    window.addEventListener("resize", this.updateDimensions)
	}

	style = {
	    wrapper: {
	      display: "block",
	      top:        50,
	      height:     'calc(100% - 50px)',
	      width:      '100vw',
	      position:   'fixed',
	      background: 'rgba(255,255,255,0.88)'
	    },
	    blocks: {},
	    menulink: {
	    	// TODO: hier kann man schön conditional logic als breakpoints fahren, abhängig von this.state.width /.height
	    }
  	}

  	componentDidMount(){

	  	const runCode = () => {
	  		const Body = Matter.Body
			const fallables = document.querySelectorAll(".fallable")
			const delayed_fallables = document.querySelectorAll(".delayed-fallable")
			const super_delayed_fallables = document.querySelectorAll(".super-delayed-fallable")

			// switch var for left / right side image drop:
			// let xPosSwitch = true
			const engine = Matter.Engine.create({positionIterations:10,velocityIterations:8})

			const menulinks = Matter.Composites.stack(	
		  		// xx, yy, columns, rows, columnGap, rowGap, cb
		  		0, 0, fallables.length, 1, 0, 0,
		  		(xx, yy, i) => {
		  			const { width, height } = fallables[i].getBoundingClientRect();
		  			const xPos = Math.floor((Math.random() * (this.state.width-200)) + 1)
		  			const yPos = -this.state.height+200		
		    		const box = Matter.Bodies.rectangle(xPos, yPos, width, height, {
		      			//isStatic: i === 0 || i + 1 === fallables.length
		    		})
		    		const randomAngularV = () => (Math.random()>0.5)? 1 : -1;
		    		Body.setAngularVelocity( box, Math.PI/500*randomAngularV())
		    		return box
		    	}
		    )	
		    const colorblocks = Matter.Composites.stack(	
			  		0, 0, super_delayed_fallables.length, 1, 0, 0,
			  		(xx, yy, i) => {
			  			const { width, height } = super_delayed_fallables[i].getBoundingClientRect();
			  			const xPos = Math.floor((Math.random() * (this.state.width-200)) + 1)
		  				const yPos = -this.state.height+200	
			    		const box = Matter.Bodies.rectangle(xPos, yPos, width, height, {isStatic:true})
			    		const randomAngularV = () => (Math.random()>0.5)? 1 : -1;
			    		Body.setAngularVelocity( box, Math.PI/5*randomAngularV());
			    		return box
			    	}
		    	)
				Matter.World.add(engine.world,[colorblocks])

				super_delayed_fallables.forEach(e => {
		  			e.style.position = "absolute"
				})

			// console.log(typeof menulinks) 'object'
		    const wallThickness = 100
			const wallHeight = this.state.height*2
			const wallY = 0
		    const floor = Matter.Bodies.rectangle(this.state.width/2,this.state.height-50,this.state.width,100)
		    const wallR = Matter.Bodies.rectangle(this.state.width+50,wallY,wallThickness,wallHeight)
		    const wallL = Matter.Bodies.rectangle(-50,wallY,wallThickness,wallHeight)
		    const ceil  = Matter.Bodies.rectangle(this.state.width/2,-this.state.height-50,this.state.width,100)
		    Body.setStatic(floor, true)
		    Body.setStatic(wallR, true)
		    Body.setStatic(wallL, true)
		    Body.setStatic(ceil,  true)

			const mouseConstraint = Matter.MouseConstraint.create(
	  			engine, {element: document.querySelector("#mjs-wrapper")}
			)

			Matter.World.add(engine.world, [menulinks, mouseConstraint, floor, wallL, wallR, ceil])
			
			let htmlblocks = false

			const addStuff = () => {

				htmlblocks = Matter.Composites.stack(	
			  		0, 0, delayed_fallables.length, 1, 0, 0,
			  		(xx, yy, i) => {
			  			const {x, y, width, height} = delayed_fallables[i].getBoundingClientRect();
			  			let xPos, yPos
			  			xPos = x; yPos = y
			    		const box = Matter.Bodies.rectangle(xPos, yPos, width, height, {})
			    		const randomAngularV = () => (Math.random()>0.5)? 1 : -1;
			    		Body.setAngularVelocity( box, Math.PI/1000*randomAngularV());
			    		return box
			    	}
		    	)
				Matter.World.add(engine.world,[htmlblocks])

				delayed_fallables.forEach(e => {
		  			e.style.position = "absolute"
				})
			}

			const dropColors = () => {

				colorblocks.bodies.forEach((block) => {
					Matter.Body.setStatic(block, false)	
				
				// mach sie nur noch isStatic:false
				})
			}

			
			const removeStuff = wovon => {
				// this.props.toggle({menuDrop:false})
				const removeHTMLfromWorld = this.props.stateRemoveNonMenu
				if (removeHTMLfromWorld === true) Matter.Composite.clear(wovon, false)
			}
			setTimeout(addStuff, 2000)
			setTimeout(dropColors, 3200)

			let origMouseX, origMouseY
			let mouseHasMoved = false

			fallables.forEach(el => {
				el.style.position = "absolute";
		  		el.addEventListener("mousedown", e => {
		    		// hier soll dann etwas passieren. Es gibt aber schon den "navigate to href" Event Listener im Menulink Component
		    		// man könnte noch irgendeinen Effekt der bei allen fallables passiert hier anbringen.
		    		// TODO: get mouse position and navigate only when it hasn't changed much.
		    		const recordOrigMousePos = () => {
			    		const event = window.event
			    		origMouseX = event.pageX
			    		origMouseY = event.pageY
			    		// DEBUG: console.log(mouseHasMoved, origMouseX, origMouseY)
		    		}
		    		if (mouseHasMoved) recordOrigMousePos()

		    	})
		    	el.addEventListener("touchstart", e => {
		    		// hier soll dann etwas passieren. Es gibt aber schon den "navigate to href" Event Listener im Menulink Component
		    		// man könnte noch irgendeinen Effekt der bei allen fallables passiert hier anbringen.
		    		// TODO: get mouse position and navigate only when it hasn't changed much.
		    		e.preventDefault()
		    		const recordOrigMousePos = () => {
			    		const event = window.event
			    		// DEBUG: console.dir(event) // get touch event
			    		origMouseX = event.changedTouches[0].pageX
			    		origMouseY = event.changedTouches[0].pageY
			    		// DEBUG: console.log(mouseHasMoved, origMouseX, origMouseY)
		    		}
		    		if (mouseHasMoved) recordOrigMousePos()

		    	})
		    	el.addEventListener("mousemove", e => {
		    		mouseHasMoved = true
		    	})
		    	el.addEventListener("touchmove", e => {
		    		e.preventDefault()
		    		mouseHasMoved = true
		    	})
		    	el.addEventListener("mouseup", e => {
		    		// hier soll dann etwas passieren. Es gibt aber schon den "navigate to href" Event Listener im Menulink Component
		    		// man könnte noch irgendeinen Effekt der bei allen fallables passiert hier anbringen.
		    		// TODO: get mouse position and navigate only when it hasn't changed much.
		    		const event = window.event
		    		const newMouseX = event.pageX
		    		const newMouseY = event.pageY
		    		if (!( (newMouseX > origMouseX+5) || (newMouseY > origMouseY+5) || (newMouseY < origMouseY-5) || (newMouseX < origMouseX-5) )) {
		    			// DEBUG: alert("OPosX:"+origMouseX+" OPosX:"+origMouseY+" NPosX:"+newMouseX+" NPosX:"+newMouseY)
		    			// navigate to link target:
		    			// hack: add class: "navigatable"
		    			el.classList.add("clickable")
		    			// DEBUG: console.dir(el.classList)
		    		}
		    		mouseHasMoved = false
		    	})
		    	el.addEventListener("touchend", e => {
		    		// hier soll dann etwas passieren. Es gibt aber schon den "navigate to href" Event Listener im Menulink Component
		    		// man könnte noch irgendeinen Effekt der bei allen fallables passiert hier anbringen.
		    		// TODO: get mouse position and navigate only when it hasn't changed much.
		    		e.preventDefault()
		    		const event = window.event
		    		const newMouseX = event.changedTouches[0].pageX
			    	const newMouseY = event.changedTouches[0].pageY
		    		if (!( (newMouseX > origMouseX+5) || (newMouseY > origMouseY+5) || (newMouseY < origMouseY-5) || (newMouseX < origMouseX-5) )) {
		    			// DEBUG: alert("OPosX:"+origMouseX+" OPosX:"+origMouseY+" NPosX:"+newMouseX+" NPosX:"+newMouseY)
		    			// navigate to link target:
		    			// hack: add class: "navigatable"
		    			el.classList.add("clickable")
		    			// DEBUG: console.dir(el.classList)
		    		}
		    		mouseHasMoved = false
		    	})
		    	// TODO: garbage collect event listeners!
			});    	

			(function update() {
		  		requestAnimationFrame(update)

			  	menulinks.bodies.forEach((block, i) => {
				    const thisFallable = fallables[i]

				    /*
				    TODO: adjust size of object on updaste to adjust for changing text blocks:
				    const { width, height } = fallables[i].getBoundingClientRect();
				    */
				    

				    const {x, y} = block.vertices[0]
				    thisFallable.style.top = `${y}px`
				    thisFallable.style.left = `${x}px`
				    thisFallable.style.transform = `translate(-50%, -50%) 
			                             rotate(${block.angle}rad) 
			                             translate(50%, 50%)`
				});
				colorblocks.bodies.forEach((block, i) => {
				    const thisFallable = super_delayed_fallables[i]

				    /*
				    TODO: adjust size of object on updaste to adjust for changing text blocks:
				    const { width, height } = fallables[i].getBoundingClientRect();
				    */
				    

				    const {x, y} = block.vertices[0]
				    thisFallable.style.top = `${y}px`
				    thisFallable.style.left = `${x}px`
				    thisFallable.style.transform = `translate(-50%, -50%) 
			                             rotate(${block.angle}rad) 
			                             translate(50%, 50%)`
				});
				if (typeof htmlblocks === 'object') {
					removeStuff(htmlblocks)
						htmlblocks.bodies.forEach((block, i) => {
					    const thisFallable = delayed_fallables[i]
					    const {x, y} = block.vertices[0]
					    //console.log(y)
					    thisFallable.style.top = `${y}px`
					    thisFallable.style.left = `${x}px`
					    thisFallable.style.transform = `translate(-50%, -50%) 
				                             rotate(${block.angle}rad) 
				                             translate(50%, 50%)`
					});
				}
	  			Matter.Engine.update(engine)
			})();
		}
		runCode()
		this.updateDimensions()
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
   			Dummies.push(<Dummy/>);
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