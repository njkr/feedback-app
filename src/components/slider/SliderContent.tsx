import React, { useState } from "react";

interface Option {
  label: string;
  icon: keyof typeof iconsList;
}

interface SliderDataArray {
  title: string;
  options: Option[];
}

interface IconsList {
  [key: string]: JSX.Element;
}

const iconsList: IconsList = {
  Good: (
    <img
      src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44d/512.gif"
      alt="👍"
      width="64"
      height="64"
    />
  ),
  Bad: (
    <img
      src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44e/512.gif "
      alt="👍"
      width="64"
      height="64"
    />
  ),
  "Not Sure": (
    <img
      src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f914/512.gif"
      alt="👍"
      width="64"
      height="64"
    />
  ),
};

interface SliderContentProps {
  sliderDatas: SliderDataArray[];
  slideStyle: React.CSSProperties;
  handleFeedBackClick: (index: number) => void;
  handleFeedBackSubmit: ({}) => void;
}

interface feedbackResult {
  title: string;
  label: string;
}

const SliderContent: React.FC<SliderContentProps> = ({
  sliderDatas,
  slideStyle,
  handleFeedBackClick,
  handleFeedBackSubmit,
}) => {
  const [feedBackData, setFeedBackData] = useState<feedbackResult[] | []>([]);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  return (
    <div className="sliderSlideDiv" style={slideStyle}>
      {sliderDatas.map(({ title, options }, index) => (
        <div className="sliderSlide flex w-full" key={index}>
          <div className="w-1/2 bg-purple-700 flex items-center justify-center px-20">
            <h1 className="text-8xl text-white text-wrap">{title}</h1>
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <div className="emojiWrapper m-auto grid grid-cols-3 gap-9">
              {options.map(({ label, icon }, optionIndex) => (
                <div
                  className="emoji"
                  onClick={() => {
                    handleFeedBackClick(index);
                    if (sliderDatas.length - 1 === index) {
                      setTimeout(() => {
                        setIsSubmit(sliderDatas.length - 1 === index);
                      }, 500);
                    }
                    setFeedBackData([...feedBackData, { title, label }]);
                  }}
                  key={optionIndex}
                >
                  {iconsList[icon]}
                  <div className="label mt-2">
                    <h4 className="text-blue-900 font-bold">{label}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      <div className="sliderSlide flex w-full">
        <div
          className={`submitSlide bg-purple-700 ${isSubmit && "rightAnimate"}`}
        ></div>
        <div
          className={`submitSlide p-14 flex flex-col items-start ${
            isSubmit && "leftAnimate"
          }`}
        >
          {feedBackData.map((v, index) => (
            <div className="w-full flex" key={index}>
              <div className="flex items-center">
                <h1 className="font-sans text-4xl antialiased font-medium py-10">
                  {v.title}
                </h1>
                <div className="ml-5">
                  {iconsList[v.label]}
                  <p>{v.label}</p>
                </div>
              </div>
            </div>
          ))}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded"
            onClick={() => {
              handleFeedBackSubmit(feedBackData);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderContent;
