import React, { Component } from 'react';
import './TodoContainer.css';
import Navbar from '../NavBar/NavBar';
import todoData from "../../data";
class TodoContainer extends Component {
	state={
		data: todoData
	}
	addDataFunction = (e)=>{
		this.setState((prev,props)=>{
			data: e
		});
	}
	render(){
		console.log(this.state.data);
		return (
			<div>
				<Navbar  addTaskFunc={this.addDataFunction}/>	
			</div>
		);
	}
};
export default TodoContainer;
