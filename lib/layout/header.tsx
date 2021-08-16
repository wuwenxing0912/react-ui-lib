import React from "react";
import { componentClassMaker } from "../helpers/classes";

const cc = componentClassMaker("x-layout");

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Header: React.FunctionComponent<Props> = (props) => {
  const { className, ...rest } = props;
  return (
    <div className={cc("header", { extra: className })} {...rest}>
      {props.children}
    </div>
  );
};

export default Header;
