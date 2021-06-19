import React, { Fragment } from "react";
import classes from "../helpers/classes";
import "./button.scss";

interface Props {
	type?: 'default' | 'primary' | 'dashed' | 'danger';
	className?: string;
  style?: React.CSSProperties;
	disabled?: boolean
}

const Button: React.FunctionComponent<Props> = (props) => {
  const {type, className, ...rest} = props;
	const disabled = props.disabled ? 'disabled' : undefined;
  const buttonClassName = classes("x-button", type, className, disabled);
	return (
		<Fragment>
			<button className={buttonClassName} {...rest}>
				<span>{props.children}</span>
			</button>
		</Fragment>
	);
};

Button.defaultProps = {
  type: 'default',
	disabled: false
}

export default Button;
