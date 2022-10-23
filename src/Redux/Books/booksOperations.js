import { createAsyncThunk } from '@reduxjs/toolkit';
import API from 'Services/Api/Api';

const {
	getUserBooks,
	postUserBook,
	editUserBook,
} = API;


// get all user books
export const getUserBooksThunk = createAsyncThunk('books/getAllBooks', getUserBooks);

// add a new book
export const addUserBookThunk = createAsyncThunk('books/add', async (book, thunkAPI) => {
	try {
		const res = await postUserBook(book);
		return res
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})
export const addBookReview = createAsyncThunk('books/addReview', async (review, thunkAPI) => {
	try {
		const res = await editUserBook(review)
		return res;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})