import UserForm from 'components/UserForm';
import useLoginUser from 'Hooks/useLoginUser';
import { Container } from 'components/Common/Common.styled';
import { userLoginSchema } from 'Utils/validSchema';
import {
	Wrapper,
	FormBox,
	Text,
	Author,
	TextBox,
	Mark,
	Border,
} from './LogInPage.styled';

function LoginPage() {
	const { onSubmitForm } = useLoginUser();

	return (
		<Container>
			<Wrapper>
				<FormBox>
					<UserForm
						onSubmitForm={onSubmitForm}
						validationSchema={userLoginSchema}
						initialValues={{ email: '', password: '' }}
						formType="login"
						variant="register"
						navigate="/register"
					/>
				</FormBox>

				<TextBox>
					<Mark />
					<Text>
						Books are the ships of thoughts, wandering through the waves of
						time.
					</Text>
					<Border />
					<Author>Francis Bacon</Author>
				</TextBox>
			</Wrapper>
		</Container>
	);
}

export default LoginPage;
