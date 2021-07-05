import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, NavLink, Redirect } from "react-router-dom";
import Icon from "./lib/icon/icon";
import Button from "./lib/button/button.home";
import Dialog from "./lib/dialog/dialog.home";
import LayoutExample from "./lib/layout/layout.example";
import { Aside, Content, Footer, Header, Layout } from "./lib/layout/layout";
import Input from "./lib/input/input.home";
import Form from "./lib/form/form.home";
import Switch from "./lib/switch/switch.home";
import Scroll from "./lib/scroll/scroll.home";
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
					<a
						href="https://github.com/wuwenxing0912/react-ui-lib"
						target="blank"
					>
						<Icon name="github" className="gh-icon"></Icon>
					</a>
				</div>
			</Header>
			<Layout>
				<Aside className="home-aside">
					<h2>组件</h2>
					<ul>
						<li>
							<NavLink to="/button">Button 按钮</NavLink>
						</li>
						<li>
							<NavLink to="/input">Input 输入框</NavLink>
						</li>
						<li>
							<NavLink to="/switch">Switch 开关</NavLink>
						</li>
						<li>
							<NavLink to="/scroll">Scroll 滚动条</NavLink>
						</li>
						<li>
							<NavLink to="/form">Form 表单</NavLink>
						</li>
						<li>
							<NavLink to="/dialog">Dialog 弹窗</NavLink>
						</li>
						<li>
							<NavLink to="/layout">Layout 布局</NavLink>
						</li>
					</ul>
				</Aside>
				<Content className="home-content">
					<Route path="/button" component={Button}></Route>
					<Route path="/input" component={Input}></Route>
					<Route path="/switch" component={Switch}></Route>
					<Route path="/scroll" component={Scroll}></Route>
					<Route path="/form" component={Form}></Route>
					<Route path="/dialog" component={Dialog}></Route>
					<Route path="/layout" component={LayoutExample}></Route>
					<Route exact path="/"><Redirect to="/button" /></Route>
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
