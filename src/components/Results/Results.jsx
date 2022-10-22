// // !============Tanya==========
import ResultsItem from 'components/ResultsItem/ResultsItem';
// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addReadingPage } from 'Redux/Planning/planningOperations';
import { selectorReadedPages } from 'Redux/Planning/planningSelectors';
// // !============================
// import {useState} from 'react'
import {
	ResultsBox,
	ResultsTitle,
	ResultsForm,
	FormBox,
	ResultsLabel,
	ResultsInput,
	ResultsBtn,
	StatisticsPageBox,
	StatisticsPageTitle,
} from './Results.styled';

export default function Results() {
   const readedPages = useSelector(selectorReadedPages);
   

   
	//зато работает!
	const date = new Date();
	const normalDate = date.toLocaleDateString();
	const year = String(date.getFullYear());
	const month = String(date.getMonth() + 1);
	const day = [...normalDate];
	const realDay = day[0] + day[1];

	// !============Tanya==========
	const dispatch = useDispatch();

	const handleFormSubmit = e => {
		e.preventDefault();
		// !== Лера здесь нужен намбер
		dispatch(addReadingPage({ pages: Number(e.target.elements[1].value) }));
	};
	// !============================

	return (
		<ResultsBox>
			<ResultsTitle>Results</ResultsTitle>
			<ResultsForm onSubmit={handleFormSubmit}>
				<FormBox>
					<ResultsLabel>
						Date
						<ResultsInput
							type="date"
							name="date"
							min={`${year}-${month}-${realDay}`}
							max={`${year}-${month}-${realDay}`}
						/>
					</ResultsLabel>
					<ResultsLabel>
						Amount of pages
						<ResultsInput type="text" name="page" />
					</ResultsLabel>
				</FormBox>
				<ResultsBtn type="submit">Add result</ResultsBtn>
			</ResultsForm>
			<StatisticsPageBox>
				<StatisticsPageTitle>Statistics</StatisticsPageTitle>
				<ul>
               {readedPages && readedPages.map((el, i) => <ResultsItem key={i} data={el } /> )}
				</ul>
			</StatisticsPageBox>
		</ResultsBox>
	);
}
