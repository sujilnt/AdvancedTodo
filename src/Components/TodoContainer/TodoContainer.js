import React, { Component } from 'react';
import './TodoContainer.css';
import Navbar from '../NavBar/NavBar';
import Section from '../Section/Section.js';
import DisplayTasks from '../DisplayTasks/DisplayTasks.js';
import _ from '../../Utils/utils.js';

class TodoContainer extends Component {
	state = {
		data: [],
		editedData: {},
		currentTask: {},
		currentId: '',
		show:false
	};
	// saving completed Tasks
	saveShowCompleted =(e,id)=>{
		console.log(id);
		const data = this.state.data.map((obj)=>{
			if(id=== obj.id){
				return {
					...obj,
					completed: !obj.completed
				};
			}else{
				return obj;
			}
		});
		_.setItemInStorage('taskslist', [...data]);
		this.setState(()=>({
			data: [...data]
		}));
	};
	// show Description Functionality
	showDescription =(e,id)=>{
	  	if(id){
		    this.setState((prev)=>({
			    currentId: id,
			    show:!prev.show
		    }));
	    }
	};
	// clearData - > clears the data.
	clearData = (e) => {
		_.setItemInStorage('taskslist', []);
		this.setState(() => ({
			data: []
		}));
	};
    // updating data from the local storage
	componentDidMount() {
		const tasklist = _.getItemStorage('taskslist');
		this.state.data.length === 0
			? this.setState(() => ({
					data: tasklist
				}))
			: '';
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

	//addTodo Posts functionality
	addDataFunction = (e) => {
		_.setItemInStorage('taskslist', [ ...this.state.data, e ]);
		this.setState((prev) => {
			return this.state.data !== undefined && prev.data.length > 0
				? { data: [ ...prev.data, e ] }
				: { data: [ e ] };
		});
	};

	// generate tasks
	generateTasks = () => {
		const {currentId} =this.state;
		const listofTasks = [];
		this.state.data.map((obj) => {
			listofTasks.push(
				<DisplayTasks
					name={obj.name}
					description={obj.description}
					key={obj.id}
					data={obj}
					id={obj.id}
					onSave={this.onSaveData}
					show={currentId === obj.id}
					showDescription={this.showDescription}
					completed={obj.completed}
					saveShowCompleted={this.saveShowCompleted}
				/>
			);
		});
		return listofTasks;
	};
	render() {
		const { data } = this.state;
		const total = data ? data.length : 0;
		const completeNumber = data ? data.filter((obj) => obj.completed === true).length : 0;
		const incompleted = total - completeNumber;
		return (
			<div className="appContainer">
				<Navbar addTaskFunc={this.addDataFunction} />
				<div className="todoBoard">
					<h2 className="h2style">
						List of Todo Tasks...
						<span className="clearTasks" onClick={this.clearData}>
							clear tasks
						</span>
					</h2>
					<hr className="hrstyle" />
					<Section incomplete={incompleted} completed={completeNumber} total={total} />
					{data.length !== 0 ? this.generateTasks() : <div>Todo tasks need to added ☺ !</div>}
				</div>
			</div>
		);
	}
}
export default TodoContainer;
