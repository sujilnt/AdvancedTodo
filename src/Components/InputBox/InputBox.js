import React,{Component,Fragment} from "react";
import "./inputBox.css";
class InputBox extends Component{
 render(){
     const {name,labelText,onhandleChange}=this.props; 
     return(
        <div className="flexColumnContainer">
         <label for={name} className="labeltext">{labelText}</label>
         <input name ={name}  
         aria-label={labelText}
         aria-required="true" 
         onChange={onhandleChange}
         className= "inputStyle"
         />
        </div>
     )
 }
}
export default InputBox;