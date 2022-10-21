import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import PrivateRoute from 'components/Private/PrivateRoute';
import PublicRoute from 'components/Public/PublicRoute';

// import HomePage from 'Pages/HomePage';
import Layout from 'Layout/Layout';
import LogInPage from 'Pages/LogInPage';
import RegisterPage from 'Pages/RegisterPage';

import { fetchCurrentUser } from 'Redux/Auth/authOperation';
import { getIsRefreshed } from 'Redux/Auth/authSelectors';

const LibraryPage = lazy(() => import('Pages/LibraryPage'));
const TrainingPage = lazy(() => import('Pages/TrainingPage'));
const TeamPage = lazy(() => import('components/Team/Team'));

export const App = () => {
	const dispatch = useDispatch();
	const isRefreshed = useSelector(getIsRefreshed);
	useEffect(() => {
		dispatch(fetchCurrentUser());
	}, [dispatch]);

	return (
		isRefreshed && (
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<LibraryPage />} />

					<Route
						path="login"
						element={
							<PublicRoute restricted redirect="/">
								<LogInPage />
							</PublicRoute>
						}
					/>

					<Route
						path="register"
						element={
							<PublicRoute restricted redirect="/">
								<RegisterPage />
							</PublicRoute>
						}
					/>
					<Route
						path="library"
						element={
							<PrivateRoute redirect={'/login'}>
								<LibraryPage />
							</PrivateRoute>
						}
					/>
					<Route
						path="training"
						element={
							<PrivateRoute redirect={'/login'}>
								<TrainingPage />
							</PrivateRoute>
						}
					/>
					<Route
						path="team"
						element={
							<PrivateRoute redirect={'/login'}>
								<TeamPage />
							</PrivateRoute>
						}
					/>
				</Route>
				<Route path="*" element={<Navigate to="register" replace />} />
			</Routes>
		)
	);
};
