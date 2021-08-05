import React, { Fragment, useState } from "react";
import Scroll from "./scroll";
import Icon from "../icon/icon";
import createHighlightCode from "../helpers/code-highlight";

const defaultScroll = `<Scroll>
  <p>content 1</p>
  ......
  <p>content 60</p>
</Scroll>`;

const switchHome: React.FunctionComponent = () => {
	return (
		<Fragment>
			{createSection("组件和代码示例", defaultScroll, "滚动条的基本用法")}
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
							<td className="api-style">style</td>
							<td className="api-style-description">
								自定义 Scroll外层容器 样式
							</td>
							<td className="api-type">React.CSSProperties</td>
							<td className="api-nesscery">是</td>
							<td className="api-default">---</td>
						</tr>
						<tr>
							<td className="api-classname">className</td>
							<td className="api-classname-description">自定义 Scroll 类名</td>
							<td className="api-type">string</td>
							<td className="api-nesscery">是</td>
							<td className="api-default">---</td>
						</tr>
						<tr>
							<td className="api-style">trackStyle</td>
							<td className="api-style-description">自定义滚动条轨道样式</td>
							<td className="api-type">React.CSSProperties</td>
							<td className="api-nesscery">是</td>
							<td className="api-default">---</td>
						</tr>
						<tr>
							<td className="api-classname">trackClassName</td>
							<td className="api-classname-description">
								自定义滚动条轨道类名
							</td>
							<td className="api-type">string</td>
							<td className="api-nesscery">是</td>
							<td className="api-default">---</td>
						</tr>
						<tr>
							<td className="api-style">barStyle</td>
							<td className="api-style-description">
								自定义滚动条轨道滑块样式
							</td>
							<td className="api-type">React.CSSProperties</td>
							<td className="api-nesscery">是</td>
							<td className="api-default">---</td>
						</tr>
						<tr>
							<td className="api-classname">barClassName</td>
							<td className="api-classname-description">
								自定义滚动条轨道滑块类名
							</td>
							<td className="api-type">string</td>
							<td className="api-nesscery">是</td>
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
	return (
		<section>
			{h1 ? <h1>{h1}</h1> : ""}
			<div className="example-container">
				<Scroll
					style={{
						width: "100%",
						height: "400px",
						borderRadius: "3px",
						border: "1px solid rgba(0, 0, 0, 0.2)",
					}}
				>
					<p>content 1</p>
					<p>content 2</p>
					<p>content 3</p>
					<p>content 4</p>
					<p>content 5</p>
					<p>content 6</p>
					<p>content 7</p>
					<p>content 8</p>
					<p>content 9</p>
					<p>content 10</p>
					<p>content 11</p>
					<p>content 12</p>
					<p>content 13</p>
					<p>content 14</p>
					<p>content 15</p>
					<p>content 16</p>
					<p>content 17</p>
					<p>content 18</p>
					<p>content 19</p>
					<p>content 20</p>
					<p>content 21</p>
					<p>content 22</p>
					<p>content 23</p>
					<p>content 24</p>
					<p>content 25</p>
					<p>content 26</p>
					<p>content 27</p>
					<p>content 28</p>
					<p>content 29</p>
					<p>content 30</p>
					<p>content 31</p>
					<p>content 32</p>
					<p>content 33</p>
					<p>content 34</p>
					<p>content 35</p>
					<p>content 36</p>
					<p>content 37</p>
					<p>content 38</p>
					<p>content 39</p>
					<p>content 40</p>
					<p>content 41</p>
					<p>content 42</p>
					<p>content 43</p>
					<p>content 44</p>
					<p>content 45</p>
					<p>content 46</p>
					<p>content 46</p>
					<p>content 47</p>
					<p>content 48</p>
					<p>content 49</p>
					<p>content 50</p>
					<p>content 51</p>
					<p>content 52</p>
					<p>content 53</p>
					<p>content 54</p>
					<p>content 55</p>
					<p>content 56</p>
					<p>content 57</p>
					<p>content 58</p>
					<p>content 59</p>
					<p>content 60</p>
				</Scroll>
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

export default switchHome;
