import React, { ReactFragment } from "react";

export interface FormValue {
	[Key: string]: any;
}
interface Props {
	value: FormValue;
	fields: Array<{ name: string; lable: string; input: { type: string } }>;
	buttons: ReactFragment;
	onSubmit: React.FormEventHandler<HTMLFormElement>;
	onChange: (value: FormValue) => void;
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
	return (
		<form onSubmit={onSubmit}>
			{props.fields.map((field) => (
				<div key={field.name}>
					<label>
						{field.lable}
						<input
							type={field.input.type}
							value={formData[field.name]}
							onChange={(e) => onInputChange(field.name, e.target.value)}
						/>
					</label>
				</div>
			))}
			{props.buttons}
		</form>
	);
};

export default Form;
