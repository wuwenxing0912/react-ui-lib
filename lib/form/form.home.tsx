import React, { Fragment, useState } from "react";
import Form, { FormValue } from "./form";
import Button from "../button/button";

const FromHome: React.FunctionComponent = () => {
	const [formData, setFormData] = useState<FormValue>({
		username: "",
		password: "",
	});
	const [fields] = useState([
		{ name: "username", lable: "用户名", input: { type: "text" } },
		{ name: "password", lable: "密码", input: { type: "password" } },
	]);
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		console.log(formData);
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
								<Button type="primary" buttonType="submit">
									提交
								</Button>
								<Button>取消</Button>
							</Fragment>
						}
						onChange={(newValue) => setFormData(newValue)}
						onSubmit={onSubmit}
					></Form>
				</div>
			</section>
		</Fragment>
	);
};

export default FromHome;
