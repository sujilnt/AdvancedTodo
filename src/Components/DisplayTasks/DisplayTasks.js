import React,{Component} from "react";
import "./DipalayTasks.css";
import TextArea from "../TextArea/TextArea.js";
import PropTypes from 'prop-types';

class DisplayTasks extends Component{
    state={
     showDescription: false,
      completed:false,
     descriptionValue: "",
     noEditMode: true,
     id: ""
    };
    showDescription=(e)=>{
        const {id} = this.state;
        this.props.showDescription(e,this.state.id);
    };
    onsave = (e)=>{
        const {id,description,name} = this.props;
        const {descriptionValue,completed} =this.state;
        console.log("e",this.props, this.state);
        this.props.onSave({
            id,
            description: descriptionValue,
            name,
            completed: completed
        });
        this.setState(()=>({
            noEditMode:true
        }));
    };
    showCompleted=(e)=>{
        e.stopPropagation();
        this.setState((prev)=>({
            completed: !prev.completed,
        }));
        this.props.saveShowCompleted(e,this.state.id);
        
    };
    handleChange = (e)=>{
        const value = e.target.value;
        this.setState((prev)=>({
            descriptionValue: value
        }));
    };
    onEditMode = (e)=>{
        this.setState((prev)=>({
            noEditMode: !prev.noEditMode
        }));
    };
    componentDidMount(){
        this.setState(()=>({
            descriptionValue: this.props.description,
            id: this.props.id,
            completed: this.props.completed
        }));
    };
    render(){
        const {showDescription,completed,descriptionValue,noEditMode} = this.state;
        const {description}=this.props;
        const tododescription = descriptionValue !== "" ? descriptionValue : description ;
        console.log("todo description",this.state);
        return(
            <div
                style={{overflow: "hidden"}}
            >
              <div
                  onClick={this.showCompleted}
                  className="checkButton"  style={completed ? {opacity:1}: {opacity:0.5}}>✔</div>
              <header
                  onClick={this.showDescription}
                   style={completed ? {opacity:"0.5"}: {opacity:1}}
                   className="taskHeader">
                  <div>{this.props.name}</div>
              </header>
              {this.props.show ?
                <div
                  className="areaContainer"
                >
                <div  className="flexBoxInline justifyingContentBetween">
                     <span>Description</span>
                     <span>
                        <span
                             onClick={this.onEditMode}
                             className="spanstylesRed"
                             key={"EditMode"}
                             >Edit✍</span>
                        <span
                            onClick={this.onsave}
                            key={"saveMode"}
                            className="spanstylesGreen"
                            style={noEditMode ?
                                {pointerEvents:"none", cursor: "not-allowed"}:{}}>Save ✉</span>
                     </span>
                
                </div>
                <TextArea
                    onhandleChange={this.handleChange}
                    defaultValue={this.props.description}
                    value={descriptionValue}
                    noEditMode={noEditMode}
                  >{tododescription}</TextArea>
                  </div>
                : "" }
            </div>
        );
    }
}

DisplayTasks.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    show : PropTypes.bool.isRequired,
    completed : PropTypes.bool.isRequired,
    onSave: PropTypes.func.isRequired,
    showDescription: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
};
export default DisplayTasks;
