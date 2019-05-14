import React from "react";
import PropTypes from "prop-types";
import "./Modal.css";
const Modal = (props)=>{
    return(
        <div className="modalContainer">
        <div>{props.children}</div>
        </div>
    )
};
export default Modal;
Modal.propTypes = {
    children: PropTypes.any.isRequired,
};
