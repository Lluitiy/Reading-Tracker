
import Layout from 'Layout/Layout';
import LibraryPage from 'Pages/LibraryPage';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout/>}>
				<Route index element={<LibraryPage />} />
			
			</Route>
		</Routes>
	);
};
