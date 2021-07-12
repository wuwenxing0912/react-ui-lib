import React, { Fragment, useState } from "react";
import Modal from "./modal";
import Icon from "../icon/icon";
import Button from "../button/button";
import Highlight, { defaultProps } from "prism-react-renderer";

const defaultModal = `import Modal from "./modal";
const [modalVisible, setModalVisible] = useState(false);
<Modal
  visible={modalVisible}
  onClose={() => setModalVisible(!modalVisible)}
  onConfirm={() => setModalVisible(!modalVisible)}
></Modal>`;

const ModalHome: React.FunctionComponent = () => {
	return (
		<Fragment>
			{createSection("组件和代码示例", defaultModal, "对话框的基本用法。")}
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
							<td className="api-style">visible</td>
							<td className="api-style-description">Modal 是否可见</td>
							<td className="api-type">boolean</td>
							<td className="api-nesscery">否</td>
							<td className="api-default">---</td>
						</tr>
						<tr>
							<td className="api-style">onClose</td>
							<td className="api-style-description">关闭 Modal 回调函数</td>
							<td className="api-type">React.MouseEventHandler</td>
							<td className="api-nesscery">否</td>
							<td className="api-default">---</td>
						</tr>
						<tr>
							<td className="api-style">onConfirm</td>
							<td className="api-style-description">确定 Modal 回调函数</td>
							<td className="api-type">React.MouseEventHandler</td>
							<td className="api-nesscery">否</td>
							<td className="api-default">---</td>
						</tr>
						<tr>
							<td className="api-style">onClickMaskClose</td>
							<td className="api-style-description">
								是否点击遮罩层关闭 Modal
							</td>
							<td className="api-type">boolean</td>
							<td className="api-nesscery">是</td>
							<td className="api-default">false</td>
						</tr>
						<tr>
							<td className="api-classname">title</td>
							<td className="api-classname-description">Modal 标题</td>
							<td className="api-type">string | ReactNode</td>
							<td className="api-nesscery">是</td>
							<td className="api-default">"对话框"</td>
						</tr>
						<tr>
							<td className="api-classname">content</td>
							<td className="api-classname-description">Modal 内容</td>
							<td className="api-type">string | ReactNode</td>
							<td className="api-nesscery">是</td>
							<td className="api-default">---</td>
						</tr>
						<tr>
							<td className="api-classname">cancel</td>
							<td className="api-classname-description">Modal 取消按钮 内容</td>
							<td className="api-type">string</td>
							<td className="api-nesscery">是</td>
							<td className="api-default">取消</td>
						</tr>
						<tr>
							<td className="api-classname">className</td>
							<td className="api-classname-description">自定义 Modal 类名</td>
							<td className="api-type">string</td>
							<td className="api-nesscery">是</td>
							<td className="api-default">---</td>
						</tr>
						<tr>
							<td className="api-style">style</td>
							<td className="api-style-description">
								自定义 Modal外层容器 样式
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
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<Fragment>
			<section>
				{h1 ? <h1>{h1}</h1> : ""}
				<div className="example-container">
					<Button type="primary" onClick={() => setModalVisible(!modalVisible)}>
						open Modal
					</Button>
					<Modal
						visible={modalVisible}
						onClose={() => setModalVisible(!modalVisible)}
						onConfirm={() => setModalVisible(!modalVisible)}
						content={
							<div>
								<div>more content...</div>
								<div>more content...</div>
								<div>more content...</div>
							</div>
						}
					></Modal>
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

export default ModalHome;
