import React, { Component } from 'react';
import './TodoContainer.css';
import Navbar from '../NavBar/NavBar';
import todoData from "../../data";
import Section from "../Section/Section.js";
import DisplayTasks from "../DisplayTasks/DisplayTasks.js"

class TodoContainer extends Component {
	state={
		data: todoData,
		editedData:{},
		currentTask:{},
		currentId: ""
	}
	clearData = (e)=>{
     console.log("clear the data");
	};
	onSaveData = (currentData)=>{
		console.log("current Data",this.state.data);
		const letcurrentData = this.state.data.map((obj)=>{
			return obj.id === currentData.id ?({
					...obj,
					name: currentData.name,
					description: currentData.description
			}) : obj;
		});
		console.log("called inside CurrenrData",letcurrentData);
        this.setState(()=>({
			data: letcurrentData

		}));

	}
	addDataFunction = (e)=>{
		console.log("currentData is ....",e);
		this.setState((prev,props)=>({
			data: [...prev.data,e]
		}));
	}
	generateTasks = ()=>{
		const listofTasks = [];
		this.state.data.map((obj)=>{
			listofTasks.push(
				 <DisplayTasks 
					 name={obj.name} 
					  description={obj.description}
					  key={obj.key}
					  data={obj}
					  id={obj.id}
					  onSave={this.onSaveData}
				/>
			)
		});
		return listofTasks;
	}
	render(){
		const {data} = this.state;
		const total = this.state.data.length;
		//const incomplete = _.
		console.log("currentState",this.state.data);
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
				{this.generateTasks()}
				</div>
			</div>
		);
	}
};
export default TodoContainer;
