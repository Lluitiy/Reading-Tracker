import { Section, Container } from 'components/Common/Common.styled';
import { Img, ButtonWrap } from './NotFoundComponent.styled';
import Button from 'components/Button/Button';
import NotFoundPic from '../../Assets/png/notFound.png';

const NotFoundComponent = () => {
	return (
		<Section>
			<Container>
				<Img src={NotFoundPic} alt="Not Found" />
				<ButtonWrap>
					<Button>Library</Button>
					<Button>Training</Button>
				</ButtonWrap>
			</Container>
		</Section>
	);
};

export default NotFoundComponent;
