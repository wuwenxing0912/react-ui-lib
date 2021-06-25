import React, { Fragment, useState } from "react";
import Input from "./input";
import Icon from "../icon/icon";
import Highlight, { defaultProps } from "prism-react-renderer";

const defaultInput = `<Input placeholder="placeholder"></Input>`;
const disabledInput = `<Input disabled={true}></Input>`;
const fixInput = `<Input prefix="modify", suffix="modify"></Input>`;

const inputHome: React.FunctionComponent = () => {
  return (
    <Fragment>
      {createSection("组件和代码示例", defaultInput, "输入框的基本用法", {placeholder: "placeholder"})}
      {createSection("", disabledInput, "输入框禁用状态", {placeholder: "disabled", disabled: true})}
      {createSection("", fixInput, "带有前/后缀图标的输入框", {prefix: "modify", suffix: "modify"})}
    </Fragment>
  )
};

const createSection = (h1?: string, code?: string, description?: string, options?: {[k: string]: any}) => {
	const [visible, setVisble] = useState(false);
	const [showCode, setshowCode] = useState(false);
	return (
		<section>
			{h1 ? <h1>{h1}</h1> : ""}
			<div className="example-container">
				<Input {...options}></Input>
			</div>
			<div className="description">
				<span className="text">{description}</span>
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
				{createHighlightCode(code as string)}
			</div>
		</section>
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

export default inputHome;