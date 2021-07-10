import React, { ReactNode } from "react";
import classes from "../helpers/classes";
import "./tabs-pane.scss";

interface Props {
	className?: string;
	style?: React.CSSProperties;
	content?: string | ReactNode;
}

const TabsPane: React.FunctionComponent<Props> = (props) => {
	const { className, ...rest } = props;
	return <div className={classes("x-tabs-pane", className)} {...rest}></div>;
};

export default TabsPane;