import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ArrowButton = ({ prevStep, nextStep,  handleSubmit, onSubmit, selectedOption }) => {
  return (
   <>
    
    <div className='flex justify-between lg:justify-end w-full space-x-12   lg:space-x-8 absolute bottom-2 sm:bottom-7 right-1  lg:right-8'>
          <div className="flex justify-between mx-4 sm:mx-0 sm:justify-around w-full lg:justify-end gap-8">
          <button
          className="bg-[#F1C530] text-white rounded-full p-3 disabled:opacity-50 hover:bg-[#e0b52b]"
          onClick={prevStep}
        >
          <FaArrowLeft className="text-xl" />
        </button>
        <button
          className="bg-[#F1C530] text-white rounded-full p-3 disabled:opacity-50 hover:bg-[#e0b52b]"
          onClick={handleSubmit(onSubmit)}
        >
          <FaArrowRight className="text-xl" />
        </button>
          </div>
          </div>
   </>
  );
};

export default ArrowButton;
