import { useMediaQuery } from 'react-responsive';
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
import useTranslation from 'Hooks/useTranslations';

function RegisterPage() {
	const translation = useTranslation();
	const { onSubmitForm } = userRegisterUser();

	const isTablet = useMediaQuery({
		query: '(min-width: 768px)',
	});
	return (
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
					formType={translation.register.register}
					text={translation.register.text}
					variant={translation.register.login}
					navigate="/login"
				/>
			</FormBox>
			{isTablet && (
				<TextBox>
					<Title>Books Reading</Title>
					<List>
						<MainListItem>
							<Subtitle>{translation.header.title1}</Subtitle>
							<List>
								<ListItem>{translation.header.p1}</ListItem>
								<ListItem>{translation.header.p2}</ListItem>
								<ListItem>{translation.header.p3}</ListItem>
							</List>
						</MainListItem>
						<MainListItem>
							<Subtitle>{translation.header.title2}</Subtitle>
							<List>
								<ListItem>{translation.header.p4}</ListItem>
								<ListItem>{translation.header.p5}</ListItem>
								<ListItem>{translation.header.p6}</ListItem>
							</List>
						</MainListItem>
					</List>
				</TextBox>
			)}
		</Wrapper>
	);
}

export default RegisterPage;
