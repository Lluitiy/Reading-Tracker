import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	Navigate,
	Route,
	Routes,
	useSearchParams,
	useNavigate,
} from 'react-router-dom';

import PrivateRoute from 'components/Private/PrivateRoute';
import PublicRoute from 'components/Public/PublicRoute';
import LogInPage from 'Pages/LogInPage/LogInPage';
import RegisterPage from 'Pages/RegisterPage/RegisterPage';
import HomePage from 'Pages/HomePage';
import Layout from 'Layout/Layout';
import { fetchCurrentUser } from 'Redux/Auth/authOperation';
import { qwe } from 'Redux/Auth/authSlice';
import { getIsRefreshed, getIsLogOut } from 'Redux/Auth/authSelectors';
import API from 'Services/Api/Api';

const LibraryPage = lazy(() => import('Pages/LibraryPage'));
const TrainingPage = lazy(() => import('Pages/TrainingPage'));
const TeamPage = lazy(() => import('components/Team/Team'));
const StatisticsPage = lazy(() => import('Pages/StatisticsPage'));

export const App = () => {
	const dispatch = useDispatch();
	const isRefreshed = useSelector(getIsRefreshed);
	const isLogOut = useSelector(getIsLogOut);
	const navigate = useNavigate();

	const [serchParams] = useSearchParams();
	const accessToken = serchParams.get('accessToken');
	const refreshToken = serchParams.get('refreshToken');
	const sid = serchParams.get('sid');

	useEffect(() => {
		if (accessToken) {
			dispatch(qwe({ accessToken, refreshToken, sid }));
			API.setToken(accessToken);
		}
		navigate('/libary');

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [accessToken]);

	useEffect(() => {
		// throw new Error('Error');
		if (!isLogOut) dispatch(fetchCurrentUser());
	}, [dispatch, isLogOut]);

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
							<PrivateRoute restircted redirect={'/'}>
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
