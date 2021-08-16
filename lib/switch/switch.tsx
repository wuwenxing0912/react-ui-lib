import React from "react";
import classes from "../helpers/classes";
import "./switch.scss";

interface Props {
  style?: React.CSSProperties;
  checked?: boolean;
  className?: string;
  disabled?: boolean;
  onChecked?: () => void;
}

const Switch: React.FunctionComponent<Props> = (props) => {
  const { checked, className, disabled, onChecked, ...rest } = props;
  const checkedClassName = checked ? "switch-checked" : "switch-unchecked";
  const checkedInnerClassName = checked
    ? "switch-inner-checked"
    : "switch-inner-unchecked";
  const disabledClassName = disabled ? "disabled" : undefined;
  const changeChecked = () => {
    if (disabled) return;
    onChecked && onChecked();
  };
  return (
    <span
      className={classes(
        "x-switch",
        checkedClassName,
        className,
        disabledClassName
      )}
      onClick={() => changeChecked()}
      {...rest}
    >
      <span className={classes("switch-inner", checkedInnerClassName)}></span>
    </span>
  );
};

Switch.defaultProps = {
  checked: false,
  disabled: false,
};

export default Switch;
