import React from "react";
import Example from "../utils/example";
import Rate from "../../lib/rate/rate";

const rateDefault = `import Rate from "./rate";
<Rate defaultValue={1}/>`;

const RateDefault = () => {
  return (
    <Example
      title="组件和代码示例"
      description="评分的基本用法。"
      code={rateDefault}
    >
      <Rate className="default" defaultValue={1} />
    </Example>
  );
};

export default RateDefault;
