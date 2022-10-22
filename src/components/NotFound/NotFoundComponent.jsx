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
import useTranslation from 'Hooks/useTranslations';

import NotFoundPicSmall from '../../Assets/png/404-img.png';

const NotFoundComponent = () => {
	const isLoggedIn = useSelector(getIsLoggedIn);
	const translation = useTranslation();

	return (
		<Section>
			<NotFoundWrap>
				<Img src={NotFoundPicSmall} alt="Not Found" />
				<Title>{translation.notFound.title}</Title>
				<Text>{translation.notFound.text}</Text>
				{isLoggedIn ? (
					<ButtonWrap>
						<Link to="/library">
							<Button>{translation.notFound.btnLib}</Button>
						</Link>
						<Link to="/training">
							<SecondButton>{translation.notFound.btnTrai}</SecondButton>
						</Link>
					</ButtonWrap>
				) : (
					<ButtonWrap>
						<Link to="/login">
							<Button>{translation.notFound.btnLog}</Button>
						</Link>
						<Link to="/register">
							<SecondButton>{translation.notFound.btnReg}</SecondButton>
						</Link>
					</ButtonWrap>
				)}
			</NotFoundWrap>
		</Section>
	);
};

export default NotFoundComponent;
