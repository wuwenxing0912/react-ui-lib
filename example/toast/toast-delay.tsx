import React from "react";
import Example from "../utils/example";
import { information, success, warning, error } from "../../lib/toast/toast";
import Button from "../../lib/button/button";

const toastDelay = `import { information, success, warning, error } from "lib-x-ui";
const options = { content: "There is some information here!", delay: 10 }
<Button onClick={() => information(options)}>Information</Button>
<Button onClick={() => success(options)}>Success</Button>
<Button onClick={() => warning(options)}>Warning</Button>
<Button onClick={() => error(options)}>Error</Button>`;

const ToastDelay = () => {
  return (
    <Example description="自定义信息提示框延时关闭时间。" code={toastDelay}>
      <Button
        style={{ marginRight: 20 }}
        onClick={() =>
          information({
            content: "There is some information here!",
            delay: 10,
          })
        }
      >
        Information
      </Button>
      <Button
        style={{ marginRight: 20 }}
        onClick={() =>
          success({ content: "There is some success here!", delay: 10 })
        }
      >
        Success
      </Button>
      <Button
        style={{ marginRight: 20 }}
        onClick={() =>
          warning({ content: "There is some warning here!", delay: 10 })
        }
      >
        Warning
      </Button>
      <Button
        onClick={() =>
          error({ content: "There is some error here!", delay: 10 })
        }
      >
        Error
      </Button>
    </Example>
  );
};

export default ToastDelay;
