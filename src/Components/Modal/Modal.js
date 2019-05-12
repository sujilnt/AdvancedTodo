import React from "react";
import "./Modal.css";
const Modal = (props)=>{
    return(
        <div className="modalContainer">
        <div>{props.children}</div>
        </div>
    )
};
export default Modal;
