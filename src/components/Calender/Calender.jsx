import { useState } from 'react';
import { DatePicker } from 'react-rainbow-components';

const Calender = () => {
	const [date, setDate] = useState(new Date('2019-10-25 10:44'));

	return (
		<div style={{ width: '280px' }}>
			<DatePicker
				id="datePicker-1"
				value={date}
				onChange={value => setDate({ date: value })}
				hideLabel={true}
				formatStyle="large"
			/>
		</div>
	);
};

export default Calender;
