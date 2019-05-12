import React,{Component,Fragment} from "react";
import InputBox from '../InputBox/InputBox.js';
import TextArea from "../TextArea/TextArea";

class AddTask extends Component{
   handleChange = (e)=>{
       const {onChangeInputBoxFunc,onChangeTextAreaFunc}= this.props;
       const {name,value} = e.target;
       console.log("eeeee",e.target, e.target.name);
      return name === "taskName" ? onChangeInputBoxFunc(value): onChangeTextAreaFunc(value);

   } 
 render(){
     return(
         <div>
         <InputBox 
            name="taskName"
            labelText="taskName"
            onhandleChange={this.handleChange}
            />
         <TextArea 
            name="taskDescription" 
            labelText="taskDescription"
            onhandleChange={this.handleChange}
            />
         </div>
     )
 }
}
export default AddTask