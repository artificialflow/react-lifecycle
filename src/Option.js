import React from 'react';

class Option extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		console.log('component Mounted ', this.props.value)
	}
	
	componentDidUpdate(prevProps) {
		if(this.props.value !== prevProps.value) {
			console.log('component Updated ', this.props.value)
		}
	}
	
	componentWillUnmount() {
		console.log('component Unmonted ', this.props.value)
	}

	render() {
		return(
			<option id={ this.props.id }>{ this.props.value }</option>
		)
	}
}

export default Option;