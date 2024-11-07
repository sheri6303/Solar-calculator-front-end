"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import RightSide from "./RightSide";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import SolarComponent from "./components/Solar.jsx";
import FileInput from "./components/FileInput.jsx";
import Prograssbar from "./components/Prograssbar.jsx";
import MeetingInfo from "./components/MeetingInfo.jsx";
import Image from "next/image.js";
import CalendarPicker from "./components/Calendar/Calendar.jsx";
import Questions from "./components/Questions.jsx";
import FinialisezQuote from "./components/FinialisezQuote.jsx";
import SolarEstimateForm from "./components/SolarEstimateForm.jsx";
import CheckOutSavings from "./components/CheckOutSavings.jsx";
import ElectricBillSlider from "./components/ElectricBillSlider.jsx";
import RoofSolar from "./components/RoofSolar.jsx";
import TimePicker from "./components/TimePicker.jsx";
import Input from "./components/Input.jsx";
import { useFormContext } from "./context/FormProvider.jsx";

const Layout = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const { formData, setFormData } = useFormContext();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
  };
  const content = [
    {
      component: (
        <div key="page1" className="w-[40%] mt-12">
          <SolarComponent />
        </div>
      ),
      rightSideData: {
        image: "/images/charging.png",
        text: "Store energe for brighter tomorrow with solor",
      },
    },
    {
      component: (
        <div key="page2">
          <div className="flex flex-col items-center space-y-6 p-8">
            <h1 className="text-2xl font-bold text-center">
              Please upload a copy of last electric bill
            </h1>
            <p className="text-black text-lg font-semibold pt-16">
              if your bill does not show more then one month's usage, please at
              least two bills.
            </p>

            <div className="grid grid-rows-2 gap-4 w-full max-w-2xl">
              <FileInput
                text="Bill 1"
                name="bill1"
                register={register}
                setValue={setValue}
              />
              {errors.bill1 && (
                <p className="text-red-600">Bill 1 is required</p>
              )}

              <FileInput
                text="Bill 2"
                name="bill2"
                register={register}
                setValue={setValue}
              />
              {errors.bill2 && (
                <p className="text-red-600">Bill 2 is required</p>
              )}
            </div>
          </div>
        </div>
      ),
      rightSideData: {
        image: "/images/plant.png",
        text: "Plant the seeds of  sustainability your solor journery begins now",
      },
    },
    {
      component: (
        <div key="page3" className="w-[55%] mt-12">
          <MeetingInfo />
        </div>
      ),
      rightSideData: {
        image: "/images/contactImage.png",
        text: "Lanuch into a future of sustainable energy today!",
      },
    },

    {
      component: (
        <div key="page4" className="w-[55%] mt-12">
          <CalendarPicker />
        </div>
      ),
      rightSideData: {
        image: "/images/contactImage.png",
        text: "Lanuch into a future of sustainable energy today!",
      },
    },
    // {
    //   component: (
    //     <div key="page5" className="w-[55%] mt-12">
    //       <Contact />
    //     </div>
    //   ),
    //   rightSideData: {
    //     image: "/images/contactImage.png",
    //     text: "Lanuch into a future of sustainable energy today!",
    //   },
    // },
    {
      component: (
        <div key="page6" className="w-[55%] mt-12">
          <div className=" p-8 text-center mt-12 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-6">
              Congratulations! You qualify!
            </h1>
            <p className="text-lg mb-8 font-semibold">
              Book a time to review your quote with a <br />
              solar expert from our team.
            </p>
            <button className="mt-12 tracking-wide uppercase w-[80%] font-semibold py-2 px-4 bg-[#79BF43] text-white rounded-full transition-colors text-center cursor-pointer flex items-center justify-center">
              Schedule Now
            </button>
          </div>
        </div>
      ),
      rightSideData: {
        image: "/images/trophy.png",
        text: "Congratulations! You,re one step away from a brighter, solar powered",
      },
    },
    {
      component: (
        <div key="page7" className="w-[55%] mt-12">
          <Questions />
        </div>
      ),
      rightSideData: {
        image: "/images/contactImage.png",
        text: "Lanuch into a future of sustainable energy today!",
      },
    },
    {
      component: (
        <div key="page8" className="w-[55%] mt-12">
          <FinialisezQuote />
        </div>
      ),
      rightSideData: {
        image: "/images/contactImage.png",
        text: "Lanuch into a future of sustainable energy today!",
      },
    },
    {
      component: (
        <div key="page9" className="w-[55%] mt-12">
          <SolarEstimateForm />
        </div>
      ),
      rightSideData: {
        image: "/images/estimate.png",
        text: "Smart, clean energy is just a few clicks away!",
      },
    },
    {
      component: (
        <div key="page9" className="w-[55%] mt-12">
          <CheckOutSavings />
        </div>
      ),
      rightSideData: {
        image: "/images/estimate.png",
        text: "Say goodbye to high energy bills solar makes it possible!",
      },
    },
    {
      component: (
        <div key="page10" className="w-[55%] mt-12">
          <ElectricBillSlider />
        </div>
      ),
      rightSideData: {
        image: "/images/saving.png",
        text: "Every step towards solar is a step towards savings and sustainability!",
      },
    },
    {
      component: (
        <div key="page9" className="w-[55%] mt-12">
          <RoofSolar />
        </div>
      ),
      rightSideData: {
        image: "/images/sun.PNG",
        text: "Harness the power of the sun and shine bight for a greener future",
      },
    },
  ];

  const handleNext = () => {
    if (currentPage < content.length - 1) {
      setCurrentPage(currentPage + 1);
      setCurrentQuestionIndex(0);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      setCurrentQuestionIndex(0);
    }
  };

  return (
    <>
      <div className="w-full h-[100vh] bg-[#D6D6D6] border-[0.5px] border-[#26262682] p-3 overflow-hidden">
        <div className="h-full w-full flex relative ">
          <div className="w-[35%] bg-[#79BF43] text-white rounded-l-3xl flex flex-col justify-center items-center p-5 text-center">
            <Image
              src={content[currentPage].rightSideData.image}
              alt="foot"
              width={100}
              height={100}
            />
            <h1 className="text-5xl font-bold leading-[60px] mt-4 text-start">
              {content[currentPage].rightSideData.text}
            </h1>
          </div>
          <div className="container mx-auto bg-white w-full p-6  overflow-y-auto">
            <div className="w-[36%]  ml-[360px] mt-12">
              <Prograssbar />
            </div>
            <div className="flex flex-col items-center w-[90%] ">
              {content[currentPage].component}
            </div>
          </div>
        </div>
      </div>

      {/* Buttons fixed at bottom-right of the screen */}
      <div className="fixed bottom-6 right-12 mr-6 flex space-x-6">
        <button
          className="bg-[#F1C530] text-white rounded-full p-3 disabled:opacity-50"
          onClick={handlePrevious}
          // disabled={currentPage === 0}
        >
          <FaArrowLeft className="text-xl" />
        </button>
        <button
          className="bg-[#F1C530] text-white rounded-full p-3 disabled:opacity-50"
          onClick={handleNext}
          // disabled={currentPage === content.length - 1}
        >
          <FaArrowRight className="text-xl" />
        </button>
      </div>
    </>
  );
};

export default Layout;
