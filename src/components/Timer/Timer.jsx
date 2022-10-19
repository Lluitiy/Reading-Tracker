import CountdownTimer from '../Timer/CountdownTimer/CountdownTimer';
// import { Wrap } from './Timer.styled.jsx';
import { Section } from 'components/Common/Common.styled';
import { TimerContainer } from './Timer.styled';

const Timer = () => {
	const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
	const NOW_IN_MS = new Date().getTime();

	const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

	return (
		<Section>
			<TimerContainer>
				<CountdownTimer
					title="Years countdown"
					targetDate={dateTimeAfterThreeDays}
				></CountdownTimer>
				<CountdownTimer
					title="Goals countdown"
					targetDate={dateTimeAfterThreeDays}
				></CountdownTimer>
			</TimerContainer>
		</Section>
	);
};

export default Timer;
