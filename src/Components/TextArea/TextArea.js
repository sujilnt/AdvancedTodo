import PropTypes from "prop-types";
import React,{Component} from "react";

const TextArea =(props)=>{
    const {name,labelText,onhandleChange ,defaultValue,noEditMode}=props;
    return noEditMode ?
        (<div className="form__group">
            <label htmlFor={name} className="form__label">{labelText}</label>
            <div>{defaultValue}</div>
        </div>)
        :
        (<div className="form__group">
            <textarea
                className="form__field"
                rows="4"
                aria-label={labelText}
                aria-required="true"
                placeholder={"text area"}
                name={name}
                onChange={onhandleChange}
                defaultValue={defaultValue}
            >
            
            </textarea>
            <label htmlFor={name} className="form__label">{labelText}</label>
        </div>);
};

export default TextArea;

TextArea.propTypes = {
    name: PropTypes.string,
    labelText: PropTypes.string,
    onhandleChange: PropTypes.func.isRequired,
    noEditMode: PropTypes.bool,
    defaultValue: PropTypes.string,
};
