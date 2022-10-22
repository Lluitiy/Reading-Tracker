import { getIsLoggedIn } from 'Redux/Auth/authSelectors';
import { useSelector } from 'react-redux';

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
	const isLoggedIn = useSelector(getIsLoggedIn);

	return (
		<Section>
			<NotFoundWrap>
				<Img src={NotFoundPicSmall} alt="Not Found" />
				<Title>We are sorry</Title>
				<Text>We seem to have lost this page, try one of these instead.</Text>
				{isLoggedIn ? (
					<ButtonWrap>
						<Link to="/library">
							<Button>Library</Button>
						</Link>
						<Link to="/training">
							<SecondButton>Training</SecondButton>
						</Link>
					</ButtonWrap>
				) : (
					<ButtonWrap>
						<Link to="/login">
							<Button>Login</Button>
						</Link>
						<Link to="/register">
							<SecondButton>Registration</SecondButton>
						</Link>
					</ButtonWrap>
				)}
			</NotFoundWrap>
		</Section>
	);
};

export default NotFoundComponent;
