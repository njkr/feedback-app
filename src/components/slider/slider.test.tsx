import React from "react";
import { render, screen } from "@testing-library/react";
import SliderComponent from "./SliderComponent";

test("renders SliderComponent without crashing", () => {
  render(<SliderComponent handleFeedBackSubmit={() => {}} />);
});
