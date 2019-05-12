import React, { Component,Fragment } from 'react';
import Modal from "../Modal/Modal";
import styled from 'styled-components';
import AddTask from "../AddTask/AddTask.js";
import './NavBar.css';
const AddButton = styled.button`
	background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
`;

class Navbar extends Component {
    state={
		showModal: false
	}
    addTaskFunc = (e)=>{
		this.setState(()=>({
             showModal:true
		}));
	};
	onCloseFunc = (e)=>{
		console.log("called");
		this.setState(()=>({
			showModal:false
		}));
	}
	render(){
		const {showModal} = this.state;
		return (
			<Fragment>
			  <div className="navbar">
				<div className="heading">Todo App</div>
				<div className="addButton" onClick ={this.addTaskFunc}>add task</div>
				</div>
				{ showModal ? <Modal>
					 <div className="ModalContent">
					 <AddTask />
					 <button onClick={this.onCloseFunc}>Add Task</button>
					 </div>
					</Modal>
					:"" }
			</Fragment>
		);
	}
};
export default Navbar;
