import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	planning: {
		books:[],
		startDate:'',
		endDate:'',
		pagesPerDay:null,
		duration:null,
		stats:null
	},
};

const planningSlice = createSlice({
	name: 'planning',
	initialState,
	reducers: {},
	extraReducers: {
		[startPlanning.fulfilled](state,{payload}){
			state.planning.books = payload.books
			state.planning.startDate =payload.startDate
			state.planning.endDate =payload.endDate
			state.planning.pagesPerDay =payload.pagesPerDay
			state.planning.duration =payload.duration
			state.planning.stats = payload.stats
		},
		[addReadingPage.fulfilled](state,{payload}){
			state.planning.books = books.map(book=>book.id===payload.id?
				book.pagesFinished=payload.pagesFinished+payload.page:book)
		},
		[getCurrentPlanning.fulfilled](state,{payload}){
			state.planning.books = payload.books
			state.planning.startDate =payload.startDate
			state.planning.endDate =payload.endDate
			state.planning.pagesPerDay =payload.pagesPerDay
			state.planning.duration =payload.duration
			state.planning.stats = payload.stats
		}
	},
});

export const planningReducer = planningSlice.reducer;
