// import Calender from 'components/Calender/Calender';
import MyGoals from 'components/MyGoals/MyGoals';
import MyTraining from 'components/MyTraining/MyTraining';
import TrainingBookList from 'components/TrainingBookList/TrainingBookList';
import { Container } from './StartTrainningWrapper.styled';
import { showResultsSection } from 'Redux/Planning/planningSelectors';
import {  useSelector } from 'react-redux';


const StartTrainningWrapper = () => {

	const showResults = useSelector(showResultsSection)

	return (
		<Container>
			<div>
				{/* <Calender /> */}
				{!showResults && < MyTraining />}
				<TrainingBookList />
			</div>
			<MyGoals />
		</Container>
	);
};

export default StartTrainningWrapper;
