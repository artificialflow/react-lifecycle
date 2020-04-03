import React from 'react';

class Edit extends React.Component {
	constructor(props) {
		super(props)
		
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e) {
		this.props.updateValue(e.target.value)
	}

	render() {
		return(
			<input type="text" placeholder="Edit any text.." value={ this.props.value } onChange={ this.handleChange } />
		)
	}
}

export default Edit;