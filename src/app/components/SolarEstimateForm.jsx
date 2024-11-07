import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useForm } from "react-hook-form";
import Prograssbar from "./Prograssbar";
import Image from "next/image";

const SolarEstimateForm = ({
  handleSolarEstimateData,
  nextStep,
  setSolarEstumateData,
  solarEstimateData,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [showEmail, setShowEmail] = useState(false);
  const [showNumber, setShowNumber] = useState(false);

  const toggleVisibility = (field) => {
    if (field === "email") setShowEmail(!showEmail);
    if (field === "number") setShowNumber(!showNumber);
  };

  const onSubmit = (data) => {
    setSolarEstumateData({ ...data });
    console.log("data", data);

    nextStep();
  };

  return (
    <div className="w-full h-[100vh] bg-[#D6D6D6] border-[0.5px] border-[#26262682] p-3 overflow-hidden">
      <div className="h-full w-full flex relative">
        <div className="w-[35%] bg-[#79BF43] text-white rounded-l-3xl flex flex-col justify-center items-center p-5 text-center">
          <Image
            src="/images/estimate.png"
            alt="sidebar image"
            width={100}
            height={100}
            className="w-50 h-50"
          />
          <h1 className="text-5xl font-bold leading-[60px] mt-4 text-start">
            Smart, clean energy is just a few clicks away!
          </h1>
        </div>
        <div className="container mx-auto rounded-r-3xl bg-white w-full p-6 overflow-y-auto">
          <div className="w-[36%] ml-[360px] mt-12">
            <Prograssbar />
          </div>
          <div className="flex flex-col  w-full ">
            <div className="space-y-10">
              <div className="max-w-[450px] mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-6 mt-12">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      {...register("fullName", {
                        required: "Full Name is required",
                      })}
                      placeholder="Enter your name"
                      className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#79BF43] focus:border-[#79BF43]"
                    />
                    {errors.fullName && (
                      <span className="text-red-500 text-sm">
                        {errors.fullName.message}
                      </span>
                    )}
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type={showEmail ? "text" : "email"}
                      id="email"
                      name="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email address",
                        },
                      })}
                      placeholder="Enter your email"
                      className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#79BF43] focus:border-[#79BF43] pr-10"
                    />
                    {errors.email && (
                      <span className="text-red-500 text-sm">
                        {errors.email.message}
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={() => toggleVisibility("email")}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 mt-6"
                    >
                      {showEmail ? (
                        <FiEyeOff className="h-5 w-5 text-gray-400" />
                      ) : (
                        <FiEye className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="number"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Number
                    </label>
                    <input
                      type={showNumber ? "text" : "password"}
                      id="number"
                      name="number"
                      {...register("number", {
                        required: "Number is required",
                      })}
                      placeholder="Enter your number"
                      className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#79BF43] focus:border-[#79BF43] pr-10"
                    />
                    {errors.number && (
                      <span className="text-red-500 text-sm">
                        {errors.number.message}
                      </span>
                    )}
                    <button
                      onClick={() => {
                        toggleVisibility("number");
                      }}
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 mt-6"
                    >
                      {showNumber ? (
                        <FiEyeOff className="h-5 w-5 text-gray-400" />
                      ) : (
                        <FiEye className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>

                  <button
                    //  onClick={() => {
                    //   handleSolarEstimateData(); // Call the function to log data
                    //   nextStep(); // Move to the next step or perform any other action
                    // }}

                    type="submit"
                    className="w-full bg-[#F1C530] text-white font-bold py-2 px-4 rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition-colors duration-300"
                  >
                    Get Estimate!
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolarEstimateForm;
