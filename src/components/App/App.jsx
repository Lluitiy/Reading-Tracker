import Layout from 'Layout/Layout';
import HomePage from 'Pages/HomePage';
import LibraryPage from 'Pages/LibraryPage';

import LogInPage from 'Pages/LogInPage';
import RegisterPage from 'Pages/RegisterPage';
import TrainingPage from 'Pages/TrainingPage';
import { Navigate, Route, Routes } from 'react-router-dom';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchCurrentUser } from 'Redux/Auth/authOperation';
// import { getIsRefreshing } from 'Redux/Auth/authSelectors';

export const App = () => {
	const dispatch = useDispatch();
	// const isRefreshed = useSelector(getIsRefreshing);
	// const refreshToken = useSelector(getIsRefreshing);

	useEffect(() => {
		dispatch(fetchCurrentUser());
	}, [dispatch]);

	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path="login" element={<LogInPage />} />
				<Route path="register" element={<RegisterPage />} />
				<Route path="library" element={<LibraryPage />} />
				<Route path="training" element={<TrainingPage />} />
			</Route>
			<Route path="*" element={<Navigate to="register" replace />} />
		</Routes>
	);
};
