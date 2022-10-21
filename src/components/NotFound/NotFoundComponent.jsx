import { Section } from 'components/Common/Common.styled';
import { Link } from 'react-router-dom';
import {
	Img,
	ButtonWrap,
	NotFoundWrap,
	Button,
	SecondButton,
	Title,
	Text,
} from './NotFoundComponent.styled';

import NotFoundPicSmall from '../../Assets/png/404-img.png';

const NotFoundComponent = () => {
	return (
		<Section>
			<NotFoundWrap>
				<Img src={NotFoundPicSmall} alt="Not Found" />
				<Title>We are sorry</Title>
				<Text>We seem to have lost this page, try one of these instead.</Text>
				<ButtonWrap>
					<Link to="/library">
						<Button>Library</Button>
					</Link>
					<Link to="/training">
						<SecondButton>Training</SecondButton>
					</Link>
				</ButtonWrap>
			</NotFoundWrap>
		</Section>
	);
};

export default NotFoundComponent;
