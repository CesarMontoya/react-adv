import { Formik, Form } from "formik";
import { MyInputText, MySelect } from "../components";
import formJson from "../data/custom-form.json";
import * as Yup from "yup";

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
	initialValues[input.name] = input.value;

	if (!input.validations) continue;

	let schema = Yup.string();

	for (const rule of input.validations) {
		if (rule.type === "required") {
			schema = schema.required("este campo es requerido");
		}
		if (rule.type === "min") {
			schema = schema.min((rule as any).value || 2, `Debe escribir al menos ${(rule as any).value || 2} caracteres`);
		}
		if (rule.type === "email") {
			schema = schema.email("Debe escribir un correo válido");
		}
	}

	requiredFields[input.name] = schema;
}

const validationSchema = Yup.object(requiredFields);

export const DynamicForm = () => {
	return (
		<div>
			<h1>DynamicForm</h1>

			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={(values) => {
					console.log(values);
				}}
			>
				{(formik) => (
					<Form noValidate>
						{formJson.map(({ type, name, placeholder, label, options }) => {
							if (type === "input" || type === "password" || type === "email") {
								return (
									<MyInputText type={type as any} name={name} placeholder={placeholder} label={label} key={name} />
								);
							} else if (type === "select") {
								return (
									<MySelect label={label} name={name} placeholder={placeholder} key={name}>
										<option value="">Select an Option</option>
										{options?.map((option, key) => {
											return (
												<option value={option.id} key={option.id}>
													{option.label}
												</option>
											);
										})}
									</MySelect>
								);
							}

							throw new Error(`El type: ${type} no es soportado`);
						})}
						<button type="submit">Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
