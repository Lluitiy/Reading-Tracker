import { Link } from 'react-router-dom';
import { Text, Span, FooterWrap, Wrap } from './Footer.styled';
import { Container } from 'components/Common/Common.styled';
import useTranslation from 'Hooks/useTranslations';
import Settings from 'components/Settings/Settings';

const Footer = () => {
	const translation = useTranslation();
	return (
		<FooterWrap>
			<Container>
				<Wrap>
					<Text>
						{translation.team.footerText}
						<Link to="/team">
							<Span> TeamSlice</Span>
						</Link>
					</Text>
					<Settings />
				</Wrap>
			</Container>
		</FooterWrap>
	);
};

export default Footer;
