import { NavLink } from 'react-router-dom';
import { Container } from 'components/Common/Common.styled';
import { ReactComponent as AngleQuote } from 'Assets/svg/angleQuote.svg';
import useTranslation from 'Hooks/useTranslations';
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
	const translation = useTranslation();
	return (
		<Container>
			<Section>
				<Title>Books Reading</Title>
				<List>
					<MainListItem>
						<Subtitle>{translation.header.title1}</Subtitle>
						<List>
							<ListItem>
								<IconWrapper>
									<AngleQuote />
								</IconWrapper>
								<Text>{translation.header.p1}</Text>
							</ListItem>
							<ListItem>
								<IconWrapper>
									<AngleQuote />
								</IconWrapper>
								<Text>{translation.header.p2}</Text>
							</ListItem>
							<ListItem>
								<IconWrapper>
									<AngleQuote />
								</IconWrapper>
								<Text>{translation.header.p3}</Text>
							</ListItem>
						</List>
					</MainListItem>
					<MainListItem>
						<Subtitle>{translation.header.title1}</Subtitle>
						<List>
							<ListItem>
								<IconWrapper>
									<AngleQuote />
								</IconWrapper>
								<Text>{translation.header.p4}</Text>
							</ListItem>
							<ListItem>
								<IconWrapper>
									<AngleQuote />
								</IconWrapper>
								<Text>{translation.header.p5}</Text>
							</ListItem>
							<ListItem>
								<IconWrapper>
									<AngleQuote />
								</IconWrapper>
								<Text>{translation.header.p6}</Text>
							</ListItem>
						</List>
					</MainListItem>
				</List>
				<ButtonList>
					<li>
						<NavLink to="/login" exact="true">
							<LoginButton>{translation.header.mobBtnLog}</LoginButton>
						</NavLink>
					</li>
					<li>
						<NavLink to="/register" exact="true">
							<RegisterButton>{translation.header.mobBtnReg}</RegisterButton>
						</NavLink>
					</li>
				</ButtonList>
			</Section>
		</Container>
	);
}
