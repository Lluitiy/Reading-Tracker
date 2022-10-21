import { Link } from 'react-router-dom';
import { Text, Span, Container } from './Footer.styled';

const Footer = () => {
	return (
		<Container>
			<Text>
				"Books Reading" by
				<Link to="/team">
					<Span> TeamSlice</Span>
				</Link>
			</Text>
		</Container>
	);
};

export default Footer;
