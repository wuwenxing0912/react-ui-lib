import React from "react";
import { componentClassMaker } from "../helpers/classes";

const cc = componentClassMaker("x-layout");

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Footer: React.FunctionComponent<Props> = (props) => {
	const { className, ...rest } = props;
	return (
		<div className={cc("footer", { extra: className })} {...rest}>
			Footer
		</div>
	);
};

export default Footer;
