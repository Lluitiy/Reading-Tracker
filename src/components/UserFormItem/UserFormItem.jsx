import { Field, ErrorMessage } from 'formik';

export default function userInput({ name, formType }) {
	const getType = () => {
		switch (name) {
			case 'name':
				return 'text';

			case 'email':
				return 'email';

			case 'password':
				return 'password';

			case 'confirm-password':
				return 'password';

			default:
				return 'text';
		}
	};

	const getTitle = () => {
		switch (name) {
			case 'name':
				return 'What is your name?';

			case 'email':
				return 'Your e-mail adress?';

			case 'password':
				return formType === 'login' ? 'Your password?' : 'Create a password!';

			case 'confirm-password':
				return 'Your password?';

			default:
				return 'text';
		}
	};
	// Input UserForm
	return (
		<label key={name}>
			<span>{getTitle()}</span>
			<Field type={getType()} name={name} />
			<ErrorMessage name={name} render={message => <p>{message}</p>} />
		</label>
	);
}
