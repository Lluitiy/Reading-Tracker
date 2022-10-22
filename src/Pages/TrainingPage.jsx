import MyGoals from 'components/MyGoals/MyGoals';
import { Container } from 'components/Common/Common.styled';
import { Section } from 'components/Common/Common.styled';
import MyTraining from './../components/MyTraining/MyTraining';
import Statistics from 'components/Statistics/Statistics';
import TrainingBookList from 'components/TrainingBookList/TrainingBookList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentPlanning } from 'Redux/Planning/planningOperations';
// import Timer from 'components/Timer/Timer';
const TrainingPage = () => {
	
//! Лера - при загрузке этой страницы мне нужно получить данные с сервера
	const dispatch = useDispatch();
	
	useEffect(() => {
		dispatch(getCurrentPlanning());
	}, [dispatch]);

	
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
				{/* <Timer /> */}
				<Statistics />
			</Container>
		</Section>
	);
};
export default TrainingPage;
