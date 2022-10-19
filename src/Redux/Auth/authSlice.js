import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const initialState = {
	auth: {},
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: {},
});

export const authReducer = authSlice.reducer;

const authPersistConfig = { key: 'auth', storage, whitelist: ['token'] };

export const persistedAuthReducer = persistReducer(
	authPersistConfig,
	authReducer
);
