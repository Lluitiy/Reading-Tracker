import MyGoals from 'components/MyGoals/MyGoals';
import { Container } from 'components/Common/Common.styled';
import { Section } from 'components/Common/Common.styled';
import MyTraining from './../components/MyTraining/MyTraining';
const TrainingPage = () => {
	return (
		<Section>
			<Container
			// style={{ display: 'flex' }}
			>
				<MyTraining />
				<MyGoals />
			</Container>
		</Section>
	);
};
export default TrainingPage;
