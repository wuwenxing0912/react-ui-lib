import React, { Fragment } from "react";
import ButtonType from "./button-default";
import ButtonDisabled from "./button-disabled";
import ButtonGhost from "./button-ghost";
import ButtonSize from "./button-size";
import ButtonLoading from "./buttons-loading";

const ButtonHome: React.FunctionComponent = () => {
  return (
    <Fragment>
      <ButtonType />
      <ButtonDisabled />
      <ButtonGhost />
      <ButtonSize />
      <ButtonLoading />
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
              <td className="api">type</td>
              <td className="api-description">设置button的样式</td>
              <td className="api-type">
                "default" | "primary" | "dashed" | "danger"
              </td>
              <td className="api-nesscery">是</td>
              <td className="api-default">default</td>
            </tr>
            <tr>
              <td className="api">className</td>
              <td className="api-description">自定义类名</td>
              <td className="api-type">string</td>
              <td className="api-nesscery">是</td>
              <td className="api-default">---</td>
            </tr>
            <tr>
              <td className="api">style</td>
              <td className="api-description">自定义样式</td>
              <td className="api-type">React.CSSProperties</td>
              <td className="api-nesscery">是</td>
              <td className="api-default">---</td>
            </tr>
            <tr>
              <td className="api">disabled</td>
              <td className="api-description">按钮禁用状态</td>
              <td className="api-type">boolean</td>
              <td className="api-nesscery">是</td>
              <td className="api-default">false</td>
            </tr>
            <tr>
              <td className="api">ghost</td>
              <td className="api-description">幽灵按钮，背景透明</td>
              <td className="api-type">boolean</td>
              <td className="api-nesscery">是</td>
              <td className="api-default">false</td>
            </tr>
            <tr>
              <td className="api">loading</td>
              <td className="api-description">按钮加载中状态</td>
              <td className="api-type">boolean</td>
              <td className="api-nesscery">是</td>
              <td className="api-default">false</td>
            </tr>
            <tr>
              <td className="api">size</td>
              <td className="api-description">按钮尺寸大小</td>
              <td className="api-type">"large" | "middle" | "small"</td>
              <td className="api-nesscery">是</td>
              <td className="api-default">middle</td>
            </tr>
            <tr>
              <td className="api">onClick</td>
              <td className="api-description">点击按钮时的回调</td>
              <td className="api-type">React.MouseEventHandler</td>
              <td className="api-nesscery">是</td>
              <td className="api-default">---</td>
            </tr>
            <tr>
              <td className="api">buttonType</td>
              <td className="api-description">设置原生button的type属性</td>
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

export default ButtonHome;
