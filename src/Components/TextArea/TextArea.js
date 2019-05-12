import React,{Component} from "react";
class TextArea extends Component{
    render(){
        const {name,labelText,onhandleChange}=this.props;
        return(
            <div className="form__group">
                <textarea 
                    className="form__field" 
                    rows="4"
                    aria-label={labelText}
                    aria-required="true"
                    placeholder={"text area"}
                    name={name}
                    onChange={onhandleChange}
                ></textarea>
                <label htmlFor={name} className="form__label">{labelText}</label>
            </div>
        );
    }
}

export default TextArea;