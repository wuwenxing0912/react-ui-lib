import React, { useState } from "react";
import classes from "../helpers/classes";
import "./switch.scss";

interface Props {
	style?: React.CSSProperties;
}

const Switch: React.FunctionComponent<Props> = (props) => {
	const { ...rest } = props;
	const [checked, setChecked] = useState("switch-unchecked");
	const [innerClass, setInnerClass] = useState("switch-inner-unchecked");
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
			className={classes("x-switch", checked)}
			onClick={() => changeChecked(checked)}
			{...rest}
		>
			<span className={classes("switch-inner", innerClass)}></span>
		</span>
	);
};

export default Switch;
