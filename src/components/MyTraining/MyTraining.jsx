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



import { startPlanning } from 'Redux/Planning/planningOperations';
import { booksId } from 'Redux/Planning/planningSelectors';
import { showResults } from 'Redux/Planning/planningSlice';

const MyTraining = () => {
	const [startValue, setStartValue] = useState('');
	const [finishValue, setfinishValue] = useState('');
	
	const books = useSelector(state => state.books.goingToRead);
	const accessToken = useSelector(state => state.auth.accessToken);
	const ids =  useSelector(booksId)
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
			dispatch(showResults(false))
		}
	}, [accessToken, dispatch]);

const onSubmit = e => {
	e.preventDefault()
	const clone =ids.some(id=>id===e.currentTarget.elements.select.value)
	if(startValue===''||finishValue===''||clone===true){
		return
	}

const value = e.currentTarget.elements.select.value
dispatch(
	startPlanning({
		startDate: startValue,
		endDate: finishValue,
		books: [...ids,value],
	})
 );
};


	return (
		<div>
			<Title>My training</Title>
			<form action="" onSubmit={onSubmit} >
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
					<label >
						<DataInput
							type="date"
							value={finishValue}
							onChange={e => {
								setfinishValue(e.target.value);
							}}
							min={`${year}-${month}-${realDay}`}
						></DataInput>
					</label>
				</DateContainer>
				<SelectContainer>
					<Select
						name="select"
					>
						<option disabled={true}>Choose books from the library</option>
						{books.map(({ title, _id }) => {
							return (
								<option key={_id} value={_id}>
									{title}
								</option>
							);
						})}
					</Select>
					<Button type={'submit'}  >add</Button>
				</SelectContainer>
			</form>
		</div>
	);
};

export default MyTraining;