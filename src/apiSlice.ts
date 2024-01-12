// apiSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface ApiData {}

const initialState: {
  data: ApiData | null;
  loading: "idle" | "pending";
  isFeedbackSubmited: boolean;
} = {
  data: null,
  loading: "idle",
  isFeedbackSubmited: false,
};

const apiUrl = "https://65a0ff01600f49256fb0abf2.mockapi.io/api/v1/feedback";

const submitFeedback = createAsyncThunk("api/fetchData", async () => {
  await axios.post<ApiData>(apiUrl);
  return { isFeedbackSubmited: true };
});

const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitFeedback.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(
        submitFeedback.fulfilled,
        (state, action: PayloadAction<ApiData>) => {
          state.loading = "idle";
          state.data = action.payload;
          state.isFeedbackSubmited = true;
        }
      )
      .addCase(submitFeedback.rejected, (state) => {
        state.loading = "idle";
      });
  },
});

export { submitFeedback };

export default apiSlice.reducer;
