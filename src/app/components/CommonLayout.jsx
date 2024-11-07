"use client"
import React, {useState} from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import Prograssbar from './Prograssbar';
import { useProgress } from '../context/ProgressProvider ';


const CommonLayout = ({ children, title, imageUrl, sidebarContent, prevStep, nextStep }) => {
 
  const {progress, setProgress } = useProgress();
  
  // const handleNextClick = () => {
  //   if (progress > 0) {
  //     setProgress(prevProgress => Math.max(prevProgress - 5, 0));
  //   }
  // };

  // const handlePreviousClick = () => {
  //   if (progress < 100) {
  //     setProgress(prevProgress => Math.min(prevProgress + 5, 100));
  //   }
  // };
  return (
    <>
      <div className="w-full h-[100vh] bg-[#D6D6D6] border-[0.5px] border-[#26262682] p-3 overflow-hidden">
        <div className="h-full w-full flex relative">
          <div className="hidden  w-[35%] bg-[#79BF43] text-white rounded-l-3xl lg:flex flex-col justify-center items-center p-5 text-center">
            <Image
              src={imageUrl}
              alt="sidebar image"
              width={100}
              height={100}
              className='w-50 h-50'
            />
            <h1 className="text-5xl font-bold leading-[60px] mt-4 text-start">
              {sidebarContent}
            </h1>
          </div>
         <div className='relative flex flex-col container mx-auto rounded-none lg:rounded-r-3xl bg-white w-full overflow-y-auto'>
         <div className="container mx-auto rounded-3xl lg:rounded-r-3xl bg-white w-full p-6 overflow-y-auto flex flex-col items-center">
            <div className="w-full sm:w-[50%] lg:w-[36%]   lg:mt-12">
              <Prograssbar progress = {progress}/>
            </div>
            <div className="flex flex-col items-center w-full ">
              <div className="space-y-3 sm:space-y-5 lg:space-y-10">
                <div>
                  <h2 className="lg:text-xl text-center font-bold lg:mb-4 lg:p-3">
                    {title}
                  </h2>
                </div>
                {children}
              </div>
            </div>
          </div>
          <div className='flex justify-between lg:justify-end w-full space-x-12   lg:space-x-8 absolute bottom-2 sm:bottom-7 right-1  lg:right-8'>
          <div className="flex justify-between mx-4 sm:mx-0 sm:justify-around w-full lg:justify-end gap-8">
        <button
          className="bg-[#F1C530] text-white rounded-full p-3 disabled:opacity-50"
          onClick={() => {
            prevStep();
           
          }}
          
        >
          <FaArrowLeft className="text-xl" />
        </button>
        <button
          className="bg-[#F1C530] text-white rounded-full p-3 disabled:opacity-50"
          onClick={
            () =>{ nextStep(); 
            // handleNextClick();
            }
          }
        >
          <FaArrowRight className="text-xl" />
        </button>
          </div>
          </div>
         </div>
        
        </div>
      </div>

      {/* <div className="flex justify-around relative bottom-20   lg:bottom-6 lg:right-12 mr-6   lg:space-x-6">
        <button
          className="bg-[#F1C530] text-white rounded-full p-3 disabled:opacity-50"
          onClick={() => {
            prevStep();
            handlePreviousClick();
          }}
          
        >
          <FaArrowLeft className="text-xl" />
        </button>
        <button
          className="bg-[#F1C530] text-white rounded-full p-3 disabled:opacity-50"
          onClick={
            () =>{ nextStep(); 
            handleNextClick();
            }
          }
        >
          <FaArrowRight className="text-xl" />
        </button>
      </div> */}
    </>
  );
};

export default CommonLayout;