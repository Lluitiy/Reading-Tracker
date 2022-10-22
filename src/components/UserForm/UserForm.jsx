import { Formik, Form } from 'formik';
import userInput from 'components/UserFormItem';
import {
	Page,
	FormBox,
	Button,
	NavBox,
	NavText,
	NavLogin,
} from './UserForm.styled';

export default function UserForm({
	onSubmitForm,
	initialValues,
	validationSchema,
	formType,
	navigate,
	text,
	variant,
}) {
	// UserForm
	return (
		<Page>
			<FormBox>
				<Formik
					onSubmit={onSubmitForm}
					initialValues={initialValues}
					validationSchema={validationSchema}
				>
					<Form>
						{Object.keys(initialValues).map(key =>
							userInput({ name: key, formType })
						)}
						<Button type="submit">{formType}</Button>

						<NavBox>
							<NavText>{text}</NavText>
							<NavLogin to={navigate}>{variant}</NavLogin>
						</NavBox>
					</Form>
				</Formik>
			</FormBox>
		</Page>
	);
}
