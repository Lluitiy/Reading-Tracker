import { createSlice } from '@reduxjs/toolkit';
import {
	registrationUser,
	logInUser,
	logOutUser,
	getCurrentUser,
} from './authOperation';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const initialState = {
	user: { name: null, email: null, id: '' },
	accessToken: null,
	refreshToken: null,
	sid: null,
	isLoggedIn: false,
	isRefreshing: false,
	// token: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: {
		[registrationUser.fulfilled](state, action) {
			state.user = action.payload.userData;
			// state.token = action.payload.token;
			state.isLoggedIn = true;
		},

		[logInUser.fulfilled](state, action) {
			state.user = action.payload.user;
			state.accessToken = action.payload.accessToken;
			state.refreshToken = action.payload.refreshToken;
			state.sid = action.payload.sid;
			state.isLoggedIn = true;
		},

		[logOutUser.fulfilled](state, action) {
			state.user = action.payload.user;
			state.accessToken = null;
			state.refreshToken = null;
			state.sid = null;
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

const authPersistConfig = { key: 'auth', storage };

export const persistedAuthReducer = persistReducer(
	authPersistConfig,
	authReducer
);
