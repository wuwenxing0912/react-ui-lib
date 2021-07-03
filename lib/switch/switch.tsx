import React, { useState } from "react";
import classes from "../helpers/classes";
import "./switch.scss";

interface Props {
	style?: React.CSSProperties;
	defaultChecked?: boolean;
	className?: string;
}

const Switch: React.FunctionComponent<Props> = (props) => {
	const { defaultChecked, className, ...rest } = props;
	const checkedClassName = defaultChecked ? "switch-checked" : "switch-unchecked";
	const checkedInnerClassName = defaultChecked ? "switch-inner-checked" : "switch-inner-unchecked";
	const [checked, setChecked] = useState(checkedClassName);
	const [innerClass, setInnerClass] = useState(checkedInnerClassName);
	const changeChecked = (state: string) => {
		let inner: string;
		if (state === "switch-checked") {
			state = "switch-unchecked";
			inner = "switch-inner-unchecked";
		} else {
			state = "switch-checked";
			inner = "switch-inner-checked";
		}
		setChecked(state);
		setInnerClass(inner);
	};
	return (
		<span
			className={classes("x-switch", className, checked)}
			onClick={() => changeChecked(checked)}
			{...rest}
		>
			<span className={classes("switch-inner", innerClass)}></span>
		</span>
	);
};

export default Switch;
