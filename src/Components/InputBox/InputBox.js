import React,{Component,Fragment} from "react";
import "./inputBox.css";
class InputBox extends Component{
 render(){
     const {name,labelText,onhandleChange}=this.props; 
     return(
        <div className="form__group">
         <input 
            name ={name}  
            aria-label={labelText}
            aria-required="true" 
            onChange={onhandleChange}
            className= "form__field"
            placeholder={"placeholder text"}
         />
         <label htmlFor={name} className="form__label">{labelText}</label>
        </div>
     )
 }
}
export default InputBox;