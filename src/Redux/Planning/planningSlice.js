import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import persistReducer from 'redux-persist/es/persistReducer';

import {
	startPlanning,
	getCurrentPlanning,
} from '../Planning/planningOperations';

const initialState = {
	books: [],
	booksId: [],
	startDate: '',
	endDate: '',
	pagesPerDay: null,
	duration: null,
	stats: null,
	isShowStartTraningBtn: false,
	isShowResults: false,
	planFact: [],
	readedPages: null,
};

const planningSlice = createSlice({
	name: 'planning',
	initialState,
	reducers: {
		showStartTraningBtn(state, { payload }) {
			state.isShowStartTraningBtn = payload;
		},
		showResults(state, { payload }) {
			state.isShowResults = payload;
		},

		addPlanFact(state, { payload }) {
			state.planFact = payload;
		},

		clean(state, { payload }) {
			state.booksId = payload;
			state.books = payload;
		},
	},
	extraReducers: {
		[startPlanning.fulfilled](state, { payload }) {
			state.books = payload.books;
			state.startDate = payload.startDate;
			state.endDate = payload.endDate;
			state.pagesPerDay = payload.pagesPerDay;
			state.duration = payload.duration;
			state.booksId = payload.books.map(({ _id }) => _id);
			state.stats = payload.stats;
			state.isShowStartTraningBtn = true;
		},

		[addReadingPage.fulfilled](state, { payload }) {
			state.readedPages = payload.planning.stats;
		},

		[getCurrentPlanning.fulfilled](state, { payload }) {
			state.books = payload.planning.books;
			state.startDate = payload.planning.startDate;
			state.endDate = payload.planning.endDate;
			state.pagesPerDay = payload.planning.pagesPerDay;
			state.duration = payload.planning.duration;
			state.stats = payload.planning.stats;
			state.readedPages = payload.planning.stats;
			state.isShowResults = state.planFact.length > 0 ? true : false;
		},
	},
});

export const planningReducer = planningSlice.reducer;
export const { showStartTraningBtn, showResults, clean, addPlanFact } =
	planningSlice.actions;

const planningPersistConfig = {
	key: 'planning',
	storage,
	whitelist: ['planFact'],
};

export const persistedPlanningReducer = persistReducer(
	planningPersistConfig,
	planningReducer
);