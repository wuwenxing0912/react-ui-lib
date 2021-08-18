import React, { Fragment, useState } from "react";
import Example from "../utils/example";
import Form, { FormValue } from "../../lib/form/form";
import Validator from "../../lib/form/validator";
import Button from "../../lib/button/button";

const formLayout = `import React, { Fragment, useState } from "react";
import { Form, FormValue, Validator } from "lib-x-ui";

const [formData, setFormData] = useState<FormValue>({
  username: "",
  password: "",
});

const [fields] = useState([
  { name: "username", lable: "用户名", input: { type: "text" } },
  { name: "password", lable: "密码", input: { type: "password" } },
]);

const [errors, setErrors] = useState({});

const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  const rules = [
    { key: "username", required: true },
    { key: "password", required: true },
  ];
  const errors = Validator(formData, rules);
  setErrors(errors);
};

<Form
  layout="horizontal"
  value={formData}
  fields={fields}
  errors={errors}
  onSubmit={onSubmit}
  onChange={(newValue) => setFormData(newValue)}
  buttons={
    <Fragment>
      <Button type="primary" buttonType="submit">
        提交
      </Button>
      <Button>取消</Button>
    </Fragment>
  }
/>`;

const FormLayout = () => {
  const [formData, setFormData] = useState<FormValue>({
    username: "",
    password: "",
  });
  const [fields] = useState([
    { name: "username", lable: "用户名", input: { type: "text" } },
    { name: "password", lable: "密码", input: { type: "password" } },
  ]);
  const [errors, setErrors] = useState({});
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(formData);
    const rules = [
      { key: "username", required: true },
      { key: "password", required: true },
    ];
    const errors = Validator(formData, rules);
    setErrors(errors);
    console.log(errors);
  };
  const [changeLayout, setChangeLayout] = useState("horizontal");
  return (
    <Example
      description="表单有三种布局：基本表单、垂直表单和内联表单"
      code={formLayout}
      style={{ position: "relative", paddingTop: "100px" }}
    >
      <div style={{ position: "absolute", top: "32px" }}>
        <Button
          type="primary"
          style={{ lineHeight: "22px", marginRight: "12px" }}
          onClick={() => {
            setChangeLayout("horizontal");
            setErrors({});
          }}
        >
          Horizontal
        </Button>
        <Button
          type="primary"
          style={{ lineHeight: "22px", marginRight: "12px" }}
          onClick={() => {
            setChangeLayout("vertical");
            setErrors({});
          }}
        >
          Vertical
        </Button>
        <Button
          type="primary"
          style={{ lineHeight: "22px" }}
          onClick={() => {
            setChangeLayout("inline");
            setErrors({});
          }}
        >
          Inline
        </Button>
      </div>
      <Form
        layout={changeLayout as "horizontal" | "vertical" | "inline"}
        value={formData}
        fields={fields}
        buttons={
          <Fragment>
            <Button
              type="primary"
              buttonType="submit"
              style={{ lineHeight: "22px", marginRight: "20px" }}
            >
              提交
            </Button>
            <Button style={{ lineHeight: "22px" }}>取消</Button>
          </Fragment>
        }
        errors={errors}
        onChange={(newValue) => setFormData(newValue)}
        onSubmit={onSubmit}
      />
    </Example>
  );
};

export default FormLayout;
