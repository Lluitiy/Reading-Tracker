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
	showBtn,
	showResultsSection,
	planFact,
} from '../../Redux/Planning/planningSelectors';
import { showResults, showStartTraningBtn } from 'Redux/Planning/planningSlice';
import useTranslation from 'Hooks/useTranslations';

// const data = [
// 	{
// 		name: 'Day 1',
// 		fact: 4000,
// 		// план кол-во стр за день
// 		plan: 0,
// 	},
// 	{
// 		name: 'Day 2',
// 		fact: 3000,
// 		plan: 1398,

// 	},
// 	{
// 		name: 'Day 3',
// 		fact: 2000,
// 		plan: 9800,
// 	},

// ];

let checkData = null;

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
	// const [data, setData] = useState([]);
	const translation = useTranslation();

	const data = useSelector(planFact);
	const isShowResultsSection = useSelector(showResultsSection);

	checkData =
		data.length > 0 && isShowResultsSection
			? data
			: [{ name: 'Day 1', fact: 5, plan: 10 }];

	const isShowBtn = useSelector(showBtn);

	const dispatch = useDispatch();

	const handleClickStartTraining = () => {
		dispatch(showStartTraningBtn(false));
		dispatch(showResults(true));
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
								padding={checkData?.length <= 1 && { left: -782 }}
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
