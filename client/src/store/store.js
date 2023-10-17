import { configureStore } from "@reduxjs/toolkit";
import plan from "./features/plan/planSlice";

let store = configureStore({
  reducer: {
    plan,
  },
});

export default store;
