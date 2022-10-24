import React from 'react';
import DateTimeDisplay from './DateTimeDisplay/DateTimeDisplay';
import { useCountdown } from 'Hooks/useCountdown';
import useTranslation from 'Hooks/useTranslations';

import { Wrap, Counter, Title, Dots } from './CountdownTimer.styled.jsx';

const CountdownTimer = ({ targetDate, title }) => {
	const translation = useTranslation();
	const [days, hours, minutes, seconds] = useCountdown(targetDate);

	if (days + hours + minutes + seconds <= 0) {
		return <p>TIME IS GONE</p>;
	} else {
		return (
			<Wrap>
				<Title>{title}</Title>
				<Counter>
					<DateTimeDisplay
						value={days}
						type={translation.timer.days}
						isDanger={days <= 3}
					/>
					<Dots>:</Dots>
					<DateTimeDisplay
						value={hours}
						type={translation.timer.hours}
						isDanger={false}
					/>
					<Dots>:</Dots>
					<DateTimeDisplay
						value={minutes}
						type={translation.timer.min}
						isDanger={false}
					/>
					<Dots>:</Dots>
					<DateTimeDisplay
						value={seconds}
						type={translation.timer.sec}
						isDanger={false}
					/>
				</Counter>
			</Wrap>
		);
	}
};

export default CountdownTimer;

// import React from 'react';
// import CountdownTimer from './CountdownTimer';

// import './App.css';

// export default function App() {
//   const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
//   const NOW_IN_MS = new Date().getTime();

//   const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

//   return (
//     <div>
//       <h1>Countdown Timer</h1>
//       <CountdownTimer targetDate={dateTimeAfterThreeDays} />
//     </div>
//   );
// }
