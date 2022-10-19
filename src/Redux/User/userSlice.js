import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: {  },
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: {},
});

export const userReducer = userSlice.reducer;
