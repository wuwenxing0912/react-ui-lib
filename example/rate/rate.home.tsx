import React, { Fragment } from "react";
import RateDefault from "./rate-default";
import RateCustom from "./rate-custom";
import RateDisabled from "./rate-disabled";

const RateHome: React.FunctionComponent = () => {
  return (
    <Fragment>
      <RateDefault />
      <RateCustom />
      <RateDisabled />
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
              <td className="api">count</td>
              <td className="api-description">star 评分个数</td>
              <td className="api-type">number</td>
              <td className="api-nesscery">是</td>
              <td className="api-default">5</td>
            </tr>
            <tr>
              <td className="api">defaultValue</td>
              <td className="api-description">默认值</td>
              <td className="api-type">number</td>
              <td className="api-nesscery">是</td>
              <td className="api-default">---</td>
            </tr>
            <tr>
              <td className="api">value</td>
              <td className="api-description">当前值</td>
              <td className="api-type">number</td>
              <td className="api-nesscery">是</td>
              <td className="api-default">---</td>
            </tr>
            <tr>
              <td className="api">className</td>
              <td className="api-description">自定义 Rate 类名</td>
              <td className="api-type">string</td>
              <td className="api-nesscery">是</td>
              <td className="api-default">---</td>
            </tr>
            <tr>
              <td className="api">style</td>
              <td className="api-description">自定义 Rate外层容器 样式</td>
              <td className="api-type">React.CSSProperties</td>
              <td className="api-nesscery">是</td>
              <td className="api-default">---</td>
            </tr>
            <tr>
              <td className="api">disabled</td>
              <td className="api-description">Rate 禁用状态</td>
              <td className="api-type">boolean</td>
              <td className="api-nesscery">是</td>
              <td className="api-default">false</td>
            </tr>
          </tbody>
        </table>
      </section>
    </Fragment>
  );
};

export default RateHome;
