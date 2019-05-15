import React,{Fragment} from "react";
import AddTask from "../AddTask/AddTask";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
const AddButtonForm = (props)=>{
	const {
		getTaskName,
		getTaskDesc,
		onCloseFunc,
		addTaskAfterValidation
	}=props;
	return(
		<Fragment>
			<Modal>
				<div className="ModalContent">
				<AddTask
					onChangeInputBoxFunc = {getTaskName}
					onChangeTextAreaFunc={getTaskDesc}
				/>
				<div className="flexBoxInline alignIntems justifyingContentEnd">
					<Button onclickFunc={onCloseFunc}>Cancel</Button>
					<Button
						background="green"
						hoverBackground="blue"
						onclickFunc={addTaskAfterValidation}
					>
						Add Task
					</Button>
				</div>
				</div>
			</Modal>
		</Fragment>
	);
};
export default AddButtonForm;
