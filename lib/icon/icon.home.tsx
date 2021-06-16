import React from "react";
import Icon from "./icon";

const IconHome: React.FunctionComponent = () => {
	return (
		<div>
			<h1>Icon</h1>
			<div className="example-container">
				<Icon name="wechat" />
				<Icon name='disable'/>
			</div>
			<div className="description">
			description
			</div>
		</div>
	);
};

export default IconHome;
