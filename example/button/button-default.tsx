import React from "react";
import Example from "../utils/example";
import Button from "../../lib/button/button";

const buttonType = `import Button from "./button";
import React from "react";
const ButtonType = () => {
    return (
      <Button type="default">Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="danger">Danger</Button>
    );
}
export default ButtonType;`;

const ButtonType = () => {
  return (
    <Example
      title="组件和代码示例"
      description="按钮有四种类型：默认按钮、主题按钮、虚线按钮以及危险按钮。"
      code={buttonType}
    >
      <Button type="default" style={{ marginRight: 20 }}>
        Default
      </Button>
      <Button type="primary" style={{ marginRight: 20 }}>
        Primary
      </Button>
      <Button type="dashed" style={{ marginRight: 20 }}>
        Dashed
      </Button>
      <Button type="danger">Danger</Button>
    </Example>
  );
};

export default ButtonType;
