import ResultsItem from 'components/ResultsItem/ResultsItem';
import { useDispatch, useSelector } from 'react-redux';
import { addReadingPage } from 'Redux/Planning/planningOperations';
import { selectorReadedPages } from 'Redux/Planning/planningSelectors';
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
import useTranslation from 'Hooks/useTranslations';

export default function Results() {
	const readedPages = useSelector(selectorReadedPages);
	const translation = useTranslation();

	//зато работает!
	const date = new Date();
	const normalDate = date.toLocaleDateString();
	const year = String(date.getFullYear());
	const month = String(date.getMonth() + 1);
	const day = [...normalDate];
	const realDay = day[0] + day[1];
	const dispatch = useDispatch();
	const handleFormSubmit = e => {
		e.preventDefault();
		// !== Лера здесь нужен намбер
		dispatch(addReadingPage({ pages: Number(e.target.elements[1].value) }));
	};

	return (
		<ResultsBox>
			<ResultsTitle>{translation.results.title}</ResultsTitle>
			<ResultsForm onSubmit={handleFormSubmit}>
				<FormBox>
					<ResultsLabel>
						{translation.results.label1}
						<ResultsInput
							type="date"
							name="date"
							min={`${year}-${month}-${realDay}`}
							max={`${year}-${month}-${realDay}`}
						/>
					</ResultsLabel>
					<ResultsLabel>
						{translation.results.label2}
						<ResultsInput type="text" name="page" />
					</ResultsLabel>
				</FormBox>
				<ResultsBtn type="submit">{translation.results.btn}</ResultsBtn>
			</ResultsForm>
			<StatisticsPageBox>
				<StatisticsPageTitle>{translation.results.stat}</StatisticsPageTitle>
				<ul>
					{readedPages &&
						readedPages.map((el, i) => <ResultsItem key={i} data={el} />)}
				</ul>
			</StatisticsPageBox>
		</ResultsBox>
	);
}
