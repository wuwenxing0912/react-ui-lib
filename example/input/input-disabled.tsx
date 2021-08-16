import React from "react";
import Example from "../utils/example";
import Input from "../../lib/input/input";

const inputDisabled = `import Input from "./input";
<Input disabled={true} placeholder="disabled"/>`;

const InputDisabled = () => {
  return (
    <Example description="输入框禁用状态。" code={inputDisabled}>
      <Input disabled={true} placeholder="disabled" />
    </Example>
  );
};

export default InputDisabled;
