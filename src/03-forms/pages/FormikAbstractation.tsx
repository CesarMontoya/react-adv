import { Formik, Form } from "formik";
import * as Yup from "yup";

import { MyCheckbox, MyInputText, MySelect } from "../components";

import "../styles/styles.css";

export const FormikAbstractation = () => {
	return (
		<div>
			<h1>Formik Abstractation</h1>

			<Formik
				initialValues={{
					firstName: "",
					lastName: "",
					email: "",
					terms: false,
					jobType: "",
				}}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={Yup.object({
					firstName: Yup.string().max(15, "Debe tener 15 caracteres o menos").required("Requerido"),
					lastName: Yup.string().max(15, "Debe tener 15 caracteres o menos").required("Requerido"),
					email: Yup.string().email().required("Requerido"),
					terms: Yup.boolean().oneOf([true], "Debe aceptar las condiciones"),
					jobType: Yup.string().notOneOf(["it-jr"], "No está disponible para esta opción").required(),
				})}
			>
				{(formik) => (
					<Form>
						<MyInputText label="First Name" name="firstName" placeholder="Fernando" />
						<MyInputText label="Last Name" name="lastName" placeholder="Herrera" />
						<MyInputText label="email" name="email" placeholder="Fernando@gmail.com" type="email" />

						<MySelect label="Job Type" name="jobType" as="select" required>
							<option value="">Pick something</option>
							<option value="Develper">Developer</option>
							<option value="Designer">Designer</option>
							<option value="it-jr">IT Junior</option>
							<option value="it-sr">IT Senior</option>
						</MySelect>

						<MyCheckbox label="Terms and Conditions" name="terms" />

						<button type="submit">Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
