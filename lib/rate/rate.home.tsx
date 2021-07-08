import React, { Fragment, useState } from "react";
import Rate from "./rate";
import Icon from "../icon/icon";
import Highlight, { defaultProps } from "prism-react-renderer";

const defaultRate = `<Rate defaultValue={1}></Rate>`;
const countRate = `<Rate count={8} defaultValue={1}></Rate>`;

const RateHome: React.FunctionComponent = () => {
	return (
		<Fragment>
			{createSection("组件和代码示例", false, defaultRate, "基本用法。", {
				defaultValue: 1,
			})}
			{createSection("", false, countRate, "自定义 star 个数。", {
				defaultValue: 3,
				count: 8,
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
							<td className="api-button-type">count</td>
							<td className="api-type-description">star 评分个数</td>
							<td className="api-type">number</td>
							<td className="api-nesscery">是</td>
							<td className="api-default">5</td>
						</tr>
						<tr>
							<td className="api-button-type">defaultValue</td>
							<td className="api-type-description">默认值</td>
							<td className="api-type">number</td>
							<td className="api-nesscery">是</td>
							<td className="api-default">---</td>
						</tr>
						<tr>
							<td className="api-button-type">value</td>
							<td className="api-type-description">当前值</td>
							<td className="api-type">number</td>
							<td className="api-nesscery">是</td>
							<td className="api-default">---</td>
						</tr>
						<tr>
							<td className="api-classname">className</td>
							<td className="api-classname-description">自定义 Rate 类名</td>
							<td className="api-type">string</td>
							<td className="api-nesscery">是</td>
							<td className="api-default">---</td>
						</tr>
						<tr>
							<td className="api-style">style</td>
							<td className="api-style-description">
								自定义 Rate外层容器 样式
							</td>
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
	options?: { [key: string]: any }
) => {
	const [visible, setVisble] = useState(false);
	const [showCode, setshowCode] = useState(false);
	const { defaultValue, count, ...rest } = options || {};
	return (
		<Fragment>
			<section>
				{h1 ? <h1>{h1}</h1> : ""}
				<div className="example-container">
					<Rate
						className="default"
						count={count}
						defaultValue={defaultValue}
						{...rest}
					></Rate>
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

export default RateHome;
