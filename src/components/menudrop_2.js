import React from "react"
import Matter from "matter-js"
import Dummy from './dummies'


/*
	set menu display state to false:
	this.props.toggle({menuDrop:false})

	get current state:
	this.props.state()
*/


/*

	ATTEMPT:

	Make menulinks, htmlblocks and colorblocks -> STATE so that I can call update function on sth known

*/

class Scene extends React.Component {
	
	constructor(props){
		super(props)
		// TODO: eigentlich muss window state ein paar Stufen höher und ge-propt werden.
		this.state = {
	      	height: window.innerHeight,
	      	width: window.innerWidth,
	      	willNonMenuHtmlbeRemoved: this.props.willNonMenuHtmlbeRemoved
	    }
	    window.addEventListener("resize", this.updateDimensions)
	    this.updateDimensions = this.updateDimensions.bind(this)
	    this.update = this.update.bind(this)
	    this.removeStuff = this.removeStuff.bind(this)
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
  	update = () => {
  		requestAnimationFrame(this.update)
  		/*
		    TODO: adjust size of object on updaste to adjust for changing text blocks:
		    const { width, height } = fallables[i].getBoundingClientRect();
		*/
		console.dir("Called in: menudrop.js; prop willNonMenuHtmlbeRemoved: "+this.state.willNonMenuHtmlbeRemoved())
		console.dir(this.state.menulinks) // leer!
	  	menulinks.bodies.forEach((block, i) => {
		    const thisFallable = this.state.fallables[i]
		    const {x, y} = block.vertices[0]
		    console.log(x+","+y)
		    thisFallable.style.top = `${y}px`
		    thisFallable.style.left = `${x}px`
		    thisFallable.style.transform = `translate(-50%, -50%) 
	                             rotate(${block.angle}rad) 
	                             translate(50%, 50%)`
		});
		if (typeof colorblocks === 'object')  {
			
			colorblocks.bodies.forEach((block, i) => {
			    const thisFallable = super_delayed_fallables[i]
			    const {x, y} = block.vertices[0]
			    thisFallable.style.top = `${y}px`
			    thisFallable.style.left = `${x}px`
			    thisFallable.style.transform = `translate(-50%, -50%) 
		                             rotate(${block.angle}rad) 
		                             translate(50%, 50%)`
			});
		}
		if (typeof htmlblocks === 'object') {
			this.removeStuff(htmlblocks)
			
			htmlblocks.bodies.forEach((block, i) => {
			    const thisFallable = delayed_fallables[i]
			    const {x, y} = block.vertices[0]
			    //console.log("Called in: menudrop.js; htmlblocks x,y:"+x+","+y)
			    thisFallable.style.top = `${y}px`
			    thisFallable.style.left = `${x}px`
			    thisFallable.style.transform = `translate(-50%, -50%) 
		                             rotate(${block.angle}rad) 
		                             translate(50%, 50%)`
			});
		}
		Engine.update(engine)
	}
	
	removeStuff = wovon => {
		// this.props.toggle({menuDrop:false})
		const removeHTMLfromWorld = this.state.willNonMenuHtmlbeRemoved
		if (removeHTMLfromWorld === true) Matter.Composite.clear(wovon, false)
	}

  	componentDidMount(){
  		let world, engine, runner

		const { Engine, Runner, World, Bodies, MouseConstraint, Composites, Body } = Matter

		const fallables = document.querySelectorAll(".fallable")
		const delayed_fallables = document.querySelectorAll(".delayed-fallable")
		const super_delayed_fallables = document.querySelectorAll(".super-delayed-fallable")

		// switch var for left / right side image drop:
		// let xPosSwitch = true
		engine = Engine.create({positionIterations:10,velocityIterations:8})
		world = engine.world
		// create runner

		runner = Runner.create();
		Runner.start(runner,engine);

		let windowheight = window.innerHeight
		let windowwidth = window.innerWidth

		const menulinks = Composites.stack(	
				// xx, yy, columns, rows, columnGap, rowGap, cb
				0, 0, fallables.length, 1, 0, 0,
				(xx, yy, i) => {
					const { width, height } = fallables[i].getBoundingClientRect();
					const xPos = Math.floor((Math.random() * (windowwidth-200)) + 1)
					const yPos = -windowheight+200		
				const box = Bodies.rectangle(xPos, yPos, width, height, {
		  			//isStatic: i === 0 || i + 1 === fallables.length
				})
				const randomAngularV = () => (Math.random()>0.5)? 1 : -1;
				Body.setAngularVelocity( box, Math.PI/500*randomAngularV())
				return box
			}
		)

		let colorblocks = false
		const delayedSizing = () => {
		    colorblocks = Composites.stack(	
			  	0, 0, super_delayed_fallables.length, 1, 0, 0,
			  		(xx, yy, i) => {
			  			const { width, height } = super_delayed_fallables[i].getBoundingClientRect();
			  			const xPos = Math.floor((Math.random() * (windowwidth-200)) + 1)
		  				const yPos = -windowheight+200	
			    		const box = Bodies.rectangle(xPos, yPos, width, height, {isStatic:true})
			    		const randomAngularV = () => (Math.random()>0.5)? 1 : -1;
			    		Body.setAngularVelocity( box, Math.PI/5*randomAngularV());
			    		return box
			    	}
		    )
			World.add(world,[colorblocks])

			super_delayed_fallables.forEach(e => {
		  		e.style.position = "absolute"
			})

			const dropColors = () => {

				colorblocks.bodies.forEach((block) => {
					Body.setStatic(block, false)	
				
				// mach sie nur noch isStatic:false
				})

			}
			setTimeout(dropColors, 3200)

		}
		setTimeout(delayedSizing, 50)

		// console.log("Called in: menudrop.js; typeof menulinks (should be object):"+typeof menulinks) 
		const wallThickness = 100
		const wallHeight = windowheight*2
		const wallY = 0
		const floor = Matter.Bodies.rectangle(windowwidth/2,windowheight,windowwidth,100)
		const wallR = Matter.Bodies.rectangle(windowwidth+50,wallY,wallThickness,wallHeight)
		const wallL = Matter.Bodies.rectangle(-50,wallY,wallThickness,wallHeight)
		const ceil  = Matter.Bodies.rectangle(windowwidth/2,-windowheight-50,windowwidth,100)
		Body.setStatic(floor, true)
		Body.setStatic(wallR, true)
		Body.setStatic(wallL, true)
		Body.setStatic(ceil,  true)

		const mouseConstraint = MouseConstraint.create(
				engine, {element: document.querySelector("#mjs-wrapper")}
		)

		World.add(world, [menulinks, mouseConstraint, floor, wallL, wallR, ceil])

		let htmlblocks = false

		const addStuff = () => {

			htmlblocks = Composites.stack(	
		  		0, 0, delayed_fallables.length, 1, 0, 0,
		  		(xx, yy, i) => {
		  			const {x, y, width, height} = delayed_fallables[i].getBoundingClientRect();
		  			let xPos, yPos
		  			xPos = x; yPos = y
		    		const box = Bodies.rectangle(xPos, yPos, width, height, {})
		    		const randomAngularV = () => (Math.random()>0.5)? 1 : -1;
		    		Body.setAngularVelocity( box, Math.PI/1000*randomAngularV());
		    		return box
		    	}
			)
			World.add(world,[htmlblocks])

			delayed_fallables.forEach(e => {
					e.style.position = "absolute"
			})
		}
		setTimeout(addStuff, 2000)


		fallables.forEach(el => {
			alert("y")
			el.style.position = "absolute";
		})
		this.update()
		this.updateDimensions()
	}


	componentWillUnmount(){
		// cancel matter
		World.clear(world);
        Engine.clear(engine);
        Runner.stop(runner);
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