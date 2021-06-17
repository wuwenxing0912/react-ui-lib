import React, { Fragment } from "react";
import classes from "../helpers/classes";
import "./button.scss";

interface Props {
	type?: 'default' | 'primary' | 'dashed' | 'danger';
	className?: string;
  style?: React.CSSProperties
}

const Button: React.FunctionComponent<Props> = (props) => {
	console.log(props);
  const {type, className, ...rest} = props;
  const buttonClassName = classes("x-button", type, className);
	return (
		<Fragment>
			<button className={buttonClassName} {...rest}>
				<span>{props.children}</span>
			</button>
		</Fragment>
	);
};

Button.defaultProps = {
  type: 'default'
}

export default Button;
