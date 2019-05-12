import React,{Component,Fragment} from "react";
import InputBox from '../InputBox/InputBox.js';
import TextArea from "../TextArea/TextArea";

class AddTask extends Component{
 render(){
     return(
         <div>
         <InputBox name="TaskName" labelText="TakName"/>
         <TextArea name="TaskDescription" labelText="TaskDescription"/>
         </div>
     )
 }
}
export default AddTask