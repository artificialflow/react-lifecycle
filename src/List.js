import React from 'react';

class List extends React.Component {
	constructor(props) {
		super(props)
		
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e) {
		this.props.clicked(
			this.props.list.filter(item => item.id == e.target[e.target.options.selectedIndex].id)[0]
		)
	}

	render() {
		return(
			<form>
				<select onChange={this.handleChange} size="6">
					<option disabled>{ this.props.name }</option>
					{
						this.props.list.map(item => 
							<option key={ item.id } id={ item.id }>{ item.value }</option>)
					}
				</select>
			</form>
		)
	}
}

export default List;