// State Handling REACT
/* import React, {Component} from 'react'
import someData from './somepath'

class XYZ extends Component {
	constructor () {
		super()
		this.state = {
			someData: [{}] // objects have .id, .completed bool
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(id) {
		const DomElements = this.state.someData.map(item => <MyComponent key={item.id} item={item}/>)
	}

	render() {
		return (
			<div className="my-components">
				{DomElements}
			</div>
		)
	}
}

export default XYZ






Und in MyComponent:

import React, {Component} from 'react'

function MyComponent(props) {
	return (
	<div className="something">
		<input 
			type="checkbox">
			checked={props.item.completed}
			onChange={} // camelCase!!
	</div>)
}


*/