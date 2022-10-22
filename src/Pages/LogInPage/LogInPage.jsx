import UserForm from 'components/UserForm';
import useLoginUser from 'Hooks/useLoginUser';
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
import useTranslation from 'Hooks/useTranslations';

function LoginPage() {
	const translation = useTranslation();
	const { onSubmitForm } = useLoginUser();

	return (
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
					formType={translation.register.login}
					variant={translation.register.register}
					navigate="/register"
				/>
			</FormBox>
			<TextBox>
				<Mark />
				<Text>{translation.header.quote}</Text>
				<Border />
				<Author>{translation.header.author}</Author>
			</TextBox>
		</Wrapper>
	);
}

export default LoginPage;
