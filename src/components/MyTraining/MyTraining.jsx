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
import { startPlanning ,getCurrentPlanning} from 'Redux/Planning/planningOperations';
import { booksId } from 'Redux/Planning/planningSelectors';
const MyTraining = () => {
	const [startValue, setStartValue] = useState('');
	const [finishValue, setfinishValue] = useState('');
    const ids =useSelector(booksId)
	
	const [select, setSelect] = useState(ids);
	console.log(select)
	const books = useSelector(state => state.books.goingToRead);
	const accessToken = useSelector(state => state.auth.accessToken);
	
	const date = new Date();
   const normalDate = date.toLocaleDateString();
   const year = String(date.getFullYear());
   const month = String(date.getMonth() + 1);
   const day = [...normalDate];
   const realDay = day[0] + day[1];


	const dispatch = useDispatch();

	useEffect(() => {
		if (accessToken) {
			dispatch(getUserBooksThunk());
		}
	}, [accessToken, dispatch]);

	useEffect(() => {
		if (accessToken) {
			dispatch(getCurrentPlanning());
		}
	}, [accessToken, dispatch]);
	// const handleSelect = () => {};
	const onSubmit = e => {
		e.preventDefault();
		dispatch(
			startPlanning({
				startDate: startValue,
				endDate: finishValue,
				books: [...select],
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
							min={`${year}-${month}-${realDay}`}
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
							min={`${year}-${month}-${realDay}`}
						></DataInput>
					</label>
				</DateContainer>
				<SelectContainer>
					<Select
						name="select"
						onChange={e => {
							// console.log(e.target.value);
							setSelect((prevState)=>[...prevState,e.target.value]);
							// setSelect(e.target.value);
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
