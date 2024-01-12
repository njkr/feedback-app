import React, { useState, useEffect } from "react";
import "./slider.css";
import SliderControls from "./SliderControls";
import SliderContent from "./SliderContent";

interface SliderComponentProps {
  handleFeedBackSubmit: ({}) => void;
}

let dummyData = [
  {
    title: "React animations with animate.css",
    options: [
      {
        label: "Good",
        icon: "Good",
      },
      {
        label: "Not Sure",
        icon: "Not Sure",
      },
      {
        label: "Bad",
        icon: "Bad",
      },
    ],
  },
  {
    title: "Fluency is a simple and effective library ?",
    options: [
      {
        label: "Good",
        icon: "Good",
      },
      {
        label: "Not Sure",
        icon: "Not Sure",
      },
      {
        label: "Bad",
        icon: "Bad",
      },
    ],
  },
  {
    title:
      "Fancy angular library containing easy to use and customizable animation ?",
    options: [
      {
        label: "Good",
        icon: "Good",
      },
      {
        label: "Not Sure",
        icon: "Not Sure",
      },
      {
        label: "Bad",
        icon: "Bad",
      },
    ],
  },
];

const SliderComponent: React.FC<SliderComponentProps> = ({
  handleFeedBackSubmit,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [height, setHeight] = useState(0);

  const handleFeedBackClick = (index: number): void => {
    setActiveIndex(index + 1);
  };

  let totalIndex: number = dummyData.length + 1;

  const slideStyle: React.CSSProperties = {
    top: `-${100 * activeIndex}%`,
  };

  const sliderSlideDivStyle: React.CSSProperties = {
    height: `${height}px`,
  };

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    setHeight(window.innerHeight);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="w-full mx-0 my-auto">
      <div
        className="mx-0 my-auto overflow-hidden relative w-full"
        style={sliderSlideDivStyle}
      >
        <SliderContent
          slideStyle={slideStyle}
          handleFeedBackClick={handleFeedBackClick}
          sliderDatas={dummyData}
          handleFeedBackSubmit={handleFeedBackSubmit}
        />

        <SliderControls activeIndex={activeIndex} totalIndex={totalIndex} />
      </div>
    </section>
  );
};

export default SliderComponent;
