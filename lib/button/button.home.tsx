import React, { Fragment, useState } from "react";
import Button from "./button";
import Icon from "../icon/icon";
import Highlight, { defaultProps } from "prism-react-renderer";

const buttonType = `<Button type="default">Default</Button>
<Button type="primary">Primary</Button>
<Button type="dashed">Dashed</Button>
<Button type="danger">Danger</Button>`;

const buttonDisabled = `<Button type="default" disabled={true}>Default</Button>
<Button type="primary" disabled={true}>Primary</Button>
<Button type="dashed" disabled={true}>Dashed</Button>
<Button type="danger" disabled={true}>Danger</Button>`;

const buttonIcon = `<Button type="default" icon="modify">Default</Button>
<Button type="primary" icon="modify">Primary</Button>
<Button type="dashed" icon="modify">Dashed</Button>
<Button type="danger" icon="modify">Danger</Button>`;

const ButtonHome: React.FunctionComponent = () => {
	const section1 = "按钮有四种类型：默认按钮、主题按钮、虚线按钮以及危险按钮。";
	const section2 = "按钮禁用：设置按钮 disabled 禁用状态。";
	const section3 = "图标按钮：设置 icon 属性。";
	return (
		<Fragment>
			{createSection("组件和代码演示", false, buttonType, section1)}
			{createSection("", true, buttonDisabled, section2)}
			{createSection("", false, buttonIcon, section3, [
				"setting",
				"modify",
				"sign-out",
				"warn",
			])}
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
							<td className="api-button-type">type</td>
							<td className="api-type-description">button类型</td>
							<td className="api-type">
								'default' | 'primary' | 'dashed' | 'danger'
							</td>
							<td className="api-nesscery">是</td>
							<td className="api-default">default</td>
						</tr>
						<tr>
							<td className="api-classname">className</td>
							<td className="api-classname-description">自定义类名</td>
							<td className="api-type">string</td>
							<td className="api-nesscery">是</td>
							<td className="api-default">---</td>
						</tr>
						<tr>
							<td className="api-style">style</td>
							<td className="api-style-description">自定义样式</td>
							<td className="api-type">React.CSSProperties</td>
							<td className="api-nesscery">是</td>
							<td className="api-default">---</td>
						</tr>
						<tr>
							<td className="api-style">disabled</td>
							<td className="api-style-description">按钮禁用状态</td>
							<td className="api-type">boolean</td>
							<td className="api-nesscery">是</td>
							<td className="api-default">false</td>
						</tr>
						<tr>
							<td className="api-style">icon</td>
							<td className="api-style-description">自定义按钮图标</td>
							<td className="api-type">string</td>
							<td className="api-nesscery">是</td>
							<td className="api-default">---</td>
						</tr>
						<tr>
							<td className="api-style">onClick</td>
							<td className="api-style-description">点击按钮时的回调</td>
							<td className="api-type">React.MouseEventHandler</td>
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
	disabled?: boolean,
	code?: string,
	description?: string,
	icon?: (string | undefined)[]
) => {
	const [visible, setVisble] = useState(false);
	const [showCode, setshowCode] = useState(false);
	const f = (e: React.MouseEvent) => {
		console.log(e.type);
	};
	return (
		<Fragment>
			<section>
				{h1 ? <h1>{h1}</h1> : ""}
				<div className="example-container">
					<Button
						className="default"
						style={{ marginRight: 20 }}
						disabled={disabled}
						icon={icon && icon[1]}
						onClick={f}
					>
						Default
					</Button>
					<Button
						type="primary"
						style={{ marginRight: 20 }}
						disabled={disabled}
						icon={icon && icon[1]}
						onClick={f}
					>
						Primary
					</Button>
					<Button
						type="dashed"
						style={{ marginRight: 20 }}
						disabled={disabled}
						icon={icon && icon[1]}
						onClick={f}
					>
						Dashed
					</Button>
					<Button
						type="danger"
						style={{ marginRight: 20 }}
						disabled={disabled}
						icon={icon && icon[1]}
						onClick={f}
					>
						Danger
					</Button>
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
