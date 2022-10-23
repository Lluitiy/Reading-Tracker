import { Section } from 'components/Common/Common.styled';
import {
	Img,
	ButtonWrap,
	NotFoundWrap,
	Button,
	Title,
	Text,
} from './NotFoundComponent.styled';
import useTranslation from 'Hooks/useTranslations';

import NotFoundPicSmall from '../../Assets/png/404-img.png';

const NotFoundComponent = () => {
	const translation = useTranslation();

	return (
		<Section>
			<NotFoundWrap>
				<Img src={NotFoundPicSmall} alt="Not Found" />
				<Title>{translation.notFound.title}</Title>
				<Text>{translation.notFound.text}</Text>
				<ButtonWrap>
					<Button type="submit">{translation.notFound.btnBack}</Button>
				</ButtonWrap>
			</NotFoundWrap>
		</Section>
	);
};

export default NotFoundComponent;
