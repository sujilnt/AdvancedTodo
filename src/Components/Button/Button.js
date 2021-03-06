import React, { Fragment } from 'react';
import styled from 'styled-components';
const defaultcolor = `red`;
const ButtonStyle = styled.div`
	background: ${props => props.background || defaultcolor };
    color: white;
    padding: 7px;
    position: relative;
    margin: 0 10px;
    transition: all 1s;
    cursor: pointer;
	border-radius: 2px;
	min-width: 68px;
    text-align: center;
	
	:hover{
		background: ${props=> props.hoverBackground || defaultcolor};
	    box-shadow: 0px 0px 4px #61210f;
	}
`;
const Button = (props) => {
	const { onclickFunc,hoverBackground,background } = props;
	return (
		<Fragment>
			<ButtonStyle
				className="buttonStyle"
				onClick={onclickFunc}
				hoverBackground={hoverBackground}
				background={background}
				>
				{props.children}
			</ButtonStyle>
		</Fragment>
	);
};
export default Button;
