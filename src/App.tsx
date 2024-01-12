import React, { useState } from "react";
import "./App.css";
import SliderComponent from "./components/slider/SliderComponent";
import { useDispatch, useSelector } from "react-redux";
import { submitFeedback } from "./apiSlice";
import { AppDispatch } from "./store";

interface appState {
  app: {
    isFeedbackSubmited: boolean;
  };
}

function App() {
  const dispatch = useDispatch();
  // const { isFeedbackSubmited = false } = useSelector(
  //   (state: appState) => state.app
  // );
  let [isFeedbackSubmited, setIsFeedbackSubmited] = useState(false);
  let handleFeedBackSubmit = (data: any) => {
    // some type issue -
    // dispatch(submitFeedback() as ReturnType<typeof dispatch>);
    setIsFeedbackSubmited(true);
  };
  return (
    <div className="App">
      {isFeedbackSubmited ? (
        <div className="thank-you-wrapper">
          <div className="thank-you text-center text-4xl font-bold">
            Thank You!
          </div>
        </div>
      ) : (
        <SliderComponent handleFeedBackSubmit={handleFeedBackSubmit} />
      )}
    </div>
  );
}

export default App;
