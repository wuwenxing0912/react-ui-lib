import React from "react";
import Example from "../utils/example";
import Button from "../../lib/button/button";

const buttonGhost = `import {Button} from "lib-x-ui";
import React from "react";
const ButtonGhost = () => {
    return (
      <Button type="default" ghost={true}>Default</Button>
      <Button type="primary" ghost={true}>Primary</Button>
      <Button type="dashed" ghost={true}>Dashed</Button>
      <Button type="danger" ghost={true}>Danger</Button>
    );
}
export default ButtonGhost;`;

const ButtonGhost = () => {
  return (
    <Example
      description="幽灵按钮：常用在有色背景上，按钮背景变为透明。"
      code={buttonGhost}
      style={{
        background: "rgb(190, 200, 200)",
      }}
    >
      <Button type="default" ghost={true} style={{ marginRight: 20 }}>
        Default
      </Button>
      <Button type="primary" ghost={true} style={{ marginRight: 20 }}>
        Primary
      </Button>
      <Button type="dashed" ghost={true} style={{ marginRight: 20 }}>
        Dashed
      </Button>
      <Button type="danger" ghost={true}>
        Danger
      </Button>
    </Example>
  );
};

export default ButtonGhost;
