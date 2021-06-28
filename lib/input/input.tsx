import React from "react";
import classes from "../helpers/classes";
import Icon from "../icon/icon";
import "./input.scss";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	id?: string;
	placeholder?: string;
	className?: string;
	style?: React.CSSProperties;
	value?: string;
	disabled?: boolean;
	prefix?: string;
	suffix?: string;
	error?: boolean;
}

const Input: React.FunctionComponent<Props> = (props) => {
	const { className, value, disabled, prefix, suffix, error, ...rest } = props;
	const prefixClassName = prefix && "prefix";
	const suffixClassName = suffix && "suffix";
	const errorClassName = error ? "error" : "";
	const inputWrapperClassName = classes(
		"x-input-wrapper",
		className,
		prefixClassName,
		suffixClassName
	);
	return (
		<span className={inputWrapperClassName}>
			{prefix ? (
				<span className="prefix-wrapper">
					<Icon name={prefix} className="prefix-icon" />
				</span>
			) : (
				""
			)}
			<input
				value={value}
				className={classes("x-input", errorClassName)}
				disabled={disabled}
				{...rest}
			/>
			{suffix ? (
				<span className="suffix-wrapper">
					<Icon name={suffix} className="suffix-icon" />
				</span>
			) : (
				""
			)}
		</span>
	);
};

Input.defaultProps = {
	error: false,
};

export default Input;
