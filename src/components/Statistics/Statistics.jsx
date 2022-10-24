import Results from 'components/Results/Results';
import {
	LineChart,
	Line,
	XAxis,
	CartesianGrid,
	Tooltip,
	LabelList,
	ResponsiveContainer,
} from 'recharts';
import {
	StatisticsSection,
	StatisticsBox,
	StatisticsTitle,
	StatisticsText,
	StartTraningBtn,
	StartTraningBox,
	StatisticDaysSpan,
} from './Statistics.styled';
import { useDispatch, useSelector } from 'react-redux';
import useTranslation from 'Hooks/useTranslations';
import {
	selectorShowBtn,
	selectorShowResults,
	selectorPlanFact,
	selectorDuration,
	startDate,
	selectorReadedPages,
	getBooks,
} from '../../Redux/Planning/planningSelectors';

import {
	showResults,
	showStartTraningBtn,
	addPlanFact,
} from 'Redux/Planning/planningSlice';
import { useEffect } from 'react';
import { createNextDay, dotsPaddingByWidth, normaliseDate } from './functions/functions';
import  CastomLabel from './CastomLabel/CastomLabel';


export default function Statistics() {
	const translation = useTranslation();

	const data = useSelector(selectorPlanFact);
	const isShowResultsSection = useSelector(selectorShowResults);
	const isShowBtn = useSelector(selectorShowBtn);
	const duration = useSelector(selectorDuration);
	const getStartDate = useSelector(startDate);
	const readedPages = useSelector(selectorReadedPages);
	const books = useSelector(getBooks);

	const dispatch = useDispatch();

	useEffect(() => {
		if (readedPages) {
			// считаем, что пришло - странички, мапаем дату и к ней в факт суем странички
			const totalPages = readedPages.reduce(
				(total, el) => total + el.pagesCount,
				0
			);
			const updateData = data.map((el, i) => {
				if (i === 0) {
					return (el = { ...el, fact: totalPages });
				}
				return el;
			});

			dispatch(addPlanFact(updateData));
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [readedPages]);

	const checkData =
		data?.length > 0 && isShowResultsSection
			? data
			: [{ name: 'Day 0', fact: 5, plan: 10 }];

	const createObjByPlan = () => {
		const startDate = new Date(getStartDate);
	
		if (books?.length > 0) {
			const totalPagesByBooks = books.reduce((total, { pagesTotal }) => total + pagesTotal, 0)
			const totalPagesPerDay = totalPagesByBooks / duration
			const objPlanFact = [];

			for (let i = 1; i <= duration; i += 1) {
			if (i === 1) {
				objPlanFact.push({
					name: normaliseDate(startDate),
					fact: 0,
					plan: Math.round(totalPagesPerDay * i),
				});
			} else {
				objPlanFact.push({
					name: createNextDay(startDate, i - 1),
					fact: 0,
					plan: Math.round(totalPagesPerDay * i),
				});
			}
		}
			
		return objPlanFact;
	};
		}


	const handleClickStartTraining = () => {
		dispatch(showStartTraningBtn(false));
		dispatch(showResults(true));
		dispatch(addPlanFact(createObjByPlan()));
	};

	return (
		<>
			{isShowBtn && (
				<StartTraningBox>
					<StartTraningBtn type="button" onClick={handleClickStartTraining}>
						{translation.statistics.startBtn}
					</StartTraningBtn>
				</StartTraningBox>
			)}
			<StatisticsSection>
				<StatisticsBox>
					<StatisticsTitle>
						{translation.statistics.statTitle}
						<StatisticDaysSpan> {data[0]?.plan ? data[0]?.plan : 0}</StatisticDaysSpan>
					</StatisticsTitle>
					<ResponsiveContainer width={'99%'} height={215}>
						<LineChart
							width={809}
							height={215}
							data={checkData}
							margin={{
								top: 15,
								right: 50,
								left: 5,
								bottom: 5,
							}}
						>
							<CartesianGrid strokeDasharray="0" horizontalPoints={[210]} />
							<XAxis
								dataKey="name"
								hide={true}
								padding={
									checkData?.length <= 1 && { left: dotsPaddingByWidth() }
								}
							/>
z
							<Tooltip />

							<Line
								type="monotone"
								dataKey="plan"
								stroke="#000000"
								fill="#000000"
								activeDot={{ r: 7 }}
								height={5}
								// legendType="none"
								strokeWidth={2}
								dot={{ stroke: '#000000', strokeWidth: 4 }}
								name="PLAN"
							>
								<LabelList content={<CastomLabel type="plan" checkData={ checkData} />} />
							</Line>
							<Line
								type="monotone"
								dataKey="fact"
								stroke="#FF6B08"
								fill="#FF6B08"
								activeDot={{ r: 7 }}
								// legendType="none"
								strokeWidth={2}
								dot={{ stroke: '#FF6B08', strokeWidth: 4 }}
								name="FACT"
							>
								<LabelList content={<CastomLabel type="fact" checkData={ checkData} />} />
							</Line>
						</LineChart>
					</ResponsiveContainer>
					<StatisticsText>{translation.statistics.time}</StatisticsText>
				</StatisticsBox>
				{isShowResultsSection && <Results />}
			</StatisticsSection>
		</>
	);
}
