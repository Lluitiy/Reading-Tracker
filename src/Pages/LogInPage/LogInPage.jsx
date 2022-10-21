import UserForm from 'components/UserForm';
import useLoginUser from 'Hooks/useLoginUser';
import { Container } from 'components/Common/Common.styled';
import { userLoginSchema } from 'Utils/validSchema';
import {
	GoogleButton,
	TextGoogleButton,
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
					<GoogleButton type="button">
						<a href="https://bookread-backend.goit.global/auth/google">
							<TextGoogleButton>Google</TextGoogleButton>
						</a>
					</GoogleButton>
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
