import { Link } from 'react-router-dom';
import { Text, Span, Container } from './Footer.styled';
import useTranslation from 'Hooks/useTranslations';

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
		</Container>
	);
};

export default Footer;
