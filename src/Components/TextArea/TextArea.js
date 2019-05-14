import React,{Component} from "react";
const unedit = {
    borderBottom: "none",
    pointerEvents:"none"
}
class TextArea extends Component{
    render(){
        const {name,labelText,onhandleChange ,defaultValue,noEditMode}=this.props;
         return defaultValue ?
         <div className="form__group">
            <label htmlFor={name} className="form__label">{labelText}</label>
             <div>{defaultValue}</div>
        </div>
         :
         <div className="form__group">
            <textarea
                className="form__field"
                rows="4"
                aria-label={labelText}
                aria-required="true"
                placeholder={"text area"}
                name={name}
                onChange={onhandleChange}
            >
            
            </textarea>
            <label htmlFor={name} className="form__label">{labelText}</label>
        </div>;
    }
}

export default TextArea;
