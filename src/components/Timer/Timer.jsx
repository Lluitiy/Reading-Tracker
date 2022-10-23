import CountdownTimer from '../Timer/CountdownTimer/CountdownTimer';
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
	);
};

export default Timer;

// !___________Mail for tests____________

// simpson@mail.ua
// Simpson123123
