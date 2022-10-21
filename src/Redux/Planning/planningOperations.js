import API from 'Services/Api/Api';
import { createAsyncThunk } from '@reduxjs/toolkit';

const { postPlanning, patchPlanning, getPlanning, deleteUserBook } = API;

export const startPlanning = createAsyncThunk(
	'planning/startPlanning',
	async (PlanningObject, thunkAPI) => {
		try {
			const data = postPlanning(PlanningObject);
			return data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);

export const addReadingPage = createAsyncThunk(
	'planning/addReadingPage',
	async ({ page, id }, thunkAPI) => {
		try {
			const data = patchPlanning(page);
			return data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);

export const getCurrentPlanning = createAsyncThunk(
	'planning/getCurrentPlanning',
	async (_, thunkAPI) => {
		try {
			const data = await getPlanning();
			console.log(data);
			return data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);
export const deletePlanningBook = createAsyncThunk(
	'planning/getCurrentPlanning',
	async (id, thunkAPI) => {
		try {
			return await deleteUserBook(id);
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);
