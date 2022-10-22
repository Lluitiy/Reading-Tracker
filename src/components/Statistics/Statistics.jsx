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
} from './Statistics.styled';
import { useDispatch, useSelector } from 'react-redux';
import useTranslation from 'Hooks/useTranslations';
import {
	selectorShowBtn,
	selectorShowResults,
	selectorPlanFact,
	selectorDuration,
	selectorPagesPerDay,
	startDate,
	selectorReadedPages,
} from '../../Redux/Planning/planningSelectors';

import {
	showResults,
	showStartTraningBtn,
	addPlanFact,
} from 'Redux/Planning/planningSlice';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom/dist';
let checkData = null;

const windowWidth = window.innerWidth;

const dotsPaddingByWidth = () => {
	if (windowWidth < 768) {
		return -180;
	}
	if (windowWidth >= 768 && windowWidth < 1280) {
		return -562;
	}
	return -782;
};

const normaliseDate = date => {
	const newDate = new Date(date);
	let day = newDate.getDate();
	if (day < 10) day = '0' + day;

	let month = newDate.getMonth() + 1;
	if (month < 10) month = '0' + month;

	const year = newDate.getFullYear();

	return `${year}-${month}-${day}`;
};

const createNextDay = (prevDate, step) => {
	const newDate = new Date(prevDate);
	const nextDay = newDate.setDate(newDate.getDate() + step);
	return normaliseDate(nextDay);
};

const CastomLabel = ({ x, y, index, type }) => {
	const translation = useTranslation();
	if (index === checkData.length - 1) {
		return (
			<text
				x={x}
				y={y}
				dy={2}
				dx={8}
				fontSize={14}
				textAnchor={'start'}
				fill={type === 'plan' ? '#000000' : '#FF6B08'}
			>
				{type === 'plan'
					? `${translation.statistics.plan}`
					: `${translation.statistics.fact}`}
			</text>
		);
	}
};

export default function Statistics() {
	const navigate = useNavigate();
	const translation = useTranslation();
	const data = useSelector(selectorPlanFact);
	const isShowResultsSection = useSelector(selectorShowResults);
	const isShowBtn = useSelector(selectorShowBtn);
	const duration = useSelector(selectorDuration);
	const pagesPerDay = useSelector(selectorPagesPerDay);
	const getStartDate = useSelector(startDate);
	const dispatch = useDispatch();

	const readedPages = useSelector(selectorReadedPages);

	const [firstRender, setFirstRender] = useState(0);

	useEffect(() => {
		console.log(firstRender);
		if (firstRender < 1) {
			setFirstRender(prev => prev + 1);
			return;
		}

		if (readedPages) {
			const changeFact = data.map(fact => {
				for (let date of readedPages) {
					const normalDate = date.time.slice(0, 10);
					if (fact.name === normalDate) {
						return (fact = { ...fact, fact: fact.fact + date.pagesCount });
					}
				}
				return fact;
			});

			dispatch(addPlanFact(changeFact));
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [readedPages]);

	checkData =
		data?.length > 0 && isShowResultsSection
			? data
			: [{ name: 'Day 0', fact: 5, plan: 10 }];

	const createObjByPlan = () => {
		const objPlanFact = [];

		const startDate = new Date(getStartDate);

		for (let i = 1; i <= duration; i += 1) {
			if (i === 1) {
				objPlanFact.push({
					name: normaliseDate(startDate),
					fact: 0,
					plan: pagesPerDay * i,
				});
			} else {
				objPlanFact.push({
					name: createNextDay(startDate, i - 1),
					fact: 0,
					plan: pagesPerDay * i,
				});
			}
		}

		return objPlanFact;
	};

	const handleClickStartTraining = () => {
		dispatch(showStartTraningBtn(false));
		dispatch(showResults(true));
		dispatch(addPlanFact(createObjByPlan()));
		// !!!
		navigate('/statistics');
		// TODO
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
					<StatisticsTitle>{translation.statistics.statTitle}</StatisticsTitle>
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
								<LabelList content={<CastomLabel type="plan" />} />
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
								<LabelList content={<CastomLabel type="fact" />} />
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
