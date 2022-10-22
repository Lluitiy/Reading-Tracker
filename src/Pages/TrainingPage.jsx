import StartTrainningWrapper from 'components/StartTrainningWrapper/StartTrainningWrapper';
import { Container } from 'components/Common/Common.styled';
import { Section } from 'components/Common/Common.styled';

import Statistics from 'components/Statistics/Statistics';

import Timer from 'components/Timer/Timer';
// import BasicDatePicker from './../components/MyTraining/DataPicker';
const TrainingPage = () => {
	return (
		<Section>
			<Container>
				<StartTrainningWrapper />
				{/* <BasicDatePicker /> */}
				<Timer />
				<Statistics />
			</Container>
		</Section>
	);
};
export default TrainingPage;
