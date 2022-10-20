import { createSlice } from '@reduxjs/toolkit';
import {
	startPlanning,
	addReadingPage,
	getcurrentPlanning,
} from '../Planning/planningOperations';
const initialState = {
	books: [],
	startDate: '',
	endDate: '',
	pagesPerDay: null,
	duration: null,
	stats: null,
};

const planningSlice = createSlice({
	name: 'planning',
	initialState,
	reducers: {},
	extraReducers: {
		[startPlanning.fulfilled](state, { payload }) {
			state.books = [...payload.books, ...state.books];
			state.startDate = payload.startDate;
			state.endDate = payload.endDate;
			state.pagesPerDay = payload.pagesPerDay;
			state.duration = payload.duration;
			state.stats = payload.stats;
		},
		[addReadingPage.fulfilled](state, { payload }) {
			state.books = state.books.map(book =>
				book.id === payload.id
					? (book.pagesFinished = payload.pagesFinished + payload.page)
					: book
			);
		},
		[getcurrentPlanning.fulfilled](state, { payload }) {
			console.log(payload.books);
			state.books = payload.books;
			state.startDate = payload.startDate;
			state.endDate = payload.endDate;
			state.pagesPerDay = payload.pagesPerDay;
			state.duration = payload.duration;
			state.stats = payload.stats;
		},
	},
});

export const planningReducer = planningSlice.reducer;
