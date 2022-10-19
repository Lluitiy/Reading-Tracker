import { createSlice } from '@reduxjs/toolkit';

const initialStateBooks = {
	books: {},
};

export const booksSlice = createSlice({
	name: 'books',
	initialState: initialStateBooks,
	reducers: {},
	extraReducers: {},
});
