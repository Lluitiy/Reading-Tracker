// import { Section } from 'components/Common/Common.styled';
import { Link } from 'react-router-dom';
import { Text, Span, Container } from './Footer.styled';

const Footer = () => {
	return (
		// <Section>
		<Container>
			<Text>
				"Books Reading" by
				<Link to="/team">
					<Span> TeamSlice</Span>
				</Link>
			</Text>
		</Container>
		//</Section>
	);
};

export default Footer;
