import React from 'react';
import './App.css';
import img from '../../../assets/images.png';
import Button from '../Button/Button.js';
import Navbar from '../NavBar/NavBar.js';
import TodoContainer from '../TodoContainer/TodoContainer';
const handleChange = (e) => {
	console.log(e.target);
};
const App = () => {
	return (
		<div>
			<TodoContainer/>
		</div>
		);
};
export default App;
