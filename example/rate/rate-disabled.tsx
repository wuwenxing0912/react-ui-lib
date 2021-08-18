import React from "react";
import Example from "../utils/example";
import Rate from "../../lib/rate/rate";

const rateDisabled = `import { Rate } from "lib-x-ui";
<Rate defaultValue={1} disabled={true} />`;

const RateDisabled = () => {
  return (
    <Example description="禁用状态，无法交互。" code={rateDisabled}>
      <Rate className="default" defaultValue={1} disabled={true} />
    </Example>
  );
};

export default RateDisabled;
