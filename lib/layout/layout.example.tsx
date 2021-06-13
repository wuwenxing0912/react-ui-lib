import React from "react";
import Content from "./content";
import Footer from "./footer";
import Header from "./header";
import Layout from "./layout";
import Aside from "./aside";

export default function () {
	return (
		<div>
			<div>
				<h1>第一个例子</h1>
				<Layout style={{ height: 200 }} className="first">
					<Header></Header>
					<Content></Content>
					<Footer></Footer>
				</Layout>
			</div>

			<div>
				<h1>第二个例子</h1>
				<Layout style={{ height: 200 }} className="first">
					<Header></Header>
					<Layout>
						<Aside></Aside>
						<Content></Content>
					</Layout>
					<Footer></Footer>
				</Layout>
			</div>

			<div>
				<h1>第三个例子</h1>
				<Layout style={{ height: 200 }} className="first">
					<Header></Header>
					<Layout>
						<Content></Content>
						<Aside></Aside>
					</Layout>
					<Footer></Footer>
				</Layout>
			</div>

			<div>
				<h1>第四个例子</h1>
				<Layout style={{ height: 200 }} className="first">
					<Aside></Aside>
					<Layout>
						<Header></Header>
						<Content></Content>
						<Footer></Footer>
					</Layout>
				</Layout>
			</div>
		</div>
	);
}
