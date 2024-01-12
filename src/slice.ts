import { createSlice, PayloadAction, Store } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import axios from "axios";

interface AppState {
  isFeedbackSubmited: boolean;
}

const initialState: AppState = {
  isFeedbackSubmited: false,
};

type SubmitFeedbackAction = PayloadAction<boolean>;

type SubmitFeedbackThunk = ThunkAction<void, Store, {}, SubmitFeedbackAction>;

const submitFeedback =
  (data: any): SubmitFeedbackThunk =>
  async (dispatch) => {
    try {
      await axios.post(
        `https://65a0ff01600f49256fb0abf2.mockapi.io/api/v1/feedback`,
        data
      );
      dispatch(setFeedbackSubmited(true));
    } catch (error) {
      alert(error);
    }
  };

type SetFeedbackSubmitedAction = PayloadAction<boolean>;
export const appSlice = createSlice({
  name: "appdata",
  initialState,
  reducers: {
    setFeedbackSubmited: (state, action: SetFeedbackSubmitedAction) => {
      state.isFeedbackSubmited = action.payload;
    },
  },
});

export const { setFeedbackSubmited } = appSlice.actions;
export { submitFeedback };
export type { SubmitFeedbackThunk };
export default appSlice.reducer;
