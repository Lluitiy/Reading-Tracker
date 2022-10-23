import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';
import { TextField } from '@mui/material';
const Calender = () => {
	const [value, setValue] = useState('2022-10-23');

	return (
		<form>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<DatePicker
					label="Result"
					value={value}
					onChange={newValue => {
						setValue(newValue);
					}}
					renderInput={params => <TextField {...params} />}
				/>
			</LocalizationProvider>
		</form>
	);
};

export default Calender;
