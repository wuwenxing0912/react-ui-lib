import React from "react";
import Example from "../utils/example";
import Input from "../../lib/input/input";

const inputAddOn = `import Input from "./input";
<Input addOnBefore="Before" addOnAfter="After" placeholder="placeholder" />
<Input addOnAfter="After" placeholder="placeholder" />
<Input addOnBefore="Before" placeholder="placeholder" />`;

const inputAddOnStyle = {
  display: "block",
  margin: "0 auto",
  border: "1px solid rgba(0, 0, 0, 0.15)",
  borderTopLeftRadius: "4px",
  borderTopRightRadius: "4px",
  padding: "40px",
};

const InputAddOn = () => {
  return (
    <Example
      description="输入框前/后缀标签。"
      code={inputAddOn}
      style={inputAddOnStyle}
    >
      <Input
        addOnBefore="Before"
        addOnAfter="After"
        placeholder="placeholder"
      />
      <div style={{ marginBottom: "32px" }}></div>
      <Input addOnAfter="After" placeholder="placeholder" />
      <div style={{ marginBottom: "32px" }}></div>
      <Input addOnBefore="Before" placeholder="placeholder" />
    </Example>
  );
};

export default InputAddOn;
