import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
import Edit from './Edit';

const lists = [
	{
		id : 1,
		name : 'Simple list',
		type : 'read',
		data : [
			{ id : 1, value: "Have the courage to act instead of react." },
			{ id : 2, value: "It's not what happens to you, but how you react to it that matters." },
			{ id : 3, value: "The possibilities are numerous once we decide to act and not react." },
			{ id : 4, value: "How people treat you is their karma; how you react is yours." },
			{ id : 5, value: "Life is 10% what happens to you and 90% how you react to it." }
		]
	},
	{
		id : 2,
		name : 'My list',
		type : 'write',
		data : []
	}
];

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			lists : lists,
			id : null, value : ''
		};
		
		this.clicked = this.clicked.bind(this)
		this.updateValue = this.updateValue.bind(this)
	}

	componentDidUpdate(prevProps, prevState) {
		if(this.state.value !== prevState.value) {
			// console.log('Value updated ', this.state.value)
			
			let lists = this.state.lists.map(list => list)
			lists.forEach(list => {
				list.data.forEach(item => {
					if(item.id == this.state.id) {
						item.value = this.state.value
					}
				})
			})
			this.updateLists(lists)
		}
	}

	updateValue(value) {
		this.setState({ value : value })
	}

	updateId(id) {
		this.setState({ id : id })
	}
	
	updateLists(lists) {
		this.setState({ lists : lists})
	}

	clicked(item) {
		this.updateId(item.id)
		this.updateValue(item.value)

		let lists = this.state.lists.map(list => list)
		lists.forEach(list => {
			if(list.data.filter(listItem => listItem.id == item.id).length === 0) {
				list.data.push(item)
			} else if(list.type == 'write') {
				list.data = list.data.filter(listItem => listItem.id != item.id)
			}
		})
		this.updateLists(lists)
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
				</header>				
				<Edit id={ this.state.id } value={ this.state.value } updateValue={ this.updateValue } />
				{
					this.state.lists.map(
						list => <List key={ list.name } id={ list.id } name={ list.name } list={ list.data } clicked = { this.clicked } />)
				}
			</div>
		);
	}
}

export default App;