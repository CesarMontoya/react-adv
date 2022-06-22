import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import {
	DynamicForm,
	FormikAbstractation,
	FormikBasicPage,
	FormikComponents,
	FormikYupPage,
	RegisterPage,
	RegisterFormikPage,
} from "../03-forms/pages";

import logo from "../logo.svg";

export const Navigation = () => {
	return (
		<BrowserRouter>
			<div className="main-layout">
				<nav>
					<img src={logo} alt="React Logo" />
					<ul>
						<li>
							<NavLink to="/register" className={({ isActive }) => (isActive ? "nav-active" : "")}>
								Register Page
							</NavLink>
						</li>
						<li>
							<NavLink to="/formik-basic" className={({ isActive }) => (isActive ? "nav-active" : "")}>
								Formik Basic Page
							</NavLink>
						</li>
						<li>
							<NavLink to="/formik-yup" className={({ isActive }) => (isActive ? "nav-active" : "")}>
								Fomrik Yup
							</NavLink>
						</li>
						<li>
							<NavLink to="/formik-components" className={({ isActive }) => (isActive ? "nav-active" : "")}>
								Fomrik Components
							</NavLink>
						</li>
						<li>
							<NavLink to="/formik-abstractation" className={({ isActive }) => (isActive ? "nav-active" : "")}>
								Fomrik Abstractation
							</NavLink>
						</li>
						<li>
							<NavLink to="/formik-register" className={({ isActive }) => (isActive ? "nav-active" : "")}>
								Fomrik Register
							</NavLink>
						</li>
						<li>
							<NavLink to="/dynamic-form" className={({ isActive }) => (isActive ? "nav-active" : "")}>
								Dynamic Form
							</NavLink>
						</li>
					</ul>
				</nav>

				<Routes>
					<Route path="register" element={<RegisterPage />} />
					<Route path="formik-basic" element={<FormikBasicPage />} />
					<Route path="formik-yup" element={<FormikYupPage />} />
					<Route path="formik-components" element={<FormikComponents />} />
					<Route path="formik-abstractation" element={<FormikAbstractation />} />
					<Route path="formik-register" element={<RegisterFormikPage />} />
					<Route path="dynamic-form" element={<DynamicForm />} />

					<Route path="/*" element={<Navigate to="/home" replace />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};
