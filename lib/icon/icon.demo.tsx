import React from "react";
import IconHome from "./icon.home";
import Demo from "../../demo";

const IconDemo: React.FunctionComponent = () => {
	return (
		<section>
			<Demo code={require("!!raw-loader!./icon.home.tsx").default}>
				<IconHome />
			</Demo>
		</section>
	);
};

export default IconDemo;
