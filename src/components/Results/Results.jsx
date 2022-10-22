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
	const translation = useTranslation();
	//зато работает!
	const date = new Date();
	const normalDate = date.toLocaleDateString();
	const year = String(date.getFullYear());
	const month = String(date.getMonth() + 1);
	const day = [...normalDate];
	const realDay = day[0] + day[1];

	return (
		<ResultsBox>
			<ResultsTitle>{translation.results.title}</ResultsTitle>
			<ResultsForm>
				<FormBox>
					<ResultsLabel>
						{translation.results.label1}
						<ResultsInput
							type="date"
							name="date"
							min={`${year}-${month}-${realDay}`}
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
			</StatisticsPageBox>
		</ResultsBox>
	);
}
