// import useTranslation from 'Hooks/useTranslations';

import { ErrorMessage } from 'formik';
import {
	Input,
	InputField,
	Label,
	FieldInput,
	Error,
} from './UserFormItem.styled';

export default function userInput({ name }) {
	const getType = () => {
		switch (name) {
			case 'name':
				return 'text';

			case 'email':
				return 'email';

			case 'password':
				return 'password';

			case 'confirm':
				return 'password';

			default:
				return 'text';
		}
	};

	const getTitle = () => {
		switch (name) {
			case 'name':
				return `Name\u002a`;

			case 'email':
				return 'Email\u002a';

			case 'password':
				// return formType === 'login' ? 'Your password?' : 'Create a password!';
				return 'Password\u002a';

			case 'confirm':
				return 'Confirm password\u002a';

			default:
				return 'text';
		}
	};

	const getPlaceholder = () => {
		switch (name) {
			case 'name':
				return '...';

			case 'email':
				return 'qwyour@email.com';

			case 'password':
				return '...';

			case 'confirm':
				return '...';

			default:
				return 'text';
		}
	};

	// Input UserForm
	return (
		<Input key={name}>
			<InputField>
				<Label>{getTitle()}</Label>
				<FieldInput
					type={getType()}
					name={name}
					placeholder={getPlaceholder()}
				/>
				<ErrorMessage
					name={name}
					render={message => <Error>{message}</Error>}
				/>
			</InputField>
		</Input>
	);
}
