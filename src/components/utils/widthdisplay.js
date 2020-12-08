import React, {Component} from 'react'

class WidthDisplay extends Component {
	constructor() {
	    super()
	    this.state = {
	      	height: 0,
	      	width: 0
	    }
	    window.addEventListener("resize", this.update);
  	}

  	componentDidMount() {
    	this.update()
  	}

  	update = () => {
    	this.setState({
	      	height: window.innerHeight,
	      	width: window.innerWidth
    	})
  	}
	render() {
		return (
			<div>
				<div style={{display:"flex",justifyContent:"center",position:"absolute",width:"100%",background:"#ffffff78",top:"50px"}}> 
                	<p>width: {this.state.width}px -</p>
                	<p>- height: {this.state.height}px</p>
              	</div>
			</div>
		)
	}
}

export default WidthDisplay

