import React, { Fragment } from "react";
import classes from "../helpers/classes";
import "./button.scss";
import Icon from "../icon/icon";

interface Props {
	type?: "default" | "primary" | "dashed" | "danger";
	className?: string;
	style?: React.CSSProperties;
	disabled?: boolean;
	icon?: string;
}

const Button: React.FunctionComponent<Props> = (props) => {
	const { type, className, ...rest } = props;
	const disabled = props.disabled ? "disabled" : undefined;
	const icon = props.icon && (
		<Icon name={props.icon}></Icon>
	);
	const buttonClassName = classes("x-button", type, className, disabled);
	return (
		<Fragment>
			<button className={buttonClassName} {...rest}>
				{icon}
				<span className="text">{props.children}</span>
			</button>
		</Fragment>
	);
};

Button.defaultProps = {
	type: "default",
	disabled: false,
};

export default Button;
