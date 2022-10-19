import { createSlice } from '@reduxjs/toolkit';
import {
	registerUser,
	loginUser,
	logoutUser,
	getCurrentUser,
} from './authOperation';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const initialState = {
	user: { name: null, email: null },
	token: null,
	isLoggedIn: false,
	isRefreshing: false,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: {
		[registerUser.fulfilled](state, action) {
			state.user = action.payload.user;
			state.token = action.payload.token;
			state.isLoggedIn = true;
		},

		[loginUser.fulfilled](state, action) {
			state.user = action.payload.user;
			state.token = action.payload.token;
			state.isLoggedIn = true;
		},

		[logoutUser.fulfilled](state, action) {
			state.user = { name: null, email: null };
			state.token = null;
			state.isLoggedIn = false;
		},

		[getCurrentUser.pending](state) {
			state.isRefreshing = true;
		},

		[getCurrentUser.rejected](state) {
			state.isRefreshing = false;
		},

		[getCurrentUser.fulfilled](state, action) {
			state.user = action.payload;
			state.isLoggedIn = true;
			state.isRefreshing = false;
		},
	},
});

export const authReducer = authSlice.reducer;

const authPersistConfig = { key: 'auth', storage, whitelist: ['token'] };

export const persistedAuthReducer = persistReducer(
	authPersistConfig,
	authReducer
);
