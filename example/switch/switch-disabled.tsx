import React from "react";
import Example from "../utils/example";
import Switch from "../../lib/switch/switch";

const switchDisabled = `import React from "react"
import Switch from "./switch";
<Switch checked={false} disabled={true}/>
<Switch checked={true} disabled={true}/>`;

const SwitchDisabled = () => {
  return (
    <Example description="开关禁用状态。" code={switchDisabled}>
      <Switch checked={false} disabled={true} style={{ marginRight: "20px" }} />
      <Switch checked={true} disabled={true} />
    </Example>
  );
};

export default SwitchDisabled;
