import React, { ReactNode } from "react";
import classes from "../helpers/classes";
import "./tabs.scss";

interface Props {
	layout?: "horizontal" | "vertical";
	className?: string;
	style?: React.CSSProperties;
	content?: string | ReactNode;
}

const Tabs: React.FunctionComponent<Props> = (props) => {
	const { className, layout, ...rest } = props;
	return <div className={classes("x-tabs", className)} {...rest}></div>;
};

Tabs.defaultProps = {
	layout: "horizontal",
};

export default Tabs;
