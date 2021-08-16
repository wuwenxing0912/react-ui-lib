import React, { Fragment } from "react";
import InputDefault from "./input-default";
import InputDisabled from "./input-disabled";
import InputFix from "./input-fix";
import InputError from "./input-error";
import InputAddOn from "./input-add-on";

const inputHome: React.FunctionComponent = () => {
  return (
    <Fragment>
      <InputDefault />
      <InputDisabled />
      <InputFix />
      <InputError />
      <InputAddOn />
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
              <td className="api">id</td>
              <td className="api-description">输入框的id</td>
              <td className="api-type">string</td>
              <td className="api-nesscery">是</td>
              <td className="api-default">---</td>
            </tr>
            <tr>
              <td className="api">placeholder</td>
              <td className="api-description">输入框的placeholder</td>
              <td className="api-type">string</td>
              <td className="api-nesscery">是</td>
              <td className="api-default">---</td>
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
              <td className="api">value</td>
              <td className="api-description">输入框的value</td>
              <td className="api-type">string</td>
              <td className="api-nesscery">是</td>
              <td className="api-default">---</td>
            </tr>
            <tr>
              <td className="api">disabled</td>
              <td className="api-description">输入框禁用状态</td>
              <td className="api-type">boolean</td>
              <td className="api-nesscery">是</td>
              <td className="api-default">false</td>
            </tr>
            <tr>
              <td className="api">prefix</td>
              <td className="api-description">输入框前缀图标</td>
              <td className="api-type">string</td>
              <td className="api-nesscery">是</td>
              <td className="api-default">---</td>
            </tr>
            <tr>
              <td className="api">suffix</td>
              <td className="api-description">输入框后缀图标</td>
              <td className="api-type">string</td>
              <td className="api-nesscery">是</td>
              <td className="api-default">---</td>
            </tr>
            <tr>
              <td className="api">error</td>
              <td className="api-description">输入框后缀错误状态</td>
              <td className="api-type">boolean</td>
              <td className="api-nesscery">是</td>
              <td className="api-default">false</td>
            </tr>
            <tr>
              <td className="api">addOnBefore</td>
              <td className="api-description">输入框前缀标签</td>
              <td className="api-type">string</td>
              <td className="api-nesscery">是</td>
              <td className="api-default">---</td>
            </tr>
            <tr>
              <td className="api">addOnAfter</td>
              <td className="api-description">输入框后缀标签</td>
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

export default inputHome;
