import React, { useState } from 'react';

const Prograssbar = ({progress}) => {
  // const [progress, setProgress] = useState(95); // Initial progress is 95%

  // Decrease progress by 5%, but not below 0
  // const handleNextClick = () => {
  //   if (progress > 0) {
  //     setProgress(prevProgress => Math.max(prevProgress - 5, 0));
  //   }
  // };

  // Increase progress by 5%, but not above 100
  // const handlePreviousClick = () => {
  //   if (progress < 100) {
  //     setProgress(prevProgress => Math.min(prevProgress + 5, 100));
  //   }
  // };

  return (
    <div className="w-[95%] mx-auto bg-[#B9C4BE] rounded-full h-7 mb-4 p-[10px] flex items-center mt-2">
      <div
        className="bg-[#F1C530] h-[6px] rounded-full transition-width duration-300 ease-out"
        style={{ width: `${progress}%` }} 
      ></div>
      <span className="ml-2 text-black font-bold">{progress}%</span>

      {/* <div className="ml-4 flex gap-2">
        <button
          onClick={handlePreviousClick}
          className="p-2 bg-green-500 text-white rounded"
        >
          Previous
        </button>
        <button
          onClick={handleNextClick}
          className="p-2 bg-blue-500 text-white rounded"
        >
          Next
        </button>
      </div> */}
    </div>
  );
};

export default Prograssbar;
