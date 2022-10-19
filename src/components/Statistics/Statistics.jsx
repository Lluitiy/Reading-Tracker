import React from 'react';
import {
	LineChart,
	Line,
	XAxis,
	CartesianGrid,
	Tooltip,
	LabelList,
} from 'recharts';
import {
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
	console.log(x, y);
	if (value === checkData[checkData.length - 1]?.[type]) {
		return (
			<text
				x={x}
				y={y}
				dy={2}
				dx={8}
				fontSize={14}
				textAnchor={'start'}
				// padding={20}
				// background={"#a5ea83873"}
				fill={type === 'pod' ? '#000000' : '#FF6B08'}
			>
				{type === 'pod' ? 'PLAN' : 'ACT'}
			</text>
		);
	}
	// return null;
};

export default function Statistics() {
	return (
		<>
			<StatisticsBox>
				<StatisticsTitle>Amount of pages / day</StatisticsTitle>
				<LineChart
					width={811}
					height={300}
					data={checkData}
					margin={{
						top: 15,
						right: 45,
						left: 5,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="0" horizontalPoints={[295]} />
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

				<StatisticsText>Time</StatisticsText>
			</StatisticsBox>
		</>
	);
}
