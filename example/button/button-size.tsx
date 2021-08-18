import React, { useState } from "react";
import Example from "../utils/example";
import Button from "../../lib/button/button";

const buttonSize = `import {Button} from "lib-x-ui";
import React, { useState } from "react";
const [size, setSize] = useState("middle");
const ButtonSize = () => {
    return (
      <Button type="default" onClick={() => {setSize("large")}}>Default</Button>
      <Button type="primary" onClick={() => {setSize("middle")}}>Primary</Button>
      <Button type="dashed" onClick={() => {setSize("middle")}}>Dashed</Button>
      <Button type="danger" onClick={() => {setSize("small")}}>Danger</Button>
    );
}
export default ButtonSize;`;

const ButtonSize = () => {
  const [size, setSize] = useState("middle");
  return (
    <Example
      description="按钮尺寸：按钮有大、中、小三种尺寸。"
      code={buttonSize}
    >
      <Button
        type="default"
        size={size as "large"}
        onClick={() => setSize("large")}
        style={{ marginRight: 20 }}
      >
        Large
      </Button>
      <Button
        type="primary"
        size={size as "middle"}
        onClick={() => setSize("middle")}
        style={{ marginRight: 20 }}
      >
        Middle
      </Button>
      <Button
        type="dashed"
        size={size as "middle"}
        onClick={() => setSize("middle")}
        style={{ marginRight: 20 }}
      >
        Middle
      </Button>
      <Button
        type="danger"
        size={size as "small"}
        onClick={() => setSize("small")}
      >
        Small
      </Button>
    </Example>
  );
};

export default ButtonSize;
