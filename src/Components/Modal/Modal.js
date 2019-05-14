import React from "react";
import PropTypes from "prop-types";
import "./Modal.css";
import DisplayTasks from "../DisplayTasks/DisplayTasks";
const Modal = (props)=>{
    return(
        <div className="modalContainer">
        <div>{props.children}</div>
        </div>
    )
};
export default Modal;
DisplayTasks.propTypes = {
    children: PropTypes.any,
};
