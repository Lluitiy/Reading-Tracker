import { useMediaQuery } from 'react-responsive';
import { Container } from 'components/Common/Common.styled';
import UserForm from 'components/UserForm';
import userRegisterUser from 'Hooks/useRegisterUser';
import { userRegisterSchema } from 'Utils/validSchema';
import {
	Wrapper,
	FormBox,
	TextBox,
	Title,
	List,
	MainListItem,
	Subtitle,
	ListItem,
} from './RegisterPage.styled';

function RegisterPage() {
	const { onSubmitForm } = userRegisterUser();

	const isTablet = useMediaQuery({
		query: '(min-width: 768px)',
	});
	return (
		<Container>
			<Wrapper>
				<FormBox>
					<UserForm
						onSubmitForm={onSubmitForm}
						validationSchema={userRegisterSchema}
						initialValues={{
							name: '',
							email: '',
							password: '',
							confirm: '',
						}}
						formType="Register"
						text="Are you with us?"
						variant="login"
						navigate="/login"
					/>
				</FormBox>

				{isTablet && (
					<TextBox>
						<Title>Books Reading</Title>
						<List>
							<MainListItem>
								<Subtitle>Will help you to</Subtitle>
								<List>
									<ListItem>
										Create your goal faster and proceed to read
									</ListItem>
									<ListItem>
										Divide process proportionally for each day
									</ListItem>
									<ListItem>Track your success</ListItem>
								</List>
							</MainListItem>
							<MainListItem>
								<Subtitle>You may also </Subtitle>
								<List>
									<ListItem>Pose your own independent point of view</ListItem>
									<ListItem>
										Improve your professional skills according to new knowledge
									</ListItem>
									<ListItem>Become an interesting interlocutor</ListItem>
								</List>
							</MainListItem>
						</List>
					</TextBox>
				)}
			</Wrapper>
		</Container>
	);
}

export default RegisterPage;
