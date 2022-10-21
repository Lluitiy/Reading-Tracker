import { NavLink } from 'react-router-dom';
import { Container } from 'components/Common/Common.styled';
import { ReactComponent as AngleQuote } from 'Assets/svg/angleQuote.svg';
import {
	Section,
	Title,
	List,
	Subtitle,
	ListItem,
	ButtonList,
	LoginButton,
	RegisterButton,
	MainListItem,
	Text,
	IconWrapper,
} from './MobilPage.styled';

export default function MobilPage() {
	return (
		<Container>
			<Section>
				<Title>Books Reading</Title>
				<List>
					<MainListItem>
						<Subtitle>Will help you to</Subtitle>
						<List>
							<ListItem>
								<IconWrapper>
									<AngleQuote />
								</IconWrapper>
								<Text>Create your goal faster and proceed to read</Text>
							</ListItem>
							<ListItem>
								<IconWrapper>
									<AngleQuote />
								</IconWrapper>
								<Text>Divide process proportionally for each day</Text>
							</ListItem>
							<ListItem>
								<IconWrapper>
									<AngleQuote />
								</IconWrapper>
								<Text>Track your success</Text>
							</ListItem>
						</List>
					</MainListItem>
					<MainListItem>
						<Subtitle>You may also</Subtitle>
						<List>
							<ListItem>
								<IconWrapper>
									<AngleQuote />
								</IconWrapper>
								<Text>Pose your own independent point of view</Text>
							</ListItem>
							<ListItem>
								<IconWrapper>
									<AngleQuote />
								</IconWrapper>
								<Text>
									Improve your professional skills according to new knowledge
								</Text>
							</ListItem>
							<ListItem>
								<IconWrapper>
									<AngleQuote />
								</IconWrapper>
								<Text>Become an interesting interlocutor</Text>
							</ListItem>
						</List>
					</MainListItem>
				</List>
				<ButtonList>
					<li>
						<NavLink to="/login" exact="true">
							<LoginButton>Log in</LoginButton>
						</NavLink>
					</li>
					<li>
						<NavLink to="/register" exact="true">
							<RegisterButton>Register</RegisterButton>
						</NavLink>
					</li>
				</ButtonList>
			</Section>
		</Container>
	);
}
