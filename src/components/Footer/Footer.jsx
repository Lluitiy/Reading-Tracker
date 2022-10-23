import { Link } from 'react-router-dom';
import { Text, Span, Container } from './Footer.styled';
import useTranslation from 'Hooks/useTranslations';
import Settings from 'components/Settings/Settings';

const Footer = () => {
	const translation = useTranslation();
	return (
		<Container>
			<Text>
				{translation.team.footerText}
				<Link to="/team">
					<Span> TeamSlice</Span>
				</Link>
			</Text>
			<Settings />
		</Container>
	);
};

export default Footer;
