import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import API from 'Services/Api/Api';

const {
	registerUser,
	loginUser,
	logoutUser,
	refreshUser,
	setToken,
	unsetToken,
} = API;

// Register new user
export const register = createAsyncThunk(
	'auth/register',
	async (user, thunkAPI) => {
		try {
			const data = await registerUser(user);
			setToken(data.accessToken);
			Notify.success(
				`🦄 Ви успішно зареєструвалися, ${user.email} залогінтесь!`
			);
			return data;
		} catch (error) {
			Notify.failure(
				`🦄 ${user.email} На жаль, реєстрація була неуспішною!. спробуйте ще раз`
			);
			return thunkAPI.rejectWithValue(error.massage);
		}
	}
);

// Log a previously created user
export const logIn = createAsyncThunk('auth/login', async (user, thunkAPI) => {
	try {
		const data = await loginUser(user);
		setToken(data.accessToken);
		Notify.success(`🦄 Ласкаво просимо! ${user.email}`);
		return data;
	} catch (error) {
		Notify.failure(`🦄 ${user.email} Увійти до системи не вдалося!`);
		return thunkAPI.rejectWithValue(error.massage);
	}
});

// Unlog active user
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
	try {
		await logoutUser();
		unsetToken();
		Notify.success(`🦄 Ви успішно вийшли з профілю`);
	} catch (error) {
		Notify.failure(
			`🦄 На жаль, вихід з профілю не був успішним. Спробуйте ще раз пізніше.`
		);
		return thunkAPI.rejectWithValue(error.massage);
	}
});

// Get information about the current user
export const fetchCurrentUser = createAsyncThunk(
	'auth/refresh',
	async (_, thunkAPI) => {
		const state = thunkAPI.getState();
		const persistedToken = state.auth.refreshToken;
		const persistedSid = { sid: state.auth.sid };

		if (!persistedToken) {
			return thunkAPI.rejectWithValue();
		}

		setToken(persistedToken);

		try {
			const data = await refreshUser(persistedSid);
			setToken(data.newAccessToken);
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.massage);
		}
	}
);
