import { toast } from "react-toastify";
import { deleteMealPlan } from "./planService";
import { addMealPlan, getAllMealPlans } from "./planService";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  plans: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  change: false,
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

//get all meal plans
export const allMealPlans = createAsyncThunk(
  "/all-meals",
  async (data, thunkAPI) => {
    try {
      return await getAllMealPlans();
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

//delete a meal plan
export const deleteAMealPlan = createAsyncThunk(
  "/delete-meal",
  async (data, thunkAPI) => {
    try {
      return await deleteMealPlan(data);
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
    reset: (state) => {
      state = initialState;
    },
    resetIsSuccess: (state) => {
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createAMealPlan.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createAMealPlan.fulfilled, (state, action) => {
        action.payload.success
          ? (state.isSuccess = true)
          : (state.isSuccess = false);
        state.isLoading = false;
        state.plans.push(action.payload.data);
        toast.success(action.payload.message);
      })
      .addCase(createAMealPlan.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        toast.error(action.payload);
      })
      .addCase(allMealPlans.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
      })
      .addCase(allMealPlans.fulfilled, (state, action) => {
        state.isLoading = false;
        state.plans = action.payload.data;
      })
      .addCase(allMealPlans.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })
      .addCase(deleteAMealPlan.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
      })
      .addCase(deleteAMealPlan.fulfilled, (state, action) => {
        state.isLoading = false;
        state.plans = state.plans.filter((plan) => plan.id !== action.meta.arg);
        state.change = !state.change;
        toast.success(action.payload.message);
      })
      .addCase(deleteAMealPlan.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        toast.error(action.payload);
      });
  },
});

export const { reset } = planSlice.actions;
export default planSlice.reducer;
