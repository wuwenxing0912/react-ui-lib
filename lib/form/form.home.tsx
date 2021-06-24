import React, { Fragment, useState } from "react";
import Form, { FormValue } from "./form";
import Button from "../button/button";
import Validator from "./validator";

const FromHome: React.FunctionComponent = () => {
	const [formData, setFormData] = useState<FormValue>({
		username: "xxx",
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
			{ key: "username", minLength: 8, maxLength: 16 },
			{ key: "username", pattern: /^[A-Za-z0-9]+$/ },
			{ key: "password", required: true },
		];
		const errors = Validator(formData, rules);
		setErrors(errors);
		console.log(errors);
	};
	return (
		<Fragment>
			<section>
				<h1>FromHome</h1>
				<div className="example-container">
					<Form
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
					></Form>
				</div>
			</section>
		</Fragment>
	);
};

export default FromHome;
