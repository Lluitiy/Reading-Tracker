import React, { useEffect, useState } from 'react';
import {
	Title,
	DataInput,
	Select,
	DateContainer,
	SelectContainer,
	DataSvg,
	Label,
	BoxForSvg,
} from './MyTraining.styled';
import useTranslation from 'Hooks/useTranslations';

import Button from 'components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getUserBooksThunk } from 'Redux/Books/booksOperations';

import { startPlanning } from 'Redux/Planning/planningOperations';
import { booksId } from 'Redux/Planning/planningSelectors';

const MyTraining = () => {
	const [startValue, setStartValue] = useState('');
	const [finishValue, setfinishValue] = useState('');
	const translation = useTranslation();
	const [select, setSelect] = useState(null);


	const books = useSelector(state => state.books.books.goingToRead);
	const accessToken = useSelector(state => state.auth.accessToken);
	const ids = useSelector(booksId);

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

	const onSubmit = e => {
		e.preventDefault();
    
    if (!select || startValue === '' || finishValue === '') {
			return alert('rrrrrr');
		}
		dispatch(
			startPlanning({
				startDate: startValue,
				endDate: finishValue,

				books: [...ids, select],
			})
		);
	};

	return (
		<div>

			<Title>{translation.myTraining.title}</Title>

			<form action="" onSubmit={onSubmit}>
				<DateContainer>
					<Label>
						<BoxForSvg>
							<DataSvg />
							Start
						</BoxForSvg>

						<DataInput
							type="date"
							value={startValue}
							onChange={e => {
								console.log(e.target.value);
								setStartValue(e.target.value);
							}}
							required
							min={`${year}-${month}-${realDay}`}
						></DataInput>
					</Label>
					<Label>
						<BoxForSvg>
							<DataSvg />
							Finish
						</BoxForSvg>
						<DataInput
							type="date"
							value={finishValue}
							onChange={e => {
								console.log(e.target.value);
								setfinishValue(e.target.value);
							}}
							placeholder="finish"
							required
							min={`${year}-${month}-${realDay}`}
						></DataInput>
					</Label>
				</DateContainer>
				<SelectContainer>
					<Select
						name="select"
						onChange={e => {
							console.log(e.target.value);
							setSelect(e.target.value);
						}}
					>
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
