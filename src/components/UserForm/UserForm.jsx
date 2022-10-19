import { Formik, Form } from 'formik';

import userInput from 'components/UserFormItem';

export default function UserForm({
	onSubmitForm,
	initialValues,
	validationSchema,
	formType,
}) {
	// UserForm
	return (
		<>
			<Formik
				onSubmit={onSubmitForm}
				initialValues={initialValues}
				validationSchema={validationSchema}
			>
				<Form>
					{Object.keys(initialValues).map(key =>
						userInput({ name: key, formType })
					)}
					<button type="submit">{formType}</button>
				</Form>
			</Formik>
		</>
	);
}
