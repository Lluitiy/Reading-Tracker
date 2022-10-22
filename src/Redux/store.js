import { configureStore } from '@reduxjs/toolkit';
import {
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import { persistedAuthReducer } from './Auth/authSlice';
import { persistedPlanningReducer } from './Planning/planningSlice';
import { userReducer } from './User/userSlice';
import { booksSlice } from './Books/booksSlice';
import { persisistedThemeReducer } from './Theme/themeSlice';

export const store = configureStore({
	reducer: {
		auth: persistedAuthReducer,
		books: booksSlice.reducer,
		planning: persistedPlanningReducer,
		user: userReducer,
		theme: persisistedThemeReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);
