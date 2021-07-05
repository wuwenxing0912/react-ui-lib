import React from "react";
import classes from "../helpers/classes";
import scrollbarWidth from "./scroll-width";
import "./scroll.scss";

interface Props {
	style?: React.CSSProperties;
}

const Scroll: React.FunctionComponent<Props> = (props) => {
	const { ...rest } = props;
	return (
		<div className={classes("x-scroll")} {...rest}>
			<div className="x-scroll-inner" style={{right: -scrollbarWidth()}}>{props.children}</div>
		</div>
	);
};

export default Scroll;
