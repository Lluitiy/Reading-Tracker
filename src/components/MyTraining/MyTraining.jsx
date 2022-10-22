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

import Button from 'components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getUserBooksThunk } from 'Redux/Books/booksOperations';

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

	const onSubmit = e => {
		e.preventDefault();

		if (!select) {
			return alert('rrrrrr');
		}
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
							placeholder="start"
							required
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
							// min={Date.now()}
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
						required
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
		</div>
	);
};

export default MyTraining;
