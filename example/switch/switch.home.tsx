import React, { Fragment } from "react";
import SwitchDefault from "./switch-default";
import SwitchChecked from "./switch-checked";
import SwitchDisabled from "./switch-disabled";

const switchHome: React.FunctionComponent = () => {
  return (
    <Fragment>
      <SwitchDefault />
      <SwitchChecked />
      <SwitchDisabled />
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
              <td className="api">style</td>
              <td className="api-description">自定义样式</td>
              <td className="api-type">React.CSSProperties</td>
              <td className="api-nesscery">是</td>
              <td className="api-default">---</td>
            </tr>
            <tr>
              <td className="api">checked</td>
              <td className="api-description">开关选中状态</td>
              <td className="api-type">boolean</td>
              <td className="api-nesscery">是</td>
              <td className="api-default">false</td>
            </tr>
            <tr>
              <td className="api">disabled</td>
              <td className="api-description">开关禁用状态</td>
              <td className="api-type">boolean</td>
              <td className="api-nesscery">是</td>
              <td className="api-default">false</td>
            </tr>
            <tr>
              <td className="api">onChecked</td>
              <td className="api-description">改变开关状态时的回调函数</td>
              <td className="api-type">
                <p>{"() => void"}</p>
              </td>
              <td className="api-nesscery">是</td>
              <td className="api-default">---</td>
            </tr>
            <tr>
              <td className="api">className</td>
              <td className="api-description">自定义 Switch 类名</td>
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

export default switchHome;
