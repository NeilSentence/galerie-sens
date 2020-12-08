import React from "react"
import Matter from "matter-js"
import MenuLink from './menulink'
import Dummy from './dummies'

class Scene extends React.Component {
	
	constructor(props){
		super(props)
		// TODO: eigentlich muss window state ein paar Stufen höher und ge-propt werden.
		this.state = {
	      	height: window.innerHeight,
	      	width: window.innerWidth,
	    }
	    window.addEventListener("resize", this.update)
	}

	style = {
	    wrapper: {
	      display: "block",
	      top:        50,
	      height:     'calc(100% - 50px)',
	      width:      '100vw',
	      position:   'fixed'
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
			console.dir(fallables)
			
			const engine = Matter.Engine.create()
			
			const stack1 = Matter.Composites.stack(
		  		// xx, yy, columns, rows, columnGap, rowGap, cb
		  		0, 0, fallables.length, 1, 0, 0,
		  		(xx, yy, i) => {
		  			const randomX = Math.floor((Math.random() * (this.state.width-200)) + 1)
		    		const {y, width, height} = fallables[i].getBoundingClientRect();
		    		const box = Matter.Bodies.rectangle(randomX, -this.state.height+200, width, height, {
		      			//isStatic: i === 0 || i + 1 === fallables.length
		    		})
		    		const randomAngularV = () => (Math.random()>0.5)? 1 : -1;
		    		Body.setAngularVelocity( box, Math.PI/1000*randomAngularV());
		    		return box
		    	}
		    )
		    

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


			Matter.World.add(engine.world, [stack1, mouseConstraint, floor, wallL, wallR, ceil])
			
			fallables.forEach(e => {
		  		e.style.position = "absolute";
		  		e.addEventListener("click", e => {
		    		// hier soll dann etwas passieren. Es gibt aber schon den "navigate to href" Event Listener im Menulink Component
		    		// man könnte noch irgendeinen Effekt der bei allen fallables passiert hier anbringen.
		    	})
			});

			(function update() {
		  		requestAnimationFrame(update)
			  	stack1.bodies.forEach((block, i) => {
				    const thisFallable = fallables[i]
				    const {x, y} = block.vertices[0]
				    thisFallable.style.top = `${y}px`
				    thisFallable.style.left = `${x}px`
				    thisFallable.style.transform = `translate(-50%, -50%) 
			                             rotate(${block.angle}rad) 
			                             translate(50%, 50%)`
				});

	  			Matter.Engine.update(engine)
			})();
		}
  	
		runCode()
		this.update()
	}

	update = () => {
    	this.setState({
	      	height: window.innerHeight,
	      	width: window.innerWidth
    	})
   	}
   	
   	closeMenu = () => {
   		this.props.menudrop({menuDrop:false}) 
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