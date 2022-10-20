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
import { planningReducer } from './Planning/planningSlice';
import { userReducer } from './User/userSlice';
import { booksSlice } from './Books/booksSlice';

export const store = configureStore({
	reducer: {
		auth: persistedAuthReducer,
		books: booksSlice.reducer,
		planning: planningReducer,
		user: userReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);
