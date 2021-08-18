import React from "react";
import Example from "../utils/example";
import Input from "../../lib/input/input";

const inputFix = `import { Input } from "lib-x-ui";
<Input prefix="username" placeholder="username" />
<Input suffix="password" placeholder="password" />`;

const inputFixStyle = {
  display: "block",
  margin: "0 auto",
  border: "1px solid rgba(0, 0, 0, 0.15)",
  borderTopLeftRadius: "4px",
  borderTopRightRadius: "4px",
  padding: "40px",
};

const InputFix = () => {
  return (
    <Example
      description="带有前/后缀图标的输入框。"
      code={inputFix}
      style={inputFixStyle}
    >
      <Input prefix="username" placeholder="username" />
      <div style={{ marginBottom: "32px" }}></div>
      <Input suffix="password" placeholder="password" />
    </Example>
  );
};

export default InputFix;
