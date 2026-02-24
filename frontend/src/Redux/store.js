import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import doctorsReducer from "./doctorsSlice"
export const store = configureStore({
  reducer: {
    auth: authReducer,
    doctors: doctorsReducer,
  },
});