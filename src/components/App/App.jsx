import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import PrivateRoute from 'components/Private/PrivateRoute';
import PublicRoute from 'components/Public/PublicRoute';
import LogInPage from 'Pages/LogInPage/LogInPage';
import RegisterPage from 'Pages/RegisterPage/RegisterPage';
import HomePage from 'Pages/HomePage';
import Layout from 'Layout/Layout';
import { fetchCurrentUser } from 'Redux/Auth/authOperation';
import { getIsRefreshed } from 'Redux/Auth/authSelectors';

const LibraryPage = lazy(() => import('Pages/LibraryPage'));
const TrainingPage = lazy(() => import('Pages/TrainingPage'));
const TeamPage = lazy(() => import('components/Team/Team'));
const StatisticsPage = lazy(() => import('Pages/StatisticsPage'));

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
					<Route
						index
						element={
							<PublicRoute restricted redirect={'/library'}>
								<HomePage />
							</PublicRoute>
						}
					/>

					<Route
						path="login"
						element={
							<PublicRoute restricted redirect="/library">
								<LogInPage />
							</PublicRoute>
						}
					/>

					<Route
						path="register"
						element={
							<PublicRoute restricted redirect="/library">
								<RegisterPage />
							</PublicRoute>
						}
					/>
					<Route
						path="library"
						element={
							<PrivateRoute redirect={'/'}>
								<LibraryPage />
							</PrivateRoute>
						}
					/>
					<Route
						path="training"
						element={
							<PrivateRoute redirect={'/'}>
								<TrainingPage />
							</PrivateRoute>
						}
					/>
					<Route
						path="statistics"
						element={
							<PrivateRoute restricted redirect="/statistics">
								<StatisticsPage />
							</PrivateRoute>
						}
					/>
					<Route
						path="team"
						element={
							<PrivateRoute redirect={'/'}>
								<TeamPage />
							</PrivateRoute>
						}
					/>
				</Route>
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		)
	);
};
