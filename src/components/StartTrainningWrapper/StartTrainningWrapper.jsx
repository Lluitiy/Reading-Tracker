import MyGoals from 'components/MyGoals/MyGoals';
import MyTraining from 'components/MyTraining/MyTraining';
import TrainingBookList from 'components/TrainingBookList/TrainingBookList';
import { useMediaQuery } from 'react-responsive';
import { Container } from './StartTrainningWrapper.styled';

// import { useSelector } from 'react-redux';

const StartTrainningWrapper = () => {
	const isDesktopOrTablet = useMediaQuery({ minWidth: 768 });
console.log(isDesktopOrTablet)
	return (
		<Container>
			<div className='fuck'>
				<MyTraining />
				<TrainingBookList isMobile={ !isDesktopOrTablet} />
			</div >
			<MyGoals />
		</Container>
	);
};

export default StartTrainningWrapper;
