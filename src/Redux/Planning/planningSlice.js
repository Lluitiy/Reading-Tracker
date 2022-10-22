import { createSlice } from '@reduxjs/toolkit';
import {
	startPlanning,
	addReadingPage,
	getCurrentPlanning,
} from '../Planning/planningOperations';

const initialState = {
	books: [],
	booksId:[],
	startDate: '',
	endDate: '',
	pagesPerDay: null,
	duration: null,
	stats: null,
	isShowStartTraningBtn: false,
	isShowResults: false,
	planFact: [],
	isLoading: false,
	errorMassage:false
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
		clean(state,{payload}){
			state.booksId = payload
			state.books = payload
		}
	},
	extraReducers: {
		[startPlanning.fulfilled](state, { payload }) {
			state.books = payload.books;
			state.startDate = payload.startDate;
			state.endDate = payload.endDate;
			state.pagesPerDay = payload.pagesPerDay;
			state.duration = payload.duration;
			state.booksId = payload.books.map(({_id})=>_id)
			state.stats = payload.stats;
			state.isShowStartTraningBtn = true;
			for (let i = 1; i <= payload.duration; i += 1) {
				state.planFact.push({
					name: `Day ${i}`,
					fact: 0,
					plan: payload.pagesPerDay * i,
				});
			}
		},
		[startPlanning.pending](state) {
			state.isLoading = true;
		},
		[startPlanning.rejected](state) {
			state.isLoading = false;
			state.errorMassage = true
		},
		[addReadingPage.pending](state) {
			state.isLoading = true;
		},
		[addReadingPage.fulfilled](state) {
			state.isLoading = false;
		},
		[addReadingPage.rejected](state) {
			state.isLoading = false;

		},
		[getCurrentPlanning.fulfilled](state, { payload }) {
			state.books = payload.planning.books;
			state.startDate = payload.planning.startDate;
			state.endDate = payload.planning.endDate;
			state.pagesPerDay = payload.planning.pagesPerDay;
			state.duration = payload.planning.duration;
			state.stats = payload.planning.stats;
			state.isLoading = false;
		},
		[getCurrentPlanning.pending](state){
			state.isLoading = true;
		},
		[getCurrentPlanning.rejected](state) {
			state.isLoading = false;
		},
	},
});

export const planningReducer = planningSlice.reducer;
export const { showStartTraningBtn, showResults,clean } = planningSlice.actions;
