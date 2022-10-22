import { createSlice } from '@reduxjs/toolkit';
import STATUS from 'components/Constants/status';
import { addUserBookThunk, getUserBooksThunk } from './booksOperations';

const initialStateBooks = {
	books: {		
		goingToRead: [],
		currentlyReading: [],
		finishedReading: [],
	},
	status: STATUS.idle,
};

export const booksSlice = createSlice({
	name: 'books',
	initialState: initialStateBooks,
	reducers: {},
	extraReducers: {
		[getUserBooksThunk.fulfilled]: (state, { payload }) => {
			state.books.goingToRead = payload.goingToRead;
			state.books.currentlyReading = payload.currentlyReading;
			state.books.finishedReading = payload.finishedReading;
			state.status = STATUS.fulfilled
		},
		[getUserBooksThunk.pending]: state => {
			state.status = STATUS.pending
		},
		[getUserBooksThunk.rejected]: state => {
			state.status = STATUS.rejected
		},

		[addUserBookThunk.fulfilled]: (state, { payload }) => {
			state.books.goingToRead = [payload.newBook, ...state.books.goingToRead];
		},
	},
});
