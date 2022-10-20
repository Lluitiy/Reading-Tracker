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
} from './Statistics.styled';

const data = [
	{
		name: 'Page A',
		fod: 4000,
		// план кол-во стр за день
		pod: 0,

		// amt: 2400
	},
	{
		name: 'Page B',
		fod: 3000,
		pod: 1398,
		// amt: 2210
	},
	{
		name: 'Page C',
		fod: 2000,
		pod: 9800,
		// amt: 2290
	},
	{
		name: 'Page D',
		fod: 2780,
		pod: 3908,
		// amt: 2000
	},
];

const checkData = data.length > 0 ? data : [{ name: 'Test', fod: 5, pod: 10 }];

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
				fill={type === 'pod' ? '#000000' : '#FF6B08'}
			>
				{type === 'pod' ? 'PLAN' : 'ACT'}
			</text>
		);
	}
};

export default function Statistics() {
	return (
		<>
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
							dataKey="pod"
							stroke="#000000"
							fill="#000000"
							activeDot={{ r: 7 }}
							height={5}
							// legendType="none"
							strokeWidth={2}
							dot={{ stroke: '#000000', strokeWidth: 4 }}
							name="PLAN"
						>
							<LabelList content={<CastomLabel type="pod" />} />
						</Line>
						<Line
							type="monotone"
							dataKey="fod"
							stroke="#FF6B08"
							fill="#FF6B08"
							activeDot={{ r: 7 }}
							// legendType="none"
							strokeWidth={2}
							dot={{ stroke: '#FF6B08', strokeWidth: 4 }}
							name="Act"
						>
							<LabelList content={<CastomLabel type="fod" />} />
						</Line>
					</LineChart>
				</ResponsiveContainer>
				<StatisticsText>Time</StatisticsText>
			</StatisticsBox>
			<Results />
		</StatisticsSection>

				</>
	);
}
