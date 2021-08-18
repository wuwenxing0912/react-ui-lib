import React from "react";
import Icon from "../../lib/icon/icon";
import "./introduction.scss";

const Introduction = () => {
  return (
    <section>
      <div className="x-ui">
        <h1>X-UI</h1>
        <p className="caption">
          X-UI 是一套适用于 PC
          端的组件库。除以下提及到的库之外，没有引入其他的第三方库用于编写源代码。
        </p>
        <div className="icon-wrapper">
          <div className="react-wrapper">
            <Icon name="react" className="react-icon" />
            <h2 className="lib">基于 React</h2>
            <p className="text">使用 React 构建项目</p>
          </div>
          <div className="ts-wrapper">
            <Icon name="ts" className="ts-icon" />
            <h2 className="lib">基于 TypeScript</h2>
            <p className="text">使用 TypeScript 编写源代码</p>
          </div>
          <div className="sass-wrapper">
            <Icon name="sass" className="sass-icon" />
            <h2 className="lib">基于 Sass</h2>
            <p className="text">使用 Sass 编写样式</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
