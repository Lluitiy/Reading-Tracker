import UserForm from 'components/UserForm';
import useLoginUser from 'Hooks/useLoginUser';
import { userLoginSchema } from 'Utils/validSchema';

function LoginPage() {
	const { onSubmitForm } = useLoginUser();

	return (
		<UserForm
			onSubmitForm={onSubmitForm}
			validationSchema={userLoginSchema}
			initialValues={{ email: '', password: '' }}
			formType="login"
		/>
	);
}

export default LoginPage;
