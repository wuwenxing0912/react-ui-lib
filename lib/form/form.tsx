import React, { ReactFragment } from "react";
import Input from "../input/input";
import classes from "../helpers/classes";
import "./form.scss";

export interface FormValue {
  [Key: string]: any;
}
interface Props {
  layout?: "horizontal" | "vertical" | "inline";
  value: FormValue;
  fields: Array<{ name: string; lable: string; input: { type: string } }>;
  buttons: ReactFragment;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChange: (value: FormValue) => void;
  errors: { [K: string]: string[] };
}

const Form: React.FunctionComponent<Props> = (props) => {
  const formData = props.value;
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    props.onSubmit(e);
  };
  const onInputChange = (name: string, value: string) => {
    const newFormData = { ...formData, [name]: value };
    props.onChange(newFormData);
  };
  const className = classes("x-form");
  const horizontalLayout = (
    <table className="form-table">
      <tbody>
        {props.fields.map((field) => (
          <tr key={field.name}>
            <td className="td-lable">
              <label htmlFor={field.name}>{field.lable + ":"}</label>
            </td>
            <td className="td-input">
              <Input
                id={field.name}
                type={field.input.type}
                value={formData[field.name]}
                error={Boolean(Object.keys(props.errors).length)}
                onChange={(e) => onInputChange(field.name, e.target.value)}
              />
              <div className="errors">
                {props.errors[field.name] ? (
                  props.errors[field.name].join("，")
                ) : (
                  <span>&nbsp;</span>
                )}
              </div>
            </td>
          </tr>
        ))}
        <tr>
          <td className="td-buttons-fill"></td>
          <td className="td-buttons">{props.buttons}</td>
        </tr>
      </tbody>
    </table>
  );
  const verticalLayout = (
    <div className="v-layout">
      {props.fields.map((field) => (
        <div key={field.name} className="v-input-wrapper">
          <div className="v-lable">
            <label htmlFor={field.name}>{field.lable}</label>
          </div>
          <div className="v-input">
            <Input
              id={field.name}
              className="vertical-input-width"
              type={field.input.type}
              value={formData[field.name]}
              error={Boolean(Object.keys(props.errors).length)}
              onChange={(e) => onInputChange(field.name, e.target.value)}
            />
            <div className="errors">
              {props.errors[field.name] ? (
                props.errors[field.name].join("，")
              ) : (
                <span>&nbsp;</span>
              )}
            </div>
          </div>
        </div>
      ))}
      <div className="v-buttons">{props.buttons}</div>
    </div>
  );
  const inlinelLayout = (
    <div className="i-layout">
      {props.fields.map((field) => (
        <div key={field.name} className="i-input-wrapper">
          <div className="i-lable">
            <label htmlFor={field.name}>{field.lable + ":"}</label>
          </div>
          <div className="i-input">
            <Input
              id={field.name}
              type={field.input.type}
              value={formData[field.name]}
              error={Boolean(Object.keys(props.errors).length)}
              onChange={(e) => onInputChange(field.name, e.target.value)}
            />
            <div className="errors">
              {props.errors[field.name] && props.errors[field.name].join("，")}
            </div>
          </div>
        </div>
      ))}
      <div className="i-buttons">{props.buttons}</div>
    </div>
  );
  const layoutMap = () => {
    const layout = props.layout || "horizontal";
    const map = {
      horizontal: horizontalLayout,
      vertical: verticalLayout,
      inline: inlinelLayout,
    };
    return map[layout];
  };
  return (
    <form onSubmit={onSubmit} className={className}>
      {layoutMap()}
    </form>
  );
};

Form.defaultProps = {
  layout: "horizontal",
};
export default Form;
