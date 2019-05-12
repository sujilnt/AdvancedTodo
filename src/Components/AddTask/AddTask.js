import React,{Component,Fragment} from "react";
import InputBox from '../InputBox/InputBox.js';
import TextArea from "../TextArea/TextArea";
import _ from "../../Utils/utils";
class AddTask extends Component{
   handleChange = (e)=>{
       console.log(_);
       const {onChangeInputBoxFunc,onChangeTextAreaFunc}= this.props;
       const {name,value} = e.target;
       console.log("eeeee",e.target, e.target.name);
      return _.lowerCaseFirstLetter(name) === "taskName" ? onChangeInputBoxFunc(value): onChangeTextAreaFunc(value);

   } 
 render(){
     return(
         <div>
         <InputBox 
            name="TaskName"
            labelText="TaskName"
            onhandleChange={this.handleChange}
            />
         <TextArea 
            name="TaskDescription" 
            labelText="TaskDescription"
            onhandleChange={this.handleChange}
            />
         </div>
     )
 }
}
export default AddTask