import {postPlanning,patchPlanning,getPlanning} from "Services/Api/Api";

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

  export const currentPlanning = createAsyncThunk(
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