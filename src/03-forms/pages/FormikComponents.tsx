import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";

export const FormikComponents = () => {
	return (
		<div>
			<h1>Formik Components</h1>

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
						<label htmlFor="firstName">First Name</label>
						<Field name="firstName" type="text" required />
						<ErrorMessage name="firstName" component="span" />

						<label htmlFor="lastName">Last Name</label>
						<Field name="lastName" type="text" required />
						<ErrorMessage name="lastName" component="span" />

						<label htmlFor="email">Email</label>
						<Field name="email" type="text" required />
						<ErrorMessage name="email" component="span" />

						<label htmlFor="type">Job Type</label>
						<Field name="jobType" as="select" required>
							<option value="">Pick something</option>
							<option value="Develper">Developer</option>
							<option value="Designer">Designer</option>
							<option value="it-jr">IT Junior</option>
							<option value="it-sr">IT Senior</option>
						</Field>
						<ErrorMessage name="jobType" component="span" />

						<label>
							<Field name="terms" type="checkbox" required />
							Terms and Conditions
						</label>

						<ErrorMessage name="terms" component="span" />

						<button type="submit">Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
