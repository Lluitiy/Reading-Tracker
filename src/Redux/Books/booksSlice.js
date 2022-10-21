import { createSlice } from '@reduxjs/toolkit';
import { addUserBookThunk, getUserBooksThunk } from './booksOperations';

const initialStateBooks = {
	goingToRead: [],
	currentlyReading: [],
	finishedReading: [],
	isLoadingBooks: false,
};

export const booksSlice = createSlice({
	name: 'books',
	initialState: initialStateBooks,
	reducers: {},
	extraReducers: {
		[getUserBooksThunk.fulfilled]: (state, { payload }) => {
			state.goingToRead = payload.goingToRead;
			state.currentlyReading = payload.currentlyReading;
			state.finishedReading = payload.finishedReading;
			state.isLoadingBooks = false;
		},
		[getUserBooksThunk.pending]: state => {
			state.isLoadingBooks = true;
		},
		[getUserBooksThunk.rejected]: state => {
			state.isLoadingBooks = false;
		},

		[addUserBookThunk.fulfilled]: (state, { payload }) => {
			state.goingToRead = [payload.newBook, ...state.goingToRead];
		},
	},
});
