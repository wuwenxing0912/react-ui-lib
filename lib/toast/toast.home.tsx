import React, { Fragment, useState } from "react";
import { information, success, warning, error } from "./toast";
import Icon from "../icon/icon";
import Button from "../button/button";
import createHighlightCode from "../helpers/code-highlight";

const defaultToast = `import { information, success, warning, error } from "./toast";
const options = { content: "There is some information here!" }
<Button onClick={() => information(options)}>Information</Button>
<Button onClick={() => success(options)}>Success</Button>
<Button onClick={() => warning(options)}>Warning</Button>
<Button onClick={() => error(options)}>Error</Button>`;

const delayToast = `import { information, success, warning, error } from "./toast";
const options = { content: "There is some information here!", delay: 10 }
<Button onClick={() => information(options)}>Information</Button>
<Button onClick={() => success(options)}>Success</Button>
<Button onClick={() => warning(options)}>Warning</Button>
<Button onClick={() => error(options)}>Error</Button>`;

const RateHome: React.FunctionComponent = () => {
	return (
		<Fragment>
			{createSection("组件和代码示例", defaultToast, "信息提示框的基本用法。")}
			{createSection("", delayToast, "自定义信息提示框延时关闭时间。", {
				delay: 10,
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
							<td className="api-button-type">content</td>
							<td className="api-type-description">提示信息</td>
							<td className="api-type">string</td>
							<td className="api-nesscery">是</td>
							<td className="api-default">---</td>
						</tr>
						<tr>
							<td className="api-button-type">delay</td>
							<td className="api-type-description">自动关闭的延时（秒）</td>
							<td className="api-type">number</td>
							<td className="api-nesscery">是</td>
							<td className="api-default">3</td>
						</tr>
						<tr>
							<td className="api-classname">className</td>
							<td className="api-classname-description">自定义 Toast 类名</td>
							<td className="api-type">string</td>
							<td className="api-nesscery">是</td>
							<td className="api-default">---</td>
						</tr>
						<tr>
							<td className="api-style">style</td>
							<td className="api-style-description">
								自定义 Toast外层容器 样式
							</td>
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
	options?: { [key: string]: any }
) => {
	const [visible, setVisble] = useState(false);
	const [showCode, setshowCode] = useState(false);
	const { delay } = options || { delay: 3 };
	return (
		<Fragment>
			<section>
				{h1 ? <h1>{h1}</h1> : ""}
				<div className="example-container">
					<Button
						style={{ marginRight: 20 }}
						onClick={() =>
							information({
								content: "There is some information here!",
								delay: delay,
							})
						}
					>
						Information
					</Button>
					<Button
						style={{ marginRight: 20 }}
						onClick={() =>
							success({
								content: "There is some success here!",
								delay: delay,
							})
						}
					>
						Success
					</Button>
					<Button
						style={{ marginRight: 20 }}
						onClick={() =>
							warning({
								content: "There is some warning here!",
								delay: delay,
							})
						}
					>
						Warning
					</Button>
					<Button
						onClick={() =>
							error({
								content: "There is some error here!",
								delay: delay,
							})
						}
					>
						Error
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

export default RateHome;
