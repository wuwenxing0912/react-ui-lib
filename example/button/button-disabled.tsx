import React from "react";
import Example from "../utils/example";
import Button from "../../lib/button/button";

const buttonDisabled = `import Button from "./button";
import React from "react";
const ButtonDisabled = () => {
    return (
      <Button type="default" disabled={true}>Default</Button>
      <Button type="primary" disabled={true}>Primary</Button>
      <Button type="dashed" disabled={true}>Dashed</Button>
      <Button type="danger" disabled={true}>Danger</Button>
    );
}
export default ButtonDisabled;`;

const ButtonDisabled = () => {
  return (
    <Example
      description="按钮禁用：设置按钮 disabled 禁用状态。"
      code={buttonDisabled}
    >
      <Button type="default" disabled={true} style={{ marginRight: 20 }}>
        Default
      </Button>
      <Button type="primary" disabled={true} style={{ marginRight: 20 }}>
        Primary
      </Button>
      <Button type="dashed" disabled={true} style={{ marginRight: 20 }}>
        Dashed
      </Button>
      <Button type="danger" disabled={true}>
        Danger
      </Button>
    </Example>
  );
};

export default ButtonDisabled;
