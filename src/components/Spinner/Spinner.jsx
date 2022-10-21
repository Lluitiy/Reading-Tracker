import { Wrap, Text, BounceBall } from './Spinner.styled';

const Spinner = () => (
	<Wrap>
		<Text>
			<BounceBall></BounceBall>
			<Text>NOW LOADING</Text>
		</Text>
	</Wrap>
);

export default Spinner;
