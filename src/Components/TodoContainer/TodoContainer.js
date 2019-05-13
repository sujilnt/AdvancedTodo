import React, { Component } from 'react';
import './TodoContainer.css';
import Navbar from '../NavBar/NavBar';
import todoData from "../../data";
import Section from "../Section/Section.js";
class TodoContainer extends Component {
	state={
		data: todoData
	}
	clearData = (e)=>{
     console.log("clear the data");
	};
	addDataFunction = (e)=>{
		console.log("currentData is ....",e);
		this.setState((prev,props)=>({
			data: [...prev.data,e]
		}));
	}
	render(){
		const total = this.state.data.length;
		//const incomplete = _.
		console.log(this.state.data);
		return (
			<div className="appContainer">
				<Navbar  addTaskFunc={this.addDataFunction}/>	
				<div className="todoBoard">
				 <h2 className="h2style"> List of Todo Tasks... 
				           <span className="clearTasks" onClick={this.clearData}>clear tasks</span>
				 </h2>
				 <hr className="hrstyle"/>
				 <Section 
				 		incomplete={2}
						completed={3}
						total={5}
				 />
				</div>
			</div>
		);
	}
};
export default TodoContainer;
