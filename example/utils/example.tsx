import React, { Fragment, useState } from "react";
import createHighlightCode from "./code-highlight";
import Icon from "../../lib/icon/icon";

interface Props {
  title?: string;
  description: string;
  code: string;
  style?: React.CSSProperties;
}

const Example: React.FunctionComponent<Props> = (props) => {
  const { title, description, code } = props;
  const [codeVisible, setCodeVisible] = useState(false);
  const [codeTip, setCodeTip] = useState(false);
  return (
    <Fragment>
      <section>
        {title ? <h1>{title}</h1> : ""}
        <div className="example-container" style={props.style}>
          {props.children}
        </div>
        <div className="description">
          <span className="text">{description}</span>
          <span
            className="code-icon"
            style={{ display: "inline-flex", cursor: "pointer" }}
            onClick={() => {
              setCodeVisible(!codeVisible);
            }}
            onMouseEnter={() => {
              setCodeTip(!codeTip);
            }}
            onMouseLeave={() => {
              setCodeTip(!codeTip);
            }}
          >
            <Icon name="code" style={{ height: 19 }}></Icon>
          </span>
          <span
            className="pop-content"
            style={{ display: codeTip ? "inline-block" : "none" }}
          >
            {codeVisible ? "收起代码" : "显示代码"}
          </span>
        </div>
        <div
          className="code-area"
          style={{ display: codeVisible ? "block" : "none" }}
        >
          {createHighlightCode(code as string)}
        </div>
      </section>
    </Fragment>
  );
};

export default Example;
