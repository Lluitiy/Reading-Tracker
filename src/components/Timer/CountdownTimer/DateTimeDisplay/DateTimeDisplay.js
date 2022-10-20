import React from 'react';
import { Numbers, Date } from './DateTimeDisplay.styled';

const DateTimeDisplay = ({ value, type }) => {
	return (
		<div>
			<Numbers>{value}</Numbers>
			<Date>{type}</Date>
		</div>
	);
};

export default DateTimeDisplay;
