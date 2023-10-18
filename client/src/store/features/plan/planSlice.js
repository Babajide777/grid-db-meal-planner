import { addMealPlan } from "./planService";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  plan: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//create a meal plan
export const createAMealPlan = createAsyncThunk(
  "/add-meal",
  async (data, thunkAPI) => {
    try {
      return await addMealPlan(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const planSlice = createSlice({
  initialState,
  name: "plan",
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createAMealPlan.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createAMealPlan.fulfilled, (state, action) => {
        console.log(state, "state");
        console.log(action, "action");
        action.payload.success
          ? (state.isSuccess = true)
          : (state.isSuccess = false);
        state.isLoading = false;
        state.plan = action.payload.data;
        state.message = action.payload.message;
      })
      .addCase(createAMealPlan.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      });
  },
});

export const { reset } = planSlice.actions;
export default planSlice.reducer;
