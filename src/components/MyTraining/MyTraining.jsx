import React, { useEffect, useState } from 'react';
import {
	Title,
	DataInput,
	Select,
	DateContainer,
	SelectContainer,
} from './MyTraining.styled';

import Button from 'components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getUserBooksThunk } from 'Redux/Books/booksOperations';

// import TextField from '@mui/material/TextField';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { startPlanning } from 'Redux/Planning/planningOperations';
const MyTraining = () => {
	const [startValue, setStartValue] = useState('');
	const [finishValue, setfinishValue] = useState('');

	const [select, setSelect] = useState(null);
	const books = useSelector(state => state.books.goingToRead);
	const accessToken = useSelector(state => state.auth.accessToken);

	const dispatch = useDispatch();

	useEffect(() => {
		if (accessToken) {
			dispatch(getUserBooksThunk());
		}
	}, [accessToken, dispatch]);

	// const handleSelect = () => {};
	const onSubmit = e => {
		e.preventDefault();
		dispatch(
			startPlanning({
				startDate: startValue,
				endDate: finishValue,
				books: [select],
			})
		);
	};

	return (
		<div>
			<Title>My training</Title>
			{/* <LocalizationProvider dateAdapter={AdapterDayjs}>
				<DatePicker
					label="Basic example"
					value={value}
					onChange={newValue => {
						setValue(newValue);
					}}
					renderInput={params => <TextField {...params} />}
				/> */}
			{/* </LocalizationProvider> */}
			<form action="" onSubmit={onSubmit}>
				<DateContainer>
					<label>
						<DataInput
							type="date"
							value={startValue}
							onChange={e => {
								console.log(e.target.value);
								setStartValue(e.target.value);
							}}
						></DataInput>
					</label>
					<label>
						<DataInput
							type="date"
							value={finishValue}
							onChange={e => {
								console.log(e.target.value);
								setfinishValue(e.target.value);
							}}
						></DataInput>
					</label>
				</DateContainer>
				<SelectContainer>
					<Select
						name="select"
						onChange={e => {
							console.log(e.target.value);
							setSelect(e.target.value);
						}}
					>
						<option value="select">Choose books from the library</option>
						{books.map(({ title, _id }) => {
							return (
								<option key={_id} value={_id}>
									{title}
								</option>
							);
						})}
					</Select>
					<Button type={'submit'}>add</Button>
				</SelectContainer>
			</form>
			{/* <Button primary>Start traning</Button> */}
		</div>
	);
};

export default MyTraining;

// {
// 	/* <LocalizationProvider dateAdapter={AdapterDayjs}>
// 						<DatePicker
// 							label="Start"
// 							value={startValue}
// 							onChange={newValue => {
// 								setStartValue(newValue);
// 							}}
// 							disablePast={true}
// 							renderInput={params => <TextField {...params} />}
// 						/>
// 					</LocalizationProvider> */
// }
// {
// 	/* <LocalizationProvider dateAdapter={AdapterDayjs}>
// 						<DatePicker
// 							label="Finish"
// 							value={finishValue}
// 							onChange={newValue => {
// 								setfinishValue(newValue);
// 							}}
// 							disablePast={true}
// 							renderInput={params => <TextField {...params} />}
// 						/>
// 					</LocalizationProvider> */
// }
// {
//
// }
