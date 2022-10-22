// import Results from 'components/Results/Results';
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
	// showResultsSection,
} from '../../Redux/Planning/planningSelectors';
import { showResults, showStartTraningBtn } from 'Redux/Planning/planningSlice';
import { useNavigate } from 'react-router-dom/dist';


const data = [
	{
		name: 'Day 1',
		fact: 4000,
		// план кол-во стр за день
		plan: 0,
	},
	{
		name: 'Day 2',
		fact: 3000,
		plan: 1398,
	
	},
	{
		name: 'Day 3',
		fact: 2000,
		plan: 9800,
	},
	
];

let checkData = data.length > 0 ? data : [{ name: 'Day 1', fact: 5, plan: 10 }];

const CastomLabel = ({ x, y, value, type }) => {
	if (value === checkData[checkData.length - 1]?.[type]) {
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
	// const [data, setData] = useState([]);
	// const data = useSelector(planFact);
	// console.log(data)
	const isShowBtn = useSelector(showBtn);

	const dispatch = useDispatch();
	const navigate = useNavigate()

	const handleClickStartTraining = () => {
		dispatch(showStartTraningBtn(false));
		dispatch(showResults(true));
		navigate('/statistics')
		
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
					<StatisticsTitle>Amount of pages / day</StatisticsTitle>
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
								padding={checkData?.length <= 1 && { left: -760 }}
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
				{/* {isShowResultsSection && <Results />} */}
			</StatisticsSection>
		</>
	);
}
