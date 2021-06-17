import React, { Fragment, useState } from "react";
import Button from "./button";
import Icon from "../icon/icon";
import Highlight, { defaultProps } from "prism-react-renderer";

const buttonType = `<Button type="default">Default</Button>
<Button type="primary">Primary</Button>
<Button type="dashed">Dashed</Button>
<Button type="danger">Danger</Button>`;

const ButtonHome: React.FunctionComponent = () => {
	return (
		<Fragment>
			{createSection()}
			{createSection()}
		</Fragment>
	);
};

const createSection = () => {
	const [visible, setVisble] = useState(false);
	const [showCode, setshowCode] = useState(false);
	return (
		<Fragment>
			<section>
				<h1>button</h1>
				<div className="example-container">
					<Button
						type="default"
						className="default"
						style={{ marginRight: 20 }}
					>
						Default
					</Button>
					<Button type="primary" style={{ marginRight: 20 }}>
						Primary
					</Button>
					<Button type="dashed" style={{ marginRight: 20 }}>
						Dashed
					</Button>
					<Button type="danger" style={{ marginRight: 20 }}>
						Danger
					</Button>
				</div>
				<div className="description">
					<span className="text">
						按钮有四种类型：默认按钮、主题按钮、虚线按钮以及危险按钮。
					</span>
					<span
						className="code-icon"
						style={{ display: "inline-flex", cursor: "pointer" }}
						onClick={() => {
							setVisble(!visible);
						}}
						onMouseEnter={() => {
							setshowCode(!showCode);
						}}
						onMouseLeave={() => {
							setshowCode(!showCode);
						}}
					>
						<Icon name="code" style={{ height: 19 }}></Icon>
					</span>
					<span
						className="pop-content"
						style={{ display: showCode ? "inline-block" : "none" }}
					>
						{visible ? "收起代码" : "显示代码"}
					</span>
				</div>
				<div
					className="code-area"
					style={{ display: visible ? "block" : "none" }}
				>
					{createHighlightCode(buttonType)}
				</div>
			</section>
		</Fragment>
	);
};

const createHighlightCode = (code: string) => {
	return (
		<Highlight {...defaultProps} code={code} language="jsx">
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<pre className={className} style={style}>
					{tokens.map((line, i) => (
						<div {...getLineProps({ line, key: i })}>
							{line.map((token, key) => (
								<span {...getTokenProps({ token, key })} />
							))}
						</div>
					))}
				</pre>
			)}
		</Highlight>
	);
};

export default ButtonHome;
