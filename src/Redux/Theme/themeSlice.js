import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import persistReducer from 'redux-persist/es/persistReducer';

const initialstateTheme = {
	theme: true,
};
const themeSlice = createSlice({
	name: 'theme',
	initialState: initialstateTheme,
	reducers: {
		toggleTheme(state, { payload }) {
			state.theme = payload;
		},
	},
});

export const themeReducer = themeSlice.reducer;
export const { toggleTheme } = themeSlice.actions;

const themePersistConfig = {
	key: 'theme',
	storage,
};
export const persisistedThemeReducer = persistReducer(
	themePersistConfig,
	themeReducer
);
