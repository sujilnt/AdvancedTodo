import PropTypes from "prop-types";
import React, { Component,Fragment } from 'react';
import _ from "../../Utils/utils";
import Loadable from 'react-loadable';
import './NavBar.css';

const  LoadableModal = Loadable({
	loader: ()=>import(/* webpackPrefetch: true */ "../AddButtonForm/AddButtonForm"),
	loading: ()=><div>Loading.....</div> ,
});

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
  addTaskFunc = ()=>{
  	this.setState(()=>({
	    showModal:true
  	}));
	};
   // close function of the modal
	onCloseFunc = ()=>{
		this.setState(()=>({
				showModal:false
		}));
	};
	render(){
		const {showModal} = this.state;
		return (
			<Fragment>
			  <div className="navbar">
				<div className="heading">Todo App</div>
				<div className="addButton" onClick ={this.addTaskFunc}>add task</div>
				</div>
				{ showModal ?
					<LoadableModal
						getTaskName={this.getTaskName}
						getTaskDesc={this.getTaskDesc}
						onCloseFunc={this.onCloseFunc}
						addTaskAfterValidation={this.addTaskAfterValidation}
					/>
					:"" }
			</Fragment>
		);
	}
}
export default Navbar;
Navbar.propTypes = {
	addTaskFunc: PropTypes.func.isRequired,
};
