import React, { Fragment } from "react";
import Button from "../../lib/button/button";
import createHighlightCode from "../utils/code-highlight";
import "./usage.scss";

const code: string = `import {Button} from "lib-x-ui";
<Button  type="primary">Button</Button>`;

const Usage = () => {
  return (
    <Fragment>
      <section>
        <div className="usage">
          <h1>开始使用</h1>
          <div className="caption">
            X-UI 已经发布到 NPM，可以使用 npm 或者 yarn 下载安装。
            <br />
            <strong>
              X-UI 目前也许存在未发现的问题，所以请勿在生产环境中使用。
            </strong>
          </div>
          <h2>安装</h2>
          <div className="command">
            <div className="command-npm"> npm install lib-x-ui</div>
            <br />
            <div className="command-yarn">yarn install lib-x-ui</div>
          </div>
        </div>
      </section>
      <section>
        <div className="usage-example">
          <h2>使用</h2>
          <div className="example-container">
            <Button type="primary">Button</Button>
          </div>
          <div className="description">
            <span className="text">Button 的示例用法</span>
          </div>
          <div className="code-area">{createHighlightCode(code)}</div>
        </div>
      </section>
    </Fragment>
  );
};

export default Usage;
