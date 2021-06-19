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
	onClick?: React.MouseEventHandler;
}

const Button: React.FunctionComponent<Props> = (props) => {
	const { type, className, ...rest } = props;
	const disabled = props.disabled ? "disabled" : undefined;
	const icon = props.icon && (
		<Icon name={props.icon}></Icon>
	);
	const onClick = (e: React.MouseEvent) => {
		if (disabled) return e.preventDefault();
		props.onClick && props.onClick.call(e.target, e);
	}
	const buttonClassName = classes("x-button", type, className, disabled);
	return (
		<Fragment>
			<button className={buttonClassName} onClick={onClick} {...rest}>
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
