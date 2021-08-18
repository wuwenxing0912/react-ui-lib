import React, { useState } from "react";
import Example from "../utils/example";
import Switch from "../../lib/switch/switch";

const switchDefault = `import React, { useState } from "react";
import { Switch } from "lib-x-ui";
const [checked, setChecked] = useState(false);
<Switch checked={checked} onChecked={() => setChecked(!checked)}/>`;

const SwitchDefault = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Example
      title="组件和代码示例"
      description="开关的基本用法。"
      code={switchDefault}
    >
      <Switch checked={checked} onChecked={() => setChecked(!checked)} />
    </Example>
  );
};

export default SwitchDefault;
