import React, { Fragment } from "react";
import classes from "../helpers/classes";
import "./button.scss";

interface Props {
  type?: "default" | "primary" | "dashed" | "danger";
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  onClick?: React.MouseEventHandler;
  ghost?: boolean;
  size?: "large" | "middle" | "small";
  buttonType?: "button" | "submit" | "reset";
  loading?: boolean;
}

const Button: React.FunctionComponent<Props> = (props) => {
  const { type, className, buttonType, ...rest } = props;
  const disabled = props.disabled ? "disabled" : undefined;
  const ghost = props.ghost ? "ghost" : undefined;
  const size = props.size ? props.size : "middle";
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
        {props.loading ? <span className="x-loading" /> : null}
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
  loading: false,
};

export default Button;
