import { Section } from 'components/Common/Common.styled';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Section>React homework template</Section>}>
				<Route index element={<div>Home</div>} />
			</Route>
		</Routes>
	);
};
