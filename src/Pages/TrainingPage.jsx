import MyGoals from 'components/MyGoals/MyGoals';
import { Container } from 'components/Common/Common.styled';
import { Section } from 'components/Common/Common.styled';
import MyTraining from './../components/MyTraining/MyTraining';
import Statistics from 'components/Statistics/Statistics';
import TrainingBookList from 'components/TrainingBookList/TrainingBookList';


const TrainingPage = () => {

	return (
		<Section>
			<Container>
				<div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
					<div>
						<MyTraining />
						<TrainingBookList />
					</div>
					<MyGoals />
				</div>
				<Statistics />
			</Container>
		</Section>
	);
};
export default TrainingPage;
