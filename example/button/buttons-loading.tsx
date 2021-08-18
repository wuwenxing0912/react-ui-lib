import React from "react";
import Example from "../utils/example";
import Button from "../../lib/button/button";

const buttonLoading = `import {Button} from "lib-x-ui";
import React from "react";
const ButtonLoading = () => {
    return (
      <Button type="default" loading={true}>Default</Button>
      <Button type="primary" loading={true}>Primary</Button>
      <Button type="dashed" loading={true}>Dashed</Button>
      <Button type="danger" loading={true}>Danger</Button>
    );
}
export default ButtonLoading;`;

const ButtonLoading = () => {
  return (
    <Example description="按钮加载中状态。" code={buttonLoading}>
      <Button type="default" loading={true} style={{ marginRight: 20 }}>
        Default
      </Button>
      <Button type="primary" loading={true} style={{ marginRight: 20 }}>
        Primary
      </Button>
      <Button type="dashed" loading={true} style={{ marginRight: 20 }}>
        Dashed
      </Button>
      <Button type="danger" loading={true}>
        Danger
      </Button>
    </Example>
  );
};

export default ButtonLoading;
