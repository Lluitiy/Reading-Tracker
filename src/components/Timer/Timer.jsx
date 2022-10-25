import CountdownTimer from '../Timer/CountdownTimer/CountdownTimer';
import { TimerContainer } from './Timer.styled';
import useTranslation from 'Hooks/useTranslations';
import { useSelector } from 'react-redux';
import { endDate } from 'Redux/Planning/planningSelectors';

const Timer = () => {
	const translation = useTranslation();
	const endDateTimer = useSelector(endDate);
	const GET_EN_YEAR = new Date().getFullYear() + '-12-31';

	const userOffset = new Date().getTimezoneOffset() * 60 * 1000;

	const localDateEndYear = new Date(GET_EN_YEAR).getTime();
	const END_YEAR_MS = new Date(localDateEndYear + userOffset);

	const localDate = new Date(endDateTimer).getTime();
	const END_TRAINING_MS = new Date(localDate + userOffset);

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
