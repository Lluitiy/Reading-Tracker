import React, { useEffect, useState } from 'react';
import {
	Title,
	Select,
	DateContainer,
	SelectContainer,
} from './MyTraining.styled';
import useTranslation from 'Hooks/useTranslations';
import Button from 'components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getUserBooksThunk } from 'Redux/Books/booksOperations';
import { startPlanning } from 'Redux/Planning/planningOperations';
import { booksId } from 'Redux/Planning/planningSelectors';
import { showResults } from 'Redux/Planning/planningSlice';
import { DatePicker } from 'react-rainbow-components';
import dayjs from 'dayjs';
import { ReactComponent as CalenderIcon } from 'Assets/svg/calendar.svg';

const MyTraining = () => {
	const translation = useTranslation();

	const books = useSelector(state => state.books.books.goingToRead);
	const accessToken = useSelector(state => state.auth.accessToken);
	const ids = useSelector(booksId);
	const dispatch = useDispatch();

	const dateToday = `${dayjs().get('year')}-${
		dayjs().get('month') + 1
	}-${dayjs().get('date')}`;

	const [startValue, setStartValue] = useState('');
	const [endValue, setEndValue] = useState('');

	useEffect(() => {
		if (accessToken) {
			dispatch(getUserBooksThunk());
			dispatch(showResults(false));
		}
	}, [accessToken, dispatch]);

	const onSubmit = e => {
		e.preventDefault();
		const clone = ids.some(id => id === e.currentTarget.elements.select.value);
		if (startValue === '' || endValue === '') {
			return alert('All fields must be filled!');
		}
		if (clone) {
			alert('You already added this book');
			return;
		}
		const value = e.currentTarget.elements.select.value;

		dispatch(
			startPlanning({
				startDate: startValue,
				endDate: endValue,
				books: [...ids, value],
			})
		);
	};
	const handleChangeStart = value => {
		const userDate = value.toLocaleDateString().split('.').reverse().join('-');
		setStartValue(userDate);
	};
	const handleChangeEnd = value => {
		const userDate = value.toLocaleDateString().split('.').reverse().join('-');
		setEndValue(userDate);
	};
	return (
		<div>
			<Title>{translation.myTraining.title}</Title>
			<form action="" onSubmit={onSubmit}>
				<DateContainer>
					<DatePicker
						value={startValue}
						placeholder="Start"
						minDate={new Date(dateToday)}
						onChange={handleChangeStart}
						required={true}
						icon={<CalenderIcon />}
					/>
					<DatePicker
						value={endValue}
						placeholder="End"
						minDate={new Date(dateToday)}
						onChange={handleChangeEnd}
						required={true}
						icon={<CalenderIcon />}
					/>
				</DateContainer>
				<SelectContainer>
					<Select name="select">
						<option disabled={true}>{translation.myTraining.option}</option>
						{books.map(({ title, _id }) => {
							return (
								<option key={_id} value={_id}>
									{title}
								</option>
							);
						})}
					</Select>
					<Button type={'submit'}>{translation.myTraining.btn}</Button>
				</SelectContainer>
			</form>
		</div>
	);
};

export default MyTraining;
