import React from "react";
import Example from "../utils/example";
import { information, success, warning, error } from "../../lib/toast/toast";
import Button from "../../lib/button/button";

const toastDefault = `import { information, success, warning, error } from "lib-x-ui";
const options = { content: "There is some information here!" }
<Button onClick={() => information(options)}>Information</Button>
<Button onClick={() => success(options)}>Success</Button>
<Button onClick={() => warning(options)}>Warning</Button>
<Button onClick={() => error(options)}>Error</Button>`;

const ToastDefault = () => {
  return (
    <Example
      title="组件和代码示例"
      description="信息提示框的基本用法。"
      code={toastDefault}
    >
      <Button
        style={{ marginRight: 20 }}
        onClick={() =>
          information({ content: "There is some information here!" })
        }
      >
        Information
      </Button>
      <Button
        style={{ marginRight: 20 }}
        onClick={() => success({ content: "There is some success here!" })}
      >
        Success
      </Button>
      <Button
        style={{ marginRight: 20 }}
        onClick={() => warning({ content: "There is some warning here!" })}
      >
        Warning
      </Button>
      <Button onClick={() => error({ content: "There is some error here!" })}>
        Error
      </Button>
    </Example>
  );
};

export default ToastDefault;
