import React, { Fragment, useState } from "react";
import Form, { FormValue } from "./form";
import Button from "../button/button";
import Validator from "./validator";
import Icon from "../icon/icon";
import Highlight, { defaultProps } from "prism-react-renderer";

const formNormal = `import React, { Fragment, useState } from "react";
import Form, { FormValue } from "./form";
import Validator from "./validator";

const [formData, setFormData] = useState<FormValue>({
	username: "",
	password: "",
});

const [fields] = useState([
	{ name: "username", lable: "用户名", input: { type: "text" } },
	{ name: "password", lable: "密码", input: { type: "password" } },
]);

const [errors, setErrors] = useState({});

const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  const rules = [
	 { key: "username", required: true },
	 { key: "password", required: true },
  ];
  const errors = Validator(formData, rules);
  setErrors(errors);
};

<Form value={formData} fields={fields} errors={errors} onSubmit={onSubmit} 
      onChange={(newValue) => setFormData(newValue)}
      buttons={
      <Fragment>
        <Button type="primary" buttonType="submit">提交</Button>
        <Button>取消</Button>
      </Fragment>
}>
</Form>`;

const formLayout = `import React, { Fragment, useState } from "react";
import Form, { FormValue } from "./form";
import Validator from "./validator";

const [formData, setFormData] = useState<FormValue>({
	username: "",
	password: "",
});

const [fields] = useState([
	{ name: "username", lable: "用户名", input: { type: "text" } },
	{ name: "password", lable: "密码", input: { type: "password" } },
]);

const [errors, setErrors] = useState({});

const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  const rules = [
	 { key: "username", required: true },
	 { key: "password", required: true },
  ];
  const errors = Validator(formData, rules);
  setErrors(errors);
};

<Form layout="horizontal" value={formData} fields={fields} errors={errors}
      onSubmit={onSubmit} 
      onChange={(newValue) => setFormData(newValue)}
      buttons={
      <Fragment>
        <Button type="primary" buttonType="submit">提交</Button>
        <Button>取消</Button>
      </Fragment>
}>
</Form>`;

const FromHome: React.FunctionComponent = () => {
	const [visible, setVisble] = useState(false);
	const [showCode, setshowCode] = useState(false);
	const [formData, setFormData] = useState<FormValue>({
		username: "",
		password: "",
	});
	const [fields] = useState([
		{ name: "username", lable: "用户名", input: { type: "text" } },
		{ name: "password", lable: "密码", input: { type: "password" } },
	]);
	const [errors, setErrors] = useState({});
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		console.log(formData);
		const rules = [
			{ key: "username", required: true },
			{ key: "password", required: true },
		];
		const errors = Validator(formData, rules);
		setErrors(errors);
		console.log(errors);
	};
	const [changeLayout, setChangeLayout] = useState('horizontal');
	return (
		<Fragment>
			{createSection("组件和代码示例", formNormal, "基本表单")}
			<section>
			<div className="example-container" style={{position:"relative", paddingTop: '80px'}}>
				<div style={{position: "absolute", top: "16px"}}>
					<Button type="primary" style={{ lineHeight: "22px", marginRight: "12px" }} onClick={()=>{setChangeLayout("horizontal");setErrors({});} }>Horizontal</Button>
					<Button type="primary" style={{ lineHeight: "22px", marginRight: "12px" }} onClick={()=>{setChangeLayout("vertical");setErrors({});}}>Vertical</Button>
					<Button type="primary" style={{ lineHeight: "22px"}} onClick={()=>{setChangeLayout("inline");setErrors({});}}>Inline</Button>
				</div>
				<Form
				  layout = {changeLayout as ("horizontal" | "vertical" | "inline")}
					value={formData}
					fields={fields}
					buttons={
						<Fragment>
							<Button
								type="primary"
								buttonType="submit"
								style={{ lineHeight: "22px", marginRight: "20px" }}
							>
								提交
							</Button>
							<Button style={{ lineHeight: "22px" }}>取消</Button>
						</Fragment>
					}
					errors={errors}
					onChange={(newValue) => setFormData(newValue)}
					onSubmit={onSubmit}
				></Form>
			</div>
			<div className="description">
				<span className="text">表单有三种布局：基本表单、垂直表单和内联表单。</span>
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
				{createHighlightCode(formLayout)}
			</div>
		</section>
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
							<td className="api-button-type">layout</td>
							<td className="api-type-description">设置form的布局</td>
							<td className="api-type">
							"horizontal" | "vertical" | "inline"
							</td>
							<td className="api-nesscery">是</td>
							<td className="api-default">horizontal</td>
						</tr>
						<tr>
							<td className="api-classname">value</td>
							<td className="api-classname-description">表单初始化数据</td>
							<td className="api-type"><p>{"{[Key: string]: any}"}</p></td>
							<td className="api-nesscery">否</td>
							<td className="api-default">---</td>
						</tr>
						<tr>
							<td className="api-style">fields</td>
							<td className="api-style-description">表单数据域</td>
							<td className="api-type"><p>{"Array<{ name: string; lable: string; input: { type: string } }>"}</p></td>
							<td className="api-nesscery">否</td>
							<td className="api-default">---</td>
						</tr>
						<tr>
							<td className="api-style">buttons</td>
							<td className="api-style-description">表单按钮</td>
							<td className="api-type">ReactFragment</td>
							<td className="api-nesscery">否</td>
							<td className="api-default">---</td>
						</tr>
						<tr>
							<td className="api-style">onSubmit</td>
							<td className="api-style-description">提交表单的回调函数</td>
							<td className="api-type"><p>{"React.FormEventHandler<HTMLFormElement>"}</p></td>
							<td className="api-nesscery">否</td>
							<td className="api-default">---</td>
						</tr>
						<tr>
							<td className="api-style">onChange</td>
							<td className="api-style-description">修改表单数据的回调函数</td>
							<td className="api-type"><p>{"(value: FormValue) => void"}</p></td>
							<td className="api-nesscery">否</td>
							<td className="api-default">---</td>
						</tr>
						<tr>
							<td className="api-style">errors</td>
							<td className="api-style-description">校验表单数据的错误提示</td>
							<td className="api-type"><p>{"{ [K: string]: string[] }"}</p></td>
							<td className="api-nesscery">否</td>
							<td className="api-default">---</td>
						</tr>
					</tbody>
				</table>
			</section>
		</Fragment>
	);
};

const createSection = (h1?: string, code?: string, description?: string) => {
	const [visible, setVisble] = useState(false);
	const [showCode, setshowCode] = useState(false);
	const [formData, setFormData] = useState<FormValue>({
		username: "",
		password: "",
	});
	const [fields] = useState([
		{ name: "username", lable: "用户名", input: { type: "text" } },
		{ name: "password", lable: "密码", input: { type: "password" } },
	]);
	const [errors, setErrors] = useState({});
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		console.log(formData);
		const rules = [
			{ key: "username", required: true },
			{ key: "password", required: true },
		];
		const errors = Validator(formData, rules);
		setErrors(errors);
		console.log(errors);
	};
	return (
		<section>
			{h1 ? <h1>{h1}</h1> : ""}
			<div className="example-container">
				<Form
					value={formData}
					fields={fields}
					buttons={
						<Fragment>
							<Button
								type="primary"
								buttonType="submit"
								style={{ lineHeight: "22px", marginRight: "20px" }}
							>
								提交
							</Button>
							<Button style={{ lineHeight: "22px" }}>取消</Button>
						</Fragment>
					}
					errors={errors}
					onChange={(newValue) => setFormData(newValue)}
					onSubmit={onSubmit}
				></Form>
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

export default FromHome;
