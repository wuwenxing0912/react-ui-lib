import React from "react";
import Example from "../utils/example";
import Input from "../../lib/input/input";

const inputError = `import Input from "./input";
<Input error={true} placeholder="error"/>`;

const InputError = () => {
  return (
    <Example description="输入框错误状态。" code={inputError}>
      <Input error={true} placeholder="error" />
    </Example>
  );
};

export default InputError;
