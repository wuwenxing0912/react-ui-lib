import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Icon from "./lib/icon/icon";
import Button from "./lib/button.home";
import Dialog from "./lib/dialog/dialog.home";
import LayoutExample from "./lib/layout/layout.example";
import { Aside, Content, Footer, Header, Layout } from "./lib/layout/layout";
import "./home.scss";

ReactDOM.render(
	<Router>
		<Layout className="home">
			<Header className="home-header">
				<div className="logo">
					<Icon name="home"></Icon>
					<span className="text">X-UI</span>
				</div>
				<div className="gh">
				<a href="https://github.com/wuwenxing0912/react-ui-lib" target='blank'>
					<Icon name='github' className='gh-icon'></Icon>
				</a>
				</div>
			</Header>
			<Layout>
				<Aside style={{ border: "1px solid blue" }}>
					<h2>组件</h2>
					<ul>
						<li>
							<Link to="/icon">Icon</Link>
						</li>
						<li>
							<Link to="/button">Button</Link>
						</li>
						<li>
							<Link to="/dialog">Dialog</Link>
						</li>
						<li>
							<Link to="/layout">Layout</Link>
						</li>
					</ul>
				</Aside>
				<Content>
					<Route path="/icon" component={Icon}></Route>
					<Route path="/button" component={Button}></Route>
					<Route path="/dialog" component={Dialog}></Route>
					<Route path="/layout" component={LayoutExample}></Route>
				</Content>
			</Layout>
			<Footer style={{ border: "1px solid black" }}>Footer</Footer>
		</Layout>
	</Router>,
	document.querySelector("#root")
);
