"use client";
import React, { useState } from "react";
import CommonLayout from "./CommonLayout";

const ElectricBillSlider = ({prevStep, nextStep}) => {
  const [billAmount, setBillAmount] = useState(200);

  const handleSliderChange = (event) => {
    setBillAmount(parseInt(event.target.value));
  };

  return (
    <CommonLayout
      title="  What is your average electric bill payment?"
      imageUrl="/images/saving.png"
      sidebarContent="Every step towards solar is a step towards savings and sustainability!"
      prevStep={prevStep}
      nextStep={nextStep}
    >
      <div className="space-y-20 mt-12">
        {/* <h2 className="text-xl text-center font-bold mb-4">
        What is your average electric bill payment?
      </h2> */}
        <div className="text-center mb-6">
          <span className="text-6xl font-bold text-[#F1C530]">
            ${billAmount}
          </span>
        </div>
        <div className="relative pt-1">
          <input
            type="range"
            min="0"
            max="500"
            value={billAmount}
            onChange={handleSliderChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #79BF43 0%, #79BF43 ${
                billAmount / 5
              }%, #F1C530 ${billAmount / 5}%, #FFA500 100%)`,
            }}
          />
        </div>
        <style jsx>{`
          input[type="range"]::-webkit-slider-thumb {
            appearance: none;
            height: 30px;
            width: 30px;
            border-radius: 50%;
            border: 2px solid #79bf43;
            background: black;
            cursor: pointer;
          }
          input[type="range"]::-moz-range-thumb {
            height: 30px;
            width: 30px;
            border: 2px solid #79bf43;
            border-radius: 50%;
            background: black;
            cursor: pointer;
          }
        `}</style>
      </div>
    </CommonLayout>
  );
};

export default ElectricBillSlider;
