import React, { useEffect, useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
	Title,
	Select,
	DateContainer,
	SelectContainer,
	Arrow,
	CalenderThumb,
	DateIcon,
} from './MyTraining.styled';
import useTranslation from 'Hooks/useTranslations';
import Button from 'components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getUserBooksThunk } from 'Redux/Books/booksOperations';
import { startPlanning } from 'Redux/Planning/planningOperations';
import { booksId } from 'Redux/Planning/planningSelectors';
import { Application, DatePicker } from 'react-rainbow-components';
import dayjs from 'dayjs';

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
		}
	}, [accessToken, dispatch]);

	const onSubmit = e => {
		e.preventDefault();
		const clone = ids.some(id => id === e.currentTarget.elements.select.value);
		if (startValue === '' || endValue === '') {
			return Notify.warning(`${translation.myTraining.warningFields}`);
		}
		if (clone) {
			Notify.warning(`${translation.myTraining.warningAdded}`);
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
	const theme = {
		rainbow: {
			palette: {
				brand: '#ffa500',
				boxShadow: '0 0 2px #ffa500',
			},
			border: {
				main: '1px solid transparent',
			},
		},
	};
	return (
		<>
			<Title>{translation.myTraining.title}</Title>
			<form action="" onSubmit={onSubmit}>
				<DateContainer>
					<CalenderThumb>
						<Application theme={theme}>
							<DatePicker
								value={startValue}
								placeholder={translation.myTraining.start}
								minDate={new Date(dateToday)}
								onChange={handleChangeStart}
								required={true}
								icon={<Arrow />}
								variant="double"
								isCentered={true}
							/>
						</Application>
						<DateIcon />
					</CalenderThumb>
					<CalenderThumb>
						<Application theme={theme}>
							<DatePicker
								value={endValue}
								placeholder={translation.myTraining.end}
								minDate={new Date(dateToday)}
								onChange={handleChangeEnd}
								required={true}
								icon={<Arrow />}
								variant="double"
								isCentered={true}
							/>
						</Application>
						<DateIcon />
					</CalenderThumb>
				</DateContainer>
				<SelectContainer>
					<Select name="select" aria-label="Select training">
						<option disabled={true}>{translation.myTraining.option}</option>
						{books.map(({ title, _id }) => {
							return (
								<option key={_id} value={_id}>
									{title}
								</option>
							);
						})}
					</Select>
					<Button type={'submit'} aria-label="Add training button">
						{translation.myTraining.btn}
					</Button>
				</SelectContainer>
			</form>
		</>
	);
};

export default MyTraining;
