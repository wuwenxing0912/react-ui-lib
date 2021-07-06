import React, { Fragment, useState } from "react";
import Scroll from "./scroll";
import Icon from "../icon/icon";
import Highlight, { defaultProps } from "prism-react-renderer";

const defaultScroll = `<Scroll></Scroll>`;

const switchHome: React.FunctionComponent = () => {
	return (
		<Fragment>
			<Scroll
				style={{ width: "100%", height: "400px", border: "1px solid red" }}
			>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
				<p>content</p>
			</Scroll>
			{createSection("组件和代码示例", defaultScroll, "滚动条的基本用法")}
			{/* {createSection("", defaultCheckedSwitch, "开关默认选中", {
				defaultChecked: true,
				className: "hi",
			})}
			{createSectionOfDouble("", disabledCheckedSwitch, "禁用状态", {
				defaultChecked: true,
				disabled: true,
			})} */}
			<section>
				<h1>API</h1>
				<table className="api-table" cellSpacing="0" cellPadding="0">
					<thead>
						<tr>
							<th className="api-table-head">API</th>
							<th className="api-table-head">说明</th>
							<th className="api-table-head">类型</th>
							<th className="api-table-head">是否可选</th>
							<th className="api-table-head">默认值</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="api-style">style</td>
							<td className="api-style-description">自定义样式</td>
							<td className="api-type">React.CSSProperties</td>
							<td className="api-nesscery">是</td>
							<td className="api-default">---</td>
						</tr>
					</tbody>
				</table>
			</section>
		</Fragment>
	);
};

const createSection = (
	h1?: string,
	code?: string,
	description?: string,
	options?: { [k: string]: any }
) => {
	const [visible, setVisble] = useState(false);
	const [showCode, setshowCode] = useState(false);
	const { defaultChecked, ...rest } = options || {};
	return (
		<section>
			{h1 ? <h1>{h1}</h1> : ""}
			<div className="example-container">
				<Scroll
					style={{ width: "100%", height: "400px", border: "1px solid red" }}
					{...rest}
				>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
					<p>content</p>
				</Scroll>
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

export default switchHome;
