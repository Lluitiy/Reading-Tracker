import MyGoals from 'components/MyGoals/MyGoals';
import MyTraining from 'components/MyTraining/MyTraining';
import TrainingBookList from 'components/TrainingBookList/TrainingBookList';
import { Container } from './StartTrainningWrapper.styled';

const StartTrainningWrapper = () => {
	return (
		<Container>
			<div>
				<MyTraining />
				<TrainingBookList />
			</div>
			<MyGoals />
		</Container>
	);
};

export default StartTrainningWrapper;
