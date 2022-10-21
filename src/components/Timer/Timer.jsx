import CountdownTimer from '../Timer/CountdownTimer/CountdownTimer';
// import { Wrap } from './Timer.styled.jsx';
import { Section } from 'components/Common/Common.styled';
import { TimerContainer } from './Timer.styled';
import useTranslation from 'Hooks/useTranslations';

const backend = {
	startDate: '2020-12-31',
	endDate: '2022-11-05',
};

const Timer = () => {
	const translation = useTranslation();
	const GET_EN_YEAR = new Date().getFullYear() + '-12-31';
	const END_YEAR_MS = new Date(GET_EN_YEAR).getTime();

	const END_TRAINING_MS = new Date(backend.endDate).getTime();

	return (
		<Section>
			<TimerContainer>
				<CountdownTimer
					title={translation.timer.title1}
					targetDate={END_YEAR_MS}
				></CountdownTimer>
				<CountdownTimer
					title={translation.timer.title2}
					targetDate={END_TRAINING_MS}
				></CountdownTimer>
			</TimerContainer>
		</Section>
	);
};

export default Timer;

// !______ Для тестів________

// import Timer from 'components/Timer/Timer';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { getcurrentPlanning } from 'Redux/Planning/planningOperations';

// const HomePage = () => {
// 	const dispatch = useDispatch();

// 	// useEffect(() => {
// 	// 	dispatch(getcurrentPlanning());

// 	// 	// eslint-disable-next-line
// 	// }, []);

// 	return (
// 		<div>
// 			<Timer />
// 		</div>
// 	);
// };

// export default HomePage;

// !___________Mail for tests____________

// simpson@mail.ua
// Simpson123123
