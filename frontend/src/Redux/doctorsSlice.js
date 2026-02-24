import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchDoctors = createAsyncThunk(
  "doctors/fetchDoctors",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("/api/admin/doctors"); 
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch doctors"
      );
    }
  }
);

const doctorsSlice = createSlice({
  name: "doctors",
  initialState: {
    doctors: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDoctors.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDoctors.fulfilled, (state, action) => {
        state.loading = false;
        state.doctors = action.payload;
      })
      .addCase(fetchDoctors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default doctorsSlice.reducer;