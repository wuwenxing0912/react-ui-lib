import React, { Fragment, useState } from "react";
import Switch from "./switch";
import Icon from "../icon/icon";
import createHighlightCode from "../helpers/code-highlight";

const defaultSwitch = `<Switch></Switch>`;
const defaultCheckedSwitch = `<Switch defaultChecked={true}></Switch>`;
const disabledCheckedSwitch = `<Switch disabled={true}></Switch>
<Switch defaultChecked={true} disabled={true}></Switch>`;

const switchHome: React.FunctionComponent = () => {
	return (
		<Fragment>
			{createSection("组件和代码示例", defaultSwitch, "开关的基本用法")}
			{createSection("", defaultCheckedSwitch, "开关默认选中", {
				homeChecked: true,
				className: "hi",
			})}
			{createSectionOfDouble("", disabledCheckedSwitch, "禁用状态", {
				homeChecked: true,
				disabled: true,
			})}
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
						<tr>
							<td className="api-style">defaultChecked</td>
							<td className="api-style-description">开关默认选中状态</td>
							<td className="api-type">boolean</td>
							<td className="api-nesscery">是</td>
							<td className="api-default">---</td>
						</tr>
						<tr>
							<td className="api-classname">className</td>
							<td className="api-classname-description">自定义 Switch 类名</td>
							<td className="api-type">string</td>
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
	const { homeChecked, ...rest } = options || {};
	const [checked, setChecked] = useState(homeChecked || false);
	return (
		<section>
			{h1 ? <h1>{h1}</h1> : ""}
			<div className="example-container">
				<Switch
					checked={checked}
					onChecked={() => setChecked(!checked)}
					{...rest}
				></Switch>
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

const createSectionOfDouble = (
	h1?: string,
	code?: string,
	description?: string,
	options?: { [k: string]: any }
) => {
	const [visible, setVisble] = useState(false);
	const [showCode, setshowCode] = useState(false);
	const { homeChecked, disabled, ...rest } = options || {};
	return (
		<section>
			{h1 ? <h1>{h1}</h1> : ""}
			<div className="example-container">
				<Switch
					checked={!homeChecked}
					disabled={disabled}
					style={{ marginRight: "20px" }}
					{...rest}
				></Switch>
				<Switch checked={homeChecked} disabled={disabled} {...rest}></Switch>
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

export default switchHome;
