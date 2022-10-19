import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://bookread-backend.goit.global';

const token = {
	set(token) {
		axios.defaults.headers.common.Authorization = `Bearer ${token}`;
	},

	unset() {
		axios.defaults.headers.common.Authorization = '';
	},
};

// Register new user
export const registerUser = createAsyncThunk('auth/register', async user => {
	try {
		const { data } = await axios.post('/users/signup', user);
		token.set(data.token);
		return data;
	} catch (error) {
		console.log(error);
	}
});

// Log a previosly created user
export const loginUser = createAsyncThunk('auth/login', async user => {
	try {
		const { data } = await axios.post('users/login', user);
		token.set(data.token);
		return data;
	} catch (error) {
		console.log(error);
	}
});

// Unlog active user
export const logoutUser = createAsyncThunk('auth/logout', async () => {
	try {
		await axios.post('users/logout');
		token.unset();
	} catch (error) {
		console.log(error);
	}
});

// Get information about the current user
export const getCurrentUser = createAsyncThunk(
	'auth/refresh',
	async (_, thunkAPI) => {
		const state = thunkAPI.getState();
		const persistedToken = state.auth.token;

		if (persistedToken === null) {
			return thunkAPI.rejectWithValue();
		}

		token.set(persistedToken);

		try {
			const { data } = await axios.get('users/current');
			return data;
		} catch (error) {
			console.log(error);
		}
	}
);
