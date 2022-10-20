import React from 'react';
import DateTimeDisplay from './DateTimeDisplay/DateTimeDisplay';
import { useCountdown } from 'Hooks/useCountdown';

import { Wrap, Counter, Title, Dots } from './CountdownTimer.styled.jsx';

const CountdownTimer = ({ targetDate, title }) => {
	const [days, hours, minutes, seconds] = useCountdown(targetDate);

	if (days + hours + minutes + seconds <= 0) {
		return <p>TIME IS GONE</p>;
	} else {
		return (
			<Wrap>
				<Title>{title}</Title>
				<Counter>
					<DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
					<Dots>:</Dots>
					<DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
					<Dots>:</Dots>
					<DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
					<Dots>:</Dots>
					<DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
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
