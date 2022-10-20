import { createSlice } from '@reduxjs/toolkit';
import { addUserBookThunk, getUserBooksThunk } from './booksOperations';

const initialStateBooks = {
	
		goingToRead: [],
		currentlyReading: [],
		finishedReading: []

};

export const booksSlice = createSlice({
	name: 'books',
	initialState: initialStateBooks,
	reducers: {},
	extraReducers: {
		[getUserBooksThunk.fulfilled]: (state, {payload}) => {
			state.goingToRead = payload.goingToRead;
			state.currentlyReading = payload.currentlyReading;
			state.finishedReading = payload.finishedReading;
		},
		[addUserBookThunk.fulfilled]: (state, { payload }) => {
			state.goingToRead = [payload.newBook, ...state.goingToRead]
		}
	},
});

