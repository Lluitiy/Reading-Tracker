import React from 'react';
import { Wrap, Numbers, Date } from './DateTimeDisplay.styled';

const DateTimeDisplay = ({ value, type, isDanger }) => {
	return (
		<Wrap
		// className={isDanger ? 'countdown danger' : 'countdown'}
		>
			<Numbers>{value}</Numbers>
			<Date>{type}</Date>
		</Wrap>
	);
};

export default DateTimeDisplay;
