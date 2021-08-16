import React, { useState } from "react";
import Example from "../utils/example";
import Switch from "../../lib/switch/switch";

const switchChecked = `import React, { useState } from "react";
import Switch from "./switch";
const [checked, setChecked] = useState(true);
<Switch checked={checked} onChecked={() => setChecked(!checked)}/>`;

const SwitchChecked = () => {
  const [checked, setChecked] = useState(true);
  return (
    <Example description="开关默认选中。" code={switchChecked}>
      <Switch checked={checked} onChecked={() => setChecked(!checked)} />
    </Example>
  );
};

export default SwitchChecked;
