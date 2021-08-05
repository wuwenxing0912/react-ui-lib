import React, { Fragment, ReactNode, useState } from "react";
import Layout, { Content, Header, Footer, Aside } from "./layout";
import Icon from "../icon/icon";
import createHighlightCode from "../helpers/code-highlight";
import "./layout.home.scss";

const firstLayout = (
	<Layout className="layout-home">
		<Header className="layout-home-header">Header</Header>
		<Content className="layout-home-content">Content</Content>
		<Footer className="layout-home-footer">Footer</Footer>
	</Layout>
);

const secondLayout = (
	<Layout className="layout-home">
		<Header className="layout-home-header">Header</Header>
		<Layout className="layout-home-flex-direction">
			<Aside className="layout-home-aside aside-inner">Aside</Aside>
			<Content className="layout-home-content">Content</Content>
		</Layout>
		<Footer className="layout-home-footer">Footer</Footer>
	</Layout>
);

const thirdLayout = (
	<Layout className="layout-home">
		<Header className="layout-home-header">Header</Header>
		<Layout className="layout-home-flex-direction">
			<Content className="layout-home-content">Content</Content>
			<Aside className="layout-home-aside  aside-inner">Aside</Aside>
		</Layout>
		<Footer className="layout-home-footer">Footer</Footer>
	</Layout>
);

const fourthLayout = (
	<Layout className="layout-home layout-home-flex-direction">
		<Aside className="layout-home-aside  aside-outer">Aside</Aside>
		<Layout>
			<Header className="layout-home-header">Header</Header>
			<Content className="layout-home-content">Content</Content>
			<Footer className="layout-home-footer">Footer</Footer>
		</Layout>
	</Layout>
);

const defaultLayout = `import Layout, { Content, Header, Footer, Aside } from "./layout";
<Layout>
  <Header>Header</Header>
  <Content>Content</Content>
  <Footer>Footer</Footer>
</Layout>`;

const asideLeftInLayout = `import Layout, { Content, Header, Footer, Aside } from "./layout";
<Layout>
  <Header>Header</Header>
  <Layout>
    <Aside>Aside</Aside>
    <Content>Content</Content>
  </Layout>
  <Footer>Footer</Footer>
</Layout>`;
const asideRightInLayout = `import Layout, { Content, Header, Footer, Aside } from "./layout";
<Layout>
  <Header>Header</Header>
  <Layout>
    <Content>Content</Content>
    <Aside>Aside</Aside>
  </Layout>
  <Footer>Footer</Footer>
</Layout>`;

const asideOutLayout = `import Layout, { Content, Header, Footer, Aside } from "./layout";
<Layout>
  <Aside>Aside</Aside>
  <Layout>
    <Header>Header</Header>
    <Content>Content</Content>
    <Footer>Footer</Footer>
  </Layout>
</Layout>`;

const LayoutHome: React.FunctionComponent = () => {
	return (
		<Fragment>
			{createSection(
				"组件和代码示例",
				firstLayout,
				defaultLayout,
				"Layout 基本用法。Content、Header、Footer 和 Aside 需放在 Layout 里，Layout 也可放入 Layout 里。"
			)}
			{createSection(
				"",
				secondLayout,
				asideLeftInLayout,
				"Aside 侧边栏在左侧。"
			)}
			{createSection(
				"",
				thirdLayout,
				asideRightInLayout,
				"Aside 侧边栏在右侧。"
			)}
			{createSection(
				"",
				fourthLayout,
				asideOutLayout,
				"Aside 侧边栏在外层左侧。"
			)}
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
							<td className="api-classname">className</td>
							<td className="api-classname-description">自定义 Layout 类名</td>
							<td className="api-type">string</td>
							<td className="api-nesscery">是</td>
							<td className="api-default">---</td>
						</tr>
						<tr>
							<td className="api-style">style</td>
							<td className="api-style-description">
								自定义 Layout外层容器 样式
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
	layout?: ReactNode,
	code?: string,
	description?: string,
	options?: { [key: string]: any }
) => {
	const [visible, setVisble] = useState(false);
	const [showCode, setshowCode] = useState(false);
	return (
		<Fragment>
			<section>
				{h1 ? <h1>{h1}</h1> : ""}
				<div className="example-container">{layout}</div>
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

export default LayoutHome;
