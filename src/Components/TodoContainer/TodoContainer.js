import React, { Component } from 'react';
import './TodoContainer.css';
import Navbar from '../NavBar/NavBar';
import todoData from '../../data';
import Section from '../Section/Section.js';
import DisplayTasks from '../DisplayTasks/DisplayTasks.js';
import _ from '../../Utils/utils.js';
class TodoContainer extends Component {
	state = {
		data: {},
		editedData: {},
		currentTask: {},
		currentId: ''
	};

	// clearData - > clears the data.
	clearData = (e) => {
		_.setItemInStorage('taskslist', {});
		this.setState(() => ({
			data: {}
		}));
	};

	componentDidMount() {
		const tasklist = _.getItemStorage('taskslist');
		console.log('t', tasklist);
	}

	// Onsave button functionality.
	onSaveData = (currentData) => {
		console.log('current Data', this.state.data);
		const letcurrentData = this.state.data.map((obj) => {
			return obj.id === currentData.id
				? {
						...obj,
						name: currentData.name,
						description: currentData.description
					}
				: obj;
		});
		_.setItemInStorage('taskslist', letcurrentData);
		console.log('called inside CurrenrData', letcurrentData);
		this.setState(() => ({
			data: letcurrentData
		}));
	};

	// add Todo Posts functionality
	addDataFunction = (e) => {
		console.log('currentData is ....', e);
		this.setState((prev) => {
			return this.state.data !== undefined && prev.data.length > 0
				? { data: [ ...prev.data, e ] }
				: { data: [ e ] };
		});
	};

	// generate tasks
	generateTasks = () => {
		const listofTasks = [];
		this.state.data.map((obj) => {
			listofTasks.push(
				<DisplayTasks
					name={obj.name}
					description={obj.description}
					key={obj.key}
					data={obj}
					id={obj.id}
					onSave={this.onSaveData}
				/>
			);
		});
		return listofTasks;
	};
	render() {
		const { data } = this.state;
		const total = this.state.data.length;
		//const incomplete = _.
		console.log('currentState', this.state.data);
		return (
			<div className="appContainer">
				<Navbar addTaskFunc={this.addDataFunction} />
				<div className="todoBoard">
					<h2 className="h2style">
						{' '}
						List of Todo Tasks...
						<span className="clearTasks" onClick={this.clearData}>
							clear tasks
						</span>
					</h2>
					<hr className="hrstyle" />
					<Section incomplete={2} completed={3} total={5} />
					{data.length > 0 ? this.generateTasks() : <div>Todo tasks need to added !</div>}
				</div>
			</div>
		);
	}
}
export default TodoContainer;
