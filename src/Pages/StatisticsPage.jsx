import Timer from 'components/Timer/Timer';
import TrainingBookList from 'components/TrainingBookList/TrainingBookList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentPlanning } from 'Redux/Planning/planningOperations';
import Results from '../components/Results/Results';

const StatisticsPage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCurrentPlanning());
	}, [dispatch]);
	return (
		<div>
			<Timer />
			<TrainingBookList />
			<Results />
		</div>
	);
};

export default StatisticsPage;
