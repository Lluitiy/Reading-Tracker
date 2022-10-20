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
	// token: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: {
		[register.fulfilled](state, action) {
			state.user = action.payload.userData;
			// state.token = action.payload.token;
			state.isLoggedIn = true;
		},

		[logIn.fulfilled](state, action) {
			state.user = action.payload.user;
			state.accessToken = action.payload.accessToken;
			state.refreshToken = action.payload.refreshToken;
			state.sid = action.payload.sid;
			state.isLoggedIn = true;
		},

		[logOut.fulfilled](state, action) {
			state.user = action.payload.user;
			state.accessToken = null;
			state.refreshToken = null;
			state.sid = null;
			state.isLoggedIn = false;
		},

		[fetchCurrentUser.pending](state) {
			state.isRefreshed = true;
		},

		[fetchCurrentUser.rejected](state) {
			state.isLoggedIn = true;
			state.isRefreshed = false;
		},

		[fetchCurrentUser.fulfilled](state, action) {
			state.accessToken = action.payload.newAccessToken;
			state.refreshToken = action.payload.newRefreshToken;
			state.sid = action.payload.newSid;
			// state.isLoggedIn = true;
			// state.isRefreshed = true;
			state.isRefreshed = false;
		},
	},
});

export const authReducer = authSlice.reducer;

const authPersistConfig = { key: 'auth', storage };

export const persistedAuthReducer = persistReducer(
	authPersistConfig,
	authReducer
);
