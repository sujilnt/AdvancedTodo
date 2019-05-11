import React from 'react';
import './App.css';
import img from '../../../assets/images.png';
import Button from '../Button/Button.js';
import TodoContainer from '../TodoContainer/TodoContainer';
const handleChange = (e) => {
	console.log(e.target);
};
const App = () => {
	return (
		<div className="container flexBoxInline justifyingContent alignIntems">
			<TodoContainer />
		</div>
	);
};
export default App;
