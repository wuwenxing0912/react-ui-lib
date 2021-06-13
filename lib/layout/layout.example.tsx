import React from "react";
import Content from "./content";
import Footer from "./footer";
import Header from "./header";
import Layout from "./layout";
import Aside from "./aside";
import "./layout.example.scss";

export default function () {
	return (
		<div>
			<div>
				<h1>第一个例子</h1>
				<Layout style={{ height: 300 }} className="first">
					<Header className="example-h">Header</Header>
					<Content className="example-c">Content</Content>
					<Footer className="example-f">Footer</Footer>
				</Layout>
			</div>

			<div>
				<h1>第二个例子</h1>
				<Layout style={{ height: 300 }} className="first">
					<Header className="example-h">Header</Header>
					<Layout>
						<Aside className="example-a">Aside</Aside>
						<Content className="example-c">Content</Content>
					</Layout>
					<Footer className="example-f">Footer</Footer>
				</Layout>
			</div>

			<div>
				<h1>第三个例子</h1>
				<Layout style={{ height: 300 }} className="first">
					<Header className="example-h">Header</Header>
					<Layout>
						<Content className="example-c">Content</Content>
						<Aside className="example-a">Aside</Aside>
					</Layout>
					<Footer className="example-f">Footer</Footer>
				</Layout>
			</div>

			<div>
				<h1>第四个例子</h1>
				<Layout style={{ height: 300 }} className="first">
					<Aside className="example-a">Aside</Aside>
					<Layout>
						<Header className="example-h">Header</Header>
						<Content className="example-c">Content</Content>
						<Footer className="example-f">Footer</Footer>
					</Layout>
				</Layout>
			</div>
		</div>
	);
}
