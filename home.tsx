import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
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
					<a href="https://github.com/wuwenxing0912/react-ui-lib" target="blank" >
						<Icon name="github" className="gh-icon"></Icon>
					</a>
				</div>
			</Header>
			<Layout>
				<Aside className="home-aside">
					<h2>组件</h2>
					<ul>
						<li>
							<NavLink to="/icon">Icon</NavLink>
						</li>
						<li>
							<NavLink to="/button">Button</NavLink>
						</li>
						<li>
							<NavLink to="/dialog">Dialog</NavLink>
						</li>
						<li>
							<NavLink to="/layout">Layout</NavLink>
						</li>
					</ul>
				</Aside>
				<Content className='home-content'>
					<Route path="/icon" component={Icon}></Route>
					<Route path="/button" component={Button}></Route>
					<Route path="/dialog" component={Dialog}></Route>
					<Route path="/layout" component={LayoutExample}></Route>
				</Content>
			</Layout>
			<Footer className="home-footer">
				<span>&copy; xing</span>
				<span className="text">X-UI</span>
			</Footer>
		</Layout>
	</Router>,
	document.querySelector("#root")
);
