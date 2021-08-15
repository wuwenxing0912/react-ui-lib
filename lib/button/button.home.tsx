import React, { Fragment, useState } from "react";
import Button from "./button";
import Icon from "../icon/icon";
import createHighlightCode from "../helpers/code-highlight";

const buttonType = `<Button type="default">Default</Button>
<Button type="primary">Primary</Button>
<Button type="dashed">Dashed</Button>
<Button type="danger">Danger</Button>`;

const buttonDisabled = `<Button type="default" disabled={true}>Default</Button>
<Button type="primary" disabled={true}>Primary</Button>
<Button type="dashed" disabled={true}>Dashed</Button>
<Button type="danger" disabled={true}>Danger</Button>`;

const buttonGhost = `<Button type="default" ghost={true}>Default</Button>
<Button type="primary" ghost={true}>Primary</Button>
<Button type="dashed" ghost={true}>Dashed</Button>
<Button type="danger" ghost={true}>Danger</Button>`;

const buttonIcon = `<Button type="default" icon="modify">Default</Button>
<Button type="primary" icon="modify">Primary</Button>
<Button type="dashed" icon="modify">Dashed</Button>
<Button type="danger" icon="modify">Danger</Button>`;

const buttonSize = `const [size, setSize] = useState("middle");
<Button type="default" onClick={() => {setSize("large")}}>Default</Button>
<Button type="primary" onClick={() => {setSize("middle")}}>Primary</Button>
<Button type="dashed" onClick={() => {setSize("middle")}}>Dashed</Button>
<Button type="danger" onClick={() => {setSize("small")}}>Danger</Button>`;

const ButtonHome: React.FunctionComponent = () => {
  const section1 = "按钮有四种类型：默认按钮、主题按钮、虚线按钮以及危险按钮。";
  const section2 = "按钮禁用：设置按钮 disabled 禁用状态。";
  const section3 = "图标按钮：设置 icon 属性。";
  const section4 = "幽灵按钮：常用在有色背景上，按钮背景变为透明。";
  const section5 = "按钮尺寸：按钮有大、中、小三种尺寸。";
  return (
    <Fragment>
      {createSection("组件和代码示例", false, buttonType, section1)}
      {createSection("", true, buttonDisabled, section2)}
      {createSection("", false, buttonGhost, section4, [], true)}
      {createSectionButtonSize("", buttonSize, section5)}
      {createSection("", false, buttonIcon, section3, [
        "setting",
        "modify",
        "sign-out",
        "warn",
      ])}
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
              <td className="api-button-type">type</td>
              <td className="api-type-description">设置button的样式</td>
              <td className="api-type">
                "default" | "primary" | "dashed" | "danger"
              </td>
              <td className="api-nesscery">是</td>
              <td className="api-default">default</td>
            </tr>
            <tr>
              <td className="api-classname">className</td>
              <td className="api-classname-description">自定义类名</td>
              <td className="api-type">string</td>
              <td className="api-nesscery">是</td>
              <td className="api-default">---</td>
            </tr>
            <tr>
              <td className="api-style">style</td>
              <td className="api-style-description">自定义样式</td>
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
            <tr>
              <td className="api-style">ghost</td>
              <td className="api-style-description">幽灵按钮，背景透明</td>
              <td className="api-type">boolean</td>
              <td className="api-nesscery">是</td>
              <td className="api-default">false</td>
            </tr>
            <tr>
              <td className="api-style">size</td>
              <td className="api-style-description">按钮尺寸大小</td>
              <td className="api-type">"large" | "middle" | "small"</td>
              <td className="api-nesscery">是</td>
              <td className="api-default">middle</td>
            </tr>
            <tr>
              <td className="api-style">icon</td>
              <td className="api-style-description">自定义按钮图标</td>
              <td className="api-type">string</td>
              <td className="api-nesscery">是</td>
              <td className="api-default">---</td>
            </tr>
            <tr>
              <td className="api-style">onClick</td>
              <td className="api-style-description">点击按钮时的回调</td>
              <td className="api-type">React.MouseEventHandler</td>
              <td className="api-nesscery">是</td>
              <td className="api-default">---</td>
            </tr>
            <tr>
              <td className="api-style">buttonType</td>
              <td className="api-style-description">
                设置原生button的type属性
              </td>
              <td className="api-type">"button" | "submit" | "reset"</td>
              <td className="api-nesscery">是</td>
              <td className="api-default">button</td>
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
  icon?: (string | undefined)[],
  ghost?: boolean
) => {
  const [visible, setVisble] = useState(false);
  const [showCode, setshowCode] = useState(false);
  const f = (e: React.MouseEvent) => {
    console.log(e.type);
  };
  const containerGhostStyle = ghost && {
    background: "rgb(190, 200, 200)",
  };
  return (
    <Fragment>
      <section>
        {h1 ? <h1>{h1}</h1> : ""}
        <div
          className="example-container"
          style={containerGhostStyle as object}
        >
          <Button
            className="default"
            style={{ marginRight: 20 }}
            disabled={disabled}
            icon={icon && icon[1]}
            ghost={ghost}
            onClick={f}
          >
            Default
          </Button>
          <Button
            type="primary"
            style={{ marginRight: 20 }}
            disabled={disabled}
            icon={icon && icon[1]}
            ghost={ghost}
            onClick={f}
          >
            Primary
          </Button>
          <Button
            type="dashed"
            style={{ marginRight: 20 }}
            disabled={disabled}
            icon={icon && icon[1]}
            ghost={ghost}
            onClick={f}
          >
            Dashed
          </Button>
          <Button
            type="danger"
            disabled={disabled}
            icon={icon && icon[1]}
            ghost={ghost}
            onClick={f}
          >
            Danger
          </Button>
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

const createSectionButtonSize = (
  h1?: string,
  code?: string,
  description?: string
) => {
  const [visible, setVisble] = useState(false);
  const [showCode, setshowCode] = useState(false);
  const [size, setSize] = useState("middle");
  return (
    <Fragment>
      <section>
        {h1 ? <h1>{h1}</h1> : ""}
        <div className="example-container">
          <Button
            style={{ marginRight: 20 }}
            size={size as "large"}
            onClick={() => {
              setSize("large");
            }}
          >
            Large
          </Button>
          <Button
            type="primary"
            style={{ marginRight: 20 }}
            size={size as "middle"}
            onClick={() => setSize("middle")}
          >
            Middle
          </Button>
          <Button
            type="dashed"
            style={{ marginRight: 20 }}
            size={size as "middle"}
            onClick={() => setSize("middle")}
          >
            Middle
          </Button>
          <Button
            type="danger"
            size={size as "small"}
            onClick={() => setSize("small")}
          >
            Small
          </Button>
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

export default ButtonHome;
