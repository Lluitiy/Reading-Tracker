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
import useTranslation from 'Hooks/useTranslations';

function LoginPage() {
	const translation = useTranslation();
	const { onSubmitForm } = useLoginUser();

	return (
		<Container>
			<Wrapper>
				<FormBox>
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
		</Container>
	);
}

export default LoginPage;
