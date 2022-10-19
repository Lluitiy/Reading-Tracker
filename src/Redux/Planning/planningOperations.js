import {postPlanning,patchPlanning,getPlanning} from "Services/Api/Api";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const startPlanning = createAsyncThunk(
    "planning/startPlanning",
  async (PlanningObject, thunkAPI) => {
    try {
        
      const data = postPlanning(PlanningObject);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)

export const addReadingPage = createAsyncThunk(
    "planning/addReadingPage",
    async ({page,id}, thunkAPI) => {
      try {
        const data = patchPlanning(page);
        return data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

  export const getcurrentPlanning = createAsyncThunk(
    "planning/getCurrentPlanning",
    async (_, thunkAPI) => {
      try {
        const data = await getPlanning();
        return data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );