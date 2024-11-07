"use client"
import React from "react";
import Image from "next/image";
import Prograssbar from "./Prograssbar";
import { useProgress } from '../context/ProgressProvider ';


const Schedule = ({ handleSubmitForm, nextStep }) => {
  const {progress } = useProgress();
  return (
    <div className="w-full h-[100vh] bg-[#D6D6D6] border-[0.5px] border-[#26262682] lg:p-3 overflow-hidden">
      <div className="h-full w-full flex relative">
        <div className="hidden w-[35%] bg-[#79BF43] text-white rounded-l-3xl lg:flex flex-col justify-center items-center p-5 text-center">
          <Image
            src="/images/trophy.png"
            alt="foot"
            width={100}
            height={100}
          />
          <h1 className="text-5xl font-bold leading-[60px] mt-4 text-start">
            Congratulations! You're one step away from a brighter, solar-powered future!
          </h1>
        </div>
        <div className="container mx-auto bg-white w-full p-6 flex flex-col items-center overflow-y-auto">
          <div className="w-full sm:w-[50%] lg:w-[36%]   lg:mt-12">
            <Prograssbar progress = {progress}/>
          </div>
          <div className="flex flex-col items-center w-full">
            <div className="p-8 text-center lg:mt-12 flex flex-col items-center">
              <h1 className="text-3xl font-bold mb-6">Congratulations! You qualify!</h1>
              <Image
            src="/images/trophy.png"
            alt="foot"
            width={100}
            height={100}
            className="lg:hidden w-40 h-40"
          />
              <p className="text-lg mt-10 lg:mt-0 mb-6 lg:mb-8 font-bold lg:font-semibold">
                Book a time to review your quote with a <br />
                solar expert from our team.
              </p>
              <button
                onClick={() => {
                  handleSubmitForm(); // Call the function to log data
                  nextStep(); // Move to the next step or perform any other action
                }}
                className="mt-12 tracking-wide uppercase w-full font-semibold py-4 lg:py-2 px-4 bg-[#79BF43] text-white rounded-full transition-colors text-center cursor-pointer flex items-center justify-center"
              >
                Schedule Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
