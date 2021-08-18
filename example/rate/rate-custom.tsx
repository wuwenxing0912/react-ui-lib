import React from "react";
import Example from "../utils/example";
import Rate from "../../lib/rate/rate";

const rateCustom = `import { Rate } from "lib-x-ui";
<Rate defaultValue={3} count={8}/>`;

const RateCustom = () => {
  return (
    <Example description="自定义 star 个数。" code={rateCustom}>
      <Rate className="default" defaultValue={3} count={8} />
    </Example>
  );
};

export default RateCustom;
