import React, { ReactNode } from "react";
import Icon from "../icon/icon";
import classes from "../helpers/classes";
import "./toast.scss";

export interface Props {
  className?: string;
  style?: React.CSSProperties;
  type?: "information" | "success" | "warning" | "error";
  content?: string | ReactNode;
  delay?: number;
}

const CreateToast: React.FunctionComponent<Props> = (props) => {
  const { className, type, ...rest } = props;
  return (
    <div className={classes("x-toast", className)} {...rest}>
      <div className="x-toast-icon-wrapper">
        <Icon name={type!} className={classes("x-toast-icon", type)}></Icon>
      </div>
      <div className="x-toast-message">{props.content}</div>
    </div>
  );
};

CreateToast.defaultProps = {
  type: "information",
};

export default CreateToast;
