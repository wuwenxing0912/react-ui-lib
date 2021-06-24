import React, { ReactFragment } from "react";
import Input from "../input/input";
import classes from "../helpers/classes";
import "./form.scss";

export interface FormValue {
	[Key: string]: any;
}
interface Props {
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
	return (
		<form onSubmit={onSubmit} className={className}>
			<table className="form-table">
				<tbody>
					{props.fields.map((field) => (
						<tr key={field.name}>
							<td className="td-lable">
								<label htmlFor={field.name}>{field.lable}</label>
							</td>
							<td className="td-input">
								<Input
									id={field.name}
									type={field.input.type}
									value={formData[field.name]}
									onChange={(e) => onInputChange(field.name, e.target.value)}
								/>
								<div>{props.errors[field.name]}</div>
							</td>
						</tr>
					))}
					<tr>
						<td className="td-buttons-fill"></td>
						<td className="td-buttons">{props.buttons}</td>
					</tr>
				</tbody>
			</table>
		</form>
	);
};

export default Form;
