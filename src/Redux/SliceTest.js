import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	test: { test: [] },
};

const SliceTest = createSlice({
	name: 'test',
	initialState,
	reducers: {},
});

export const testReducer = SliceTest.reducer;
