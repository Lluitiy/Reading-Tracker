import { createAsyncThunk } from '@reduxjs/toolkit';
import API from 'Services/Api/Api';

const {
	registerUser,
	loginUser,
	logoutUser,
	refreshUser,
	setToken,
	unsetToken,
	// authUserGoogle,
} = API;

// Register new user
export const registrationUser = createAsyncThunk(
	'auth/register',
	async (user, thunkAPI) => {
		try {
			const data = await registerUser(user);
			setToken(data.token);
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.massage);
		}
	}
);

// Log a previosly created user
export const logInUser = createAsyncThunk(
	'auth/login',
	async (user, thunkAPI) => {
		try {
			const data = await loginUser(user);
			setToken(data.token);
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.massage);
		}
	}
);

// Unlog active user
export const logOutUser = createAsyncThunk(
	'auth/logout',
	async (_, thunkAPI) => {
		try {
			await logoutUser();
			unsetToken();
		} catch (error) {
			return thunkAPI.rejectWithValue(error.massage);
		}
	}
);

// Get information about the current user
export const getCurrentUser = createAsyncThunk(
	'auth/refresh',
	async (_, thunkAPI) => {
		const state = thunkAPI.getState();
		const persistedToken = state.auth.refreshToken;
		const persistedSid = thunkAPI.getState().auth.sid;
		if (!persistedToken) {
			return thunkAPI.rejectWithValue();
		}

		setToken(persistedToken);

		try {
			const data = await refreshUser(persistedSid);
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.massage);
		}
	}
);
