import React, { Fragment } from 'react';
import './Button.css';
const Button = (props) => {
	const { name, onclickFunc } = props;
	return (
		<Fragment>
			<div className="buttonStyle" onClick={onclickFunc}>
				{name}
			</div>
		</Fragment>
	);
};
export default Button;
