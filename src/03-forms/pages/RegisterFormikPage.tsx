import "../styles/styles.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyInputText } from "../components";

export const RegisterFormikPage = () => {
	return (
		<div>
			<h1>Register Formik Page</h1>

			<Formik
				initialValues={{ name: "", email: "", password1: "", password2: "" }}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={Yup.object({
					name: Yup.string()
						.min(2, "El nombre debe tener al menos dos caracteres")
						.max(15, "El nombre debe tener máximo 15 caracteres")
						.required("Requerido"),
					email: Yup.string().email().required("Requerido"),
					password1: Yup.string().min(6, "La contraseña debe tener al menos 6 caracteres").required("Requerido"),
					password2: Yup.string()
						.oneOf([Yup.ref("password1")], "Las contraseñas deben ser iguales")
						.required("Requerido"),
				})}
			>
				{({ handleReset }) => (
					<Form>
						<MyInputText label="Name" name="name" placeholder="Fernando" />
						<MyInputText label="Email" name="email" placeholder="fernando@gmail.com" />
						<MyInputText label="Password1" name="password1" type="password" />
						<MyInputText label="Password2" name="password2" type="password" />

						<button type="submit">Register</button>
						<button type="button" onClick={handleReset}>
							Reset
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
