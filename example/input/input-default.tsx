import React from "react";
import Example from "../utils/example";
import Input from "../../lib/input/input";

const inputDefault = `import { Input } from "lib-x-ui";
<Input placeholder="placeholder"/>`;

const InputDefault = () => {
  return (
    <Example
      title="组件和代码示例"
      description="输入框的基本用法。"
      code={inputDefault}
    >
      <Input placeholder="placeholder" />
    </Example>
  );
};

export default InputDefault;
