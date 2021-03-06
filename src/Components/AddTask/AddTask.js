import React,{Component} from "react";
import InputBox from '../InputBox/InputBox.js';
import TextArea from "../TextArea/TextArea";
import _ from "../../Utils/utils";
class AddTask extends Component{
   handleChange = (e)=>{
       const {onChangeInputBoxFunc,onChangeTextAreaFunc}= this.props;
       const {name,value} = e.target;
      return _.lowerCaseFirstLetter(name) === "taskName" ? onChangeInputBoxFunc(value) : onChangeTextAreaFunc(value);

   };
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
