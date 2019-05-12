import React, { Fragments } from 'react';
import './TodoContainer.css';
import Navbar from '../NavBar/NavBar';
import InputBox from '../InputBox/InputBox.js';
const TodoContainer = (props) => {
	return (
		<div>
				<Navbar />
				<InputBox name="test" labelText="inputBox"/>
		</div>
	);
};
export default TodoContainer;
