import React from "react";

interface SliderControlsProps {
  activeIndex: number;
  totalIndex: number;
}

const SliderControls: React.FC<SliderControlsProps> = ({
  activeIndex,
  totalIndex,
}) => {
  return (
    <nav className="sliderControls">
      {[...Array(totalIndex)].map((_, index) => (
        <button
          key={index}
          className={`sliderButton ${
            activeIndex === index ? "sliderSelected" : ""
          }`}
          type="button"
          aria-label={`Go to ${index + 1} image`}
        ></button>
      ))}
    </nav>
  );
};

export default SliderControls;
