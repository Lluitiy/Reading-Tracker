import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, fetchCurrentUser } from './authOperation';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const initialState = {
	user: { name: null, email: null },
	accessToken: null,
	refreshToken: null,
	sid: null,
	isLoggedIn: false,
	isRefreshed: false,
	isLoading: false,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: {
		[register.fulfilled](state, action) {
			state.user = action.payload.userData;
			state.isLoading = false;
		},
		[register.pending](state) {
			state.isLoading = true;
		},
		[register.rejected](state) {
			state.isLoading = false;
		},

		[logIn.fulfilled](state, action) {
			console.log(action.payload)
			state.user = action.payload.userData;
			state.accessToken = action.payload.accessToken;
			state.refreshToken = action.payload.refreshToken;
			state.sid = action.payload.sid;
			state.isLoggedIn = true;
		},
		[logIn.pending](state) {
			state.isLoading = true;
		},
		[logIn.rejected](state) {
			state.isLoading = false;
		},

		[logOut.fulfilled](state) {
			state.user = null;
			state.accessToken = null;
			state.refreshToken = null;
			state.sid = null;
			state.isLoggedIn = false;
		},
		[logOut.pending](state) {
			state.isLoading = true;
		},
		[logOut.rejected](state) {
			state.isLoading = false;
		},

		[fetchCurrentUser.pending](state) {
			state.isRefreshed = false;
			state.isLoading = true;
		},

		[fetchCurrentUser.rejected](state) {
			state.isLoggedIn = false;
			state.isRefreshed = true;
			state.isLoading = false;
		},

		[fetchCurrentUser.fulfilled](state, action) {
			state.accessToken = action.payload.newAccessToken;
			state.refreshToken = action.payload.newRefreshToken;
			state.sid = action.payload.newSid;
			state.isRefreshed = true;
			state.isLoggedIn = true;
			state.isLoading = false;
		},
	},
});

export const authReducer = authSlice.reducer;

const authPersistConfig = {
	key: 'auth',
	storage,
	whitelist: ['refreshToken', 'sid', 'user'],
};

export const persistedAuthReducer = persistReducer(
	authPersistConfig,
	authReducer
);
