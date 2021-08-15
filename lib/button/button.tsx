import React, { Fragment } from "react";
import classes from "../helpers/classes";
import "./button.scss";
import Icon from "../icon/icon";

interface Props {
  type?: "default" | "primary" | "dashed" | "danger";
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  icon?: string;
  onClick?: React.MouseEventHandler;
  ghost?: boolean;
  size?: "large" | "middle" | "small";
  buttonType?: "button" | "submit" | "reset";
}

const Button: React.FunctionComponent<Props> = (props) => {
  const { type, className, buttonType, ...rest } = props;
  const disabled = props.disabled ? "disabled" : undefined;
  const ghost = props.ghost ? "ghost" : undefined;
  const size = props.size ? props.size : "middle";
  const icon = props.icon && <Icon name={props.icon}></Icon>;
  const onClick = (e: React.MouseEvent) => {
    if (disabled) return e.preventDefault();
    props.onClick && props.onClick.call(e.target, e);
  };
  const buttonClassName = classes(
    "x-button",
    type,
    className,
    disabled,
    ghost,
    size
  );
  return (
    <Fragment>
      <button
        className={buttonClassName}
        onClick={onClick}
        type={buttonType}
        {...rest}
      >
        {icon}
        <span className="text">{props.children}</span>
      </button>
    </Fragment>
  );
};

Button.defaultProps = {
  type: "default",
  disabled: false,
  ghost: false,
  size: "middle",
  buttonType: "button",
};

export default Button;
