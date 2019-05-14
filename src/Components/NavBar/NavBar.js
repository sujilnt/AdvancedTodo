import React, { Component,Fragment } from 'react';
import Modal from "../Modal/Modal";
import AddTask from "../AddTask/AddTask.js";
import Button from "../Button/Button";
import './NavBar.css';
import _ from "../../Utils/utils";
class Navbar extends Component {
    state={
		showModal: false,
		taskName: "",
		taskDescription: "",
	    completed:false
	};
    // merging the state into object like exm{name,description , creationDate, etc}
	addTaskAfterValidation = ()=>{
		const {addTaskFunc} = this.props;
		console.log("check status", this.state)
		const finalobject =  _.mergeStateToObjects(this.state,"name","description");
		this.setState(()=>({
			showModal:false
		}));
    return addTaskFunc(finalobject);
	};
	// Setting the taskName through state change
	 getTaskName = (taskname)=>{
		 this.setState(()=>({
          taskName: taskname
		 }));
	 };
	// Setting the getTaskDesc through state change
	 getTaskDesc = (taskdesc)=>{
			this.setState(()=>({
				taskDescription:taskdesc
			}));
	 };
  // add task buttton functionality by clicking model opens .
  addTaskFunc = (e)=>{
			this.setState(()=>({
       		showModal:true
			}));
	};
   // close function of the modal
	onCloseFunc = (e)=>{
		this.setState(()=>({
				showModal:false
		}));
	};
	render(){
		const {showModal} = this.state;
		const {addTaskFunc} =this.props;
		return (
			<Fragment>
			  <div className="navbar">
				<div className="heading">Todo App</div>
				<div className="addButton" onClick ={this.addTaskFunc}>add task</div>
				</div>
				{ showModal ? <Modal>
					 <div className="ModalContent">
					 <AddTask
							onChangeInputBoxFunc = {this.getTaskName}
							onChangeTextAreaFunc={this.getTaskDesc}
					 />
					 <div className="flexBoxInline alignIntems justifyingContentEnd">
					     <Button onclickFunc={this.onCloseFunc}>Cancel</Button>
							 <Button
							 		background="green"
							    hoverBackground="blue"
							    onclickFunc={this.addTaskAfterValidation}
							    >Add Task </Button>
					 </div>
					 
					 </div>
					</Modal>
					:"" }
			</Fragment>
		);
	}
};
export default Navbar;
