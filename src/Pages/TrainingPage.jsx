import StartTrainningWrapper from 'components/StartTrainningWrapper/StartTrainningWrapper';
import { Container } from 'components/Common/Common.styled';
import { Section } from 'components/Common/Common.styled';
import Statistics from 'components/Statistics/Statistics';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentPlanning } from 'Redux/Planning/planningOperations';

const TrainingPage = () => {
	//! Лера - при загрузке этой страницы мне нужно получить данные с сервера
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCurrentPlanning());
	}, [dispatch]);

	return (
		<Section>
			<Container>
				<StartTrainningWrapper />
				<Statistics />
			</Container>
		</Section>
	);
};
export default TrainingPage;
