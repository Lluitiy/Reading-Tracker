import MyGoals from 'components/MyGoals/MyGoals';
import MyTraining from 'components/MyTraining/MyTraining';
import TrainingBookList from 'components/TrainingBookList/TrainingBookList';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { showResultsSection } from 'Redux/Planning/planningSelectors';
import { Container } from './StartTrainningWrapper.styled';

// import { useSelector } from 'react-redux';

const StartTrainningWrapper = () => {
	const isDesktopOrTablet = useMediaQuery({ minWidth: 768 });
	const isShowResultsSection = useSelector(showResultsSection);
	return (
		<Container>
			<div>
				{!isShowResultsSection && <MyTraining />}
				<TrainingBookList isMobile={ !isDesktopOrTablet} />
			</div >
			<MyGoals />
		</Container>
	);
};

export default StartTrainningWrapper;
