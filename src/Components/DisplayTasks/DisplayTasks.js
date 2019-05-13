import React,{Component} from "react";
import "./DipalayTasks.css";
import TextArea from "../TextArea/TextArea.js";
class DisplayTasks extends Component{
    state={
     showDescription: false,
     completed:false,
     descriptionValue: "",
     noEditMode: true
    };
    showDescription=(e)=>{
        this.setState((prev)=>({
            showDescription:!prev.showDescription
        }));
    }
    autoClose =(e)=>{
        console.log("called");
        this.setState((prev)=>({
            showDescription:false
        })); 
    }
    showCompleted=(e)=>{
        this.setState((prev)=>({
            completed: !prev.completed,
            showDescription:false
        }));
    }
    handleChange = (e)=>{
        const value = e.target.value;
        this.setState((prev)=>({
            descriptionValue: value
        }));
    }
    onEditMode = (e)=>{
        this.setState((prev)=>({
            noEditMode: !prev.noEditMode
        }));
    }
    componentDidMount(){
        this.setState(()=>({
            descriptionValue: this.props.description
        }));
    }
    render(){
        const {showDescription,completed,descriptionValue,noEditMode} = this.state;
        return(
            <div style={{overflow: "hidden"}}>
              <span 
                  onClick={this.showCompleted} 
                  className="checkButton"  style={completed ? {opacity:1}: {opacity:0.5}}>✔</span>
              <header 
                  onClick={this.showDescription}  
                   style={completed ? {opacity:"0.5"}: {opacity:1}} 
                   className="taskHeader">
              {this.props.name}
              </header>
              {showDescription ? 
                <div 
                  className="areaContainer"
                  onMouseLeave ={this.autoClose}
                >
                <div>Description <span onClick={this.onEditMode} >✍</span> </div>
                <TextArea 
                    onhandleChange={this.handleChange} 
                    defaultValue={this.props.description}
                    value={descriptionValue}
                    noEditMode={noEditMode}
                  >{this.props.description}</TextArea> 
                  </div>
                : "" }
            </div>
        )
    }
}

export default DisplayTasks;