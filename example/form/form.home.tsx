import React, { Fragment } from "react";
import FormDefault from "./form-default";
import FormLayout from "./form-layout";

const FromHome: React.FunctionComponent = () => {
  return (
    <Fragment>
      <FormDefault />
      <FormLayout />
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
              <td className="api">layout</td>
              <td className="api-description">设置form的布局</td>
              <td className="api-type">"horizontal" | "vertical" | "inline"</td>
              <td className="api-nesscery">是</td>
              <td className="api-default">horizontal</td>
            </tr>
            <tr>
              <td className="api">value</td>
              <td className="api-description">表单初始化数据</td>
              <td className="api-type">
                <p>{"{[Key: string]: any}"}</p>
              </td>
              <td className="api-nesscery">否</td>
              <td className="api-default">---</td>
            </tr>
            <tr>
              <td className="api">fields</td>
              <td className="api-description">表单数据域</td>
              <td className="api-type">
                <p>
                  {
                    "Array<{ name: string; lable: string; input: { type: string } }>"
                  }
                </p>
              </td>
              <td className="api-nesscery">否</td>
              <td className="api-default">---</td>
            </tr>
            <tr>
              <td className="api">buttons</td>
              <td className="api-description">表单按钮</td>
              <td className="api-type">ReactFragment</td>
              <td className="api-nesscery">否</td>
              <td className="api-default">---</td>
            </tr>
            <tr>
              <td className="api">onSubmit</td>
              <td className="api-description">提交表单的回调函数</td>
              <td className="api-type">
                <p>{"React.FormEventHandler<HTMLFormElement>"}</p>
              </td>
              <td className="api-nesscery">否</td>
              <td className="api-default">---</td>
            </tr>
            <tr>
              <td className="api">onChange</td>
              <td className="api-description">修改表单数据的回调函数</td>
              <td className="api-type">
                <p>{"(value: FormValue) => void"}</p>
              </td>
              <td className="api-nesscery">否</td>
              <td className="api-default">---</td>
            </tr>
            <tr>
              <td className="api">errors</td>
              <td className="api-description">校验表单数据的错误提示</td>
              <td className="api-type">
                <p>{"{ [K: string]: string[] }"}</p>
              </td>
              <td className="api-nesscery">否</td>
              <td className="api-default">---</td>
            </tr>
          </tbody>
        </table>
      </section>
    </Fragment>
  );
};

export default FromHome;
