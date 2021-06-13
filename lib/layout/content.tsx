import React from "react";
import { componentClassMaker } from "../helpers/classes";

const cc = componentClassMaker("x-layout");

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Content: React.FunctionComponent<Props> = (props) => {
	const { className, ...rest } = props;
	return (
		<div className={cc("content", { extra: className })} {...rest}>
			Content
		</div>
	);
};

export default Content;
