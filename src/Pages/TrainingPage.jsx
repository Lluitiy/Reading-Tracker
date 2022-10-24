import StartTrainningWrapper from 'components/StartTrainningWrapper/StartTrainningWrapper';
import { Container } from 'components/Common/Common.styled';
import { Section } from 'components/Common/Common.styled';
import Statistics from 'components/Statistics/Statistics';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentPlanning } from 'Redux/Planning/planningOperations';
import { showResultsSection } from 'Redux/Planning/planningSelectors';
import Timer from 'components/Timer/Timer';



const TrainingPage = () => {
	//! Лера - при загрузке этой страницы мне нужно получить данные с сервера
	// const dispatch = useDispatch();


	// useEffect(() => {
	// dispatch(getCurrentPlanning()) 
		
	// }, [dispatch]);

	const dispatch = useDispatch();
const showResults = useSelector(showResultsSection)


	useEffect(() => {
		if(showResults){
		dispatch(getCurrentPlanning());
	}
	}, [dispatch,showResults]);


	return (
		<Section>
			<Container>
				{showResults && <Timer />}
				<StartTrainningWrapper />
				<Statistics />
			</Container>
		</Section>
	);
};
export default TrainingPage;
