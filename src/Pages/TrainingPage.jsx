import MyGoals from 'components/MyGoals/MyGoals';
import { Container } from 'components/Common/Common.styled';
import { Section } from 'components/Common/Common.styled';
import MyTraining from './../components/MyTraining/MyTraining';
import Statistics from 'components/Statistics/Statistics';
import Timer from 'components/Timer/Timer';
const TrainingPage = () => {
	return (
		<Section>
			<Container
			// style={{ display: 'flex' }}
			>
				
				<MyTraining />
				<Timer/>
				<MyGoals />
				
				<Statistics/>
			</Container>
		</Section>
	);
};
export default TrainingPage;
