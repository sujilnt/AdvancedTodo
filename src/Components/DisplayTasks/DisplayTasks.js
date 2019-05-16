import React,{Component} from "react";
import "./DipalayTasks.css";
import PropTypes from 'prop-types';
import Loadable from 'react-loadable';

const LoadableBar = Loadable({
    loader: () => import(/* webpackPrefetch: true */ './EditMode/EditMode'),
    loading() {
        return <div>Loading...</div>
    }
});

class DisplayTasks extends Component{
    state={
     showDescription: false,
      completed:false,
     descriptionValue: "",
     noEditMode: true,
     id: ""
    };
    // showDescription -> shoe Description display the description.
    showDescription=(e)=>{
        const {id} = this.state;
        this.props.showDescription(e,id);
    };
    // onsave -> save the data and writing to localstorage.
    onsave = ()=>{
        const {id,name} = this.props;
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
    // showCompleted -> completing the tasks indication.
    showCompleted=(e)=>{
        e.stopPropagation();
        this.setState((prev)=>({
            completed: !prev.completed,
        }));
        this.props.saveShowCompleted(e,this.state.id);
        
    };
    // handleChange -> saving the description Value.
    handleChange = (e)=>{
        const value = e.target.value;
        this.setState(()=>({
            descriptionValue: value
        }));
    };
    // onEditMode -> toggling Edit Mode.
    onEditMode = ()=>{
        this.setState(()=>({
            noEditMode: false
        }));
    };
    
    deleteFunction = (e)=>{
        e.stopPropagation();
        console.log("dele button clicked ",this.state);
        this.props.deleteTodoTask(this.state.id);
    };
   
    componentDidMount(){
        // updating the  state {id,completed,description } from the Props
        this.setState(()=>({
            descriptionValue: this.props.description,
            id: this.props.id,
            completed: this.props.completed
        }));
    };
    render(){
        const {completed,descriptionValue,noEditMode} = this.state;
        const {description}=this.props;
        const tododescription = descriptionValue !== "" ? descriptionValue : description ;
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
                  <div className="captialize textoverflow" style={{width: "90%"}}>
                      {this.props.name}
                      <span className="delete-button" onClick={this.deleteFunction}>Delete</span>
                  </div>
              </header>
              {this.props.show ?
                    <LoadableBar
                        handleChange={this.handleChange}
                        tododescription={tododescription}
                        descriptionValue={descriptionValue}
                        noEditMode={noEditMode}
                        description={description}
                        onEditMode={this.onEditMode}
                        onSave={this.onsave}
                    />
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
