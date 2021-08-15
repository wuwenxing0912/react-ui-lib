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
  const [visible, setVisble] = useState(false);
  const [showCode, setshowCode] = useState(false);
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

export default Example;
