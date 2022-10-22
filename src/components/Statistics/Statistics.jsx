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


let checkData = null;

const windowWidth = window.innerWidth;

// const getLocalPlanning = localStorage.getItem('persist:planning')
// const emptyLocalPlanning = getLocalPlanning.length === 67;

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
				{type === 'plan' ? 'PLAN' : 'FACT'}
			</text>
		);
	}
};

export default function Statistics() {
	const data = useSelector(selectorPlanFact);
	const isShowResultsSection = useSelector(selectorShowResults);
	const isShowBtn = useSelector(selectorShowBtn);
	const duration = useSelector(selectorDuration);
	const pagesPerDay = useSelector(selectorPagesPerDay);
	const getStartDate = useSelector(startDate);
	const readedPages = useSelector(selectorReadedPages);
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
	};

	return (
		<>
			{isShowBtn && (
				<StartTraningBox>
					<StartTraningBtn type="button" onClick={handleClickStartTraining}>
						Start traning
					</StartTraningBtn>
				</StartTraningBox>
			)}
			<StatisticsSection>
				<StatisticsBox>
					<StatisticsTitle>
						Amount of pages / day <span> {data[0]?.plan && 0}</span>
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
					<StatisticsText>Time</StatisticsText>
				</StatisticsBox>
				{isShowResultsSection && <Results />}
			</StatisticsSection>
		</>
	);
}
