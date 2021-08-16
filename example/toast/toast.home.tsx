import React, { Fragment } from "react";
import ToastDefault from "./toast-default";
import ToastDelay from "./toast-delay";

const RateHome: React.FunctionComponent = () => {
  return (
    <Fragment>
      <ToastDefault />
      <ToastDelay />
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
              <td className="api">content</td>
              <td className="api-description">提示信息</td>
              <td className="api-type">string</td>
              <td className="api-nesscery">是</td>
              <td className="api-default">---</td>
            </tr>
            <tr>
              <td className="api">delay</td>
              <td className="api-description">自动关闭的延时（秒）</td>
              <td className="api-type">number</td>
              <td className="api-nesscery">是</td>
              <td className="api-default">3</td>
            </tr>
            <tr>
              <td className="api">className</td>
              <td className="api-description">自定义 Toast 类名</td>
              <td className="api-type">string</td>
              <td className="api-nesscery">是</td>
              <td className="api-default">---</td>
            </tr>
            <tr>
              <td className="api">style</td>
              <td className="api-description">自定义 Toast外层容器 样式</td>
              <td className="api-type">React.CSSProperties</td>
              <td className="api-nesscery">是</td>
              <td className="api-default">---</td>
            </tr>
          </tbody>
        </table>
      </section>
    </Fragment>
  );
};

export default RateHome;
