import React from "react";
import TextArea from "../../TextArea/TextArea";
import PropTypes from 'prop-types';
import DisplayTasks from "../DisplayTasks";

const EditMode=(props)=>{
	const {
		handleChange,
		descriptionValue,
		noEditMode,
		tododescription,
		description,
		onEditMode,
		onSave
	} = props;
	console.log(props);
	return(
		<div className="areaContainer">
			<div  className="flexBoxInline justifyingContentBetween">
				<span className="cssbeautify">Description</span>
				<span>
                        <span
	                        onClick={onEditMode}
	                        className="spanstylesRed"
	                        key={"EditMode"}
                        >Edit✍</span>
                        <span
	                        onClick={onSave}
	                        key={"saveMode"}
	                        className="spanstylesGreen"
	                        style={noEditMode ?
		                        {pointerEvents:"none", cursor: "not-allowed"}:{}}>Save ✉</span>
                     </span>
			
			</div>
			<TextArea
				onhandleChange={handleChange}
				defaultValue={description}
				value={descriptionValue}
				noEditMode={noEditMode}
			>{tododescription}
			</TextArea>
		</div>
	)
};

EditMode.propTypes ={
	handleChange:PropTypes.func.isRequired ,
	descriptionValue:PropTypes.string.isRequired,
	noEditMode: PropTypes.bool.isRequired,
	tododescription:PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
};
export default EditMode;
