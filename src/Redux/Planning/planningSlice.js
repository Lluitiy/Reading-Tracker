import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	planning: {},
};
const planningSlice = createSlice({
	name: 'planning',
	initialState,
	reducers: {},
	extraReducers: {},
});

export const planningReducer = planningSlice.reducer;
