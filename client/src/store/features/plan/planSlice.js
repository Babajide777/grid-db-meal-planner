const { createSlice } = require("@reduxjs/toolkit");

const plan =
  typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("plan"))
    : null;

const initialState = {
  plan: plan ? plan : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

const planSlice = createSlice({
  initialState,
  name: "plan",
  reducers: {
    addPDF: (state, action) => {
      state.pdf = action.payload;
    },
  },
});

export const { addPDF } = planSlice.actions;
export default planSlice.reducer;
