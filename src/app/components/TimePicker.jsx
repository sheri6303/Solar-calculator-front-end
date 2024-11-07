"use client";
import { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa6";
import ArrowButton from "./ArrowButton";
import { useForm, Controller } from "react-hook-form";
import CommonLayout from "./CommonLayout";
import { useProgress } from '../context/ProgressProvider ';

export default function TimePicker({
  prevStep,
  nextStep,
  setFormData,
  formData,
}) {
  const { control, handleSubmit, setValue, watch } = useForm();

  const [selectedHour, setSelectedHour] = useState(21); // Default hour 21 (9 PM)
  const [selectedMinute, setSelectedMinute] = useState(0); // Default minute 0
  const [error, setError] = useState({});
  const [isClient, setIsClient] = useState(false);
  const { handleNextClick  } = useProgress();

  const hours = Array.from({ length: 12 }, (_, i) => (i + 1) % 12 || 12);
  const minutes = Array.from({ length: 12 }, (_, i) => i * 5);

  const handleHourClick = (hour) => {
    const equivalentHour = hour >= 12 ? hour : hour + 12;
    setSelectedHour(equivalentHour);
    setValue("hour", hour);
    setError((prve) => ({ ...prve, hour: "" }));
  };

  const handleMinuteClick = (minute) => {
    setSelectedMinute(minute);
    setValue("minute", minute);
    setError((prve) => ({ ...prve, minute: "" }));
  };

  useEffect( () => {
    setIsClient(true)
  }, []);

  const onSubmit = (data) => {
    const selectedHour = watch("hour");
    const selectedMinute = watch("minute");

  
    // Validation check for hour and minute
    if (window.innerWidth >= 992) {
     
      if (isClient && !selectedHour || !selectedMinute) {
        const newError = {};
        if (!selectedHour) newError.hour = "Please select an hour.";
        if (!selectedMinute) newError.minute = "Please select a minute.";
        setError(newError);
        return; 
      }
    }
    if (!selectedHour) {
      const newError = {};
      if (!selectedHour) newError.hour = "Please select an hour.";
      setError(newError);
      return;
    }

    setFormData({ ...formData, ...data });
    handleNextClick();
    nextStep();
  };
  return (
    <CommonLayout
      title="And What time?"
      imageUrl="/images/timePicker.PNG"
      sidebarContent="Cut down your energy costs while going green"
      prevStep={prevStep}
      nextStep={handleSubmit(onSubmit)}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center space-y-6"
      >
        <h2 className="text-center text-2xl font-semibold">And what time?</h2>

        {/* Timezone Dropdown */}
        <div className="text-center flex justify-center items-center gap-2">
          Estern Time - US & Canada <FaArrowDown className=" text-gray-400" />
        </div>

        {/* Hour and Minute Pickers */}
        <div className="flex justify-center gap-12">
          {/* Hour Picker */}
          <div className="flex flex-col items-center h-full  overflow-hidden lg:shadow-md">
            <div className="relative w-[310px] h-[400px] lg:w-[350px] lg:h-[450px]   lg:bg-white lg:shadow-md">
              <div className="w-full h-[60px] lg:h-[100px] bg-[#79BF43] ">
                <div className="flex">
                  <h1 className="  font-semibold w-[50%] p-1 lg:p-3 text-center ">
                    Hours
                  </h1>
                  <h1 className="p-1 lg:p-3 text-center  font-semibold bg-[#F1C530] w-[50%] h-[30px] lg:h-[50px]">
                    Minutes
                  </h1>
                </div>

                <h1 className="font-bold text-xl text-center block lg:mt-3">
                  <span className="text-xl lg:text-3xl font-bold ">
                    {/* {selectedHour.toString().padStart(2, "0")} */}
                    {watch("hour")?.toString().padStart(2, "0") || "00"}
                  </span>{" "}
                  {/* Green for hours */}:
                  <span className="text-xl lg:text-3xl font-bold opacity-20 ml-2">
                    {/* {selectedMinute.toString().padStart(2, "0")} */}
                    {watch("minute")?.toString().padStart(2, "0") || "00"}
                  </span>{" "}
                  {/* Yellow for minutes */}
                </h1>
              </div>
              {/* Hour Circle */}
              <div className="relative  w-full h-full">
                {/* Outer watch (12-hour format) */}
                {hours.map((hour) => {
                  const angle = ((hour % 12) / 12) * 360;
                  const baseRadius =
                  // isClient &&  window.innerWidth >= 1024
                  //     ? 150
                  // : isClient && window.innerWidth >= 640
                  //     ? 100
                  //     : 160;
                  isClient && window.innerWidth > 1024
                  ? 163
                  // : isClient && window.innerWidth >= 640
                  // ? 10
                  : 145;

                  const radius = baseRadius;
                  const x = radius * Math.sin((angle * Math.PI) / 180);
                  const y = -radius * Math.cos((angle * Math.PI) / 180);

                  return (
                    <div
                      key={hour}
                      className={`mt-1 absolute text-center w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 left-[45%] top-[50%]  lg:top-[42%]
       
          `}
                      style={{
                        transform: `translate(${x}px, ${y - 40}px)`,                        
                      }}
                      onClick={() => handleHourClick(hour)}
                    >
                      {hour % 12 === 0 ? 12 : hour % 12}{" "}
                      {/* Display 12-hour format */}
                    </div>
                  );
                })}

                {/* Inner watch (24-hour format equivalent) */}
                {hours.map((hour) => {
                  const angle = ((hour % 12) / 12) * 360;
                  const baseRaduis =
                  isClient && window.innerWidth > 1024
                      ? 100
                      // : isClient && window.innerWidth >= 640
                      // ? 50
                      : 90;
                  const radius = baseRaduis;
                  // const radius = 90; // Smaller radius for the inner watch
                  const x = radius * Math.sin((angle * Math.PI) / 180);
                  const y = -radius * Math.cos((angle * Math.PI) / 180);

                  const equivalentHour = hour >= 12 ? hour : hour + 12; 

                  return (
                    <div
                      key={hour}
                      className={` absolute text-center w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 z-30  left-[45%] top-[40%] lg:top-[33%] ${
                        selectedHour === equivalentHour
                          ? "bg-[#79BF43] text-white"
                          : "text-black"
                      }`}
                      style={{
                        transform: `translate(${x}px, ${y}px)`,
                        
                      }}
                      onClick={() => handleHourClick(equivalentHour)}
                    >
                      {equivalentHour}
                    </div>
                  );
                })}

                {/* Line pointing to selected hour */}
                <div
                  className="absolute w-[1px] bg-[#79BF43] origin-bottom  h-[20%] lg:h-[20%] left-[50%] bottom-[55%]  lg:bottom-[64%]"
                  style={{
                    
                    transform: `rotate(${((selectedHour % 12) / 12) * 360}deg)`,
                  }}
                />

                {/* Center dot */}
                <div className="absolute w-3 h-3 bg-[#79BF43] rounded-full left-1/2 top-[45%] lg:top-[36%] transform -translate-x-1/2 -translate-y-1/2" />
              </div>
            </div>
          </div>

          {/* Minute Picker */}

          <div className="hidden lg:block relative w-[350px] h-[450px] bg-white shadow-md  ">
            <div className="w-full h-[100px] bg-[#F1C530] ">
              <div className="flex">
                <h1 className="  font-semibold w-[50%] p-3 text-center ">
                  Hours
                </h1>
                <h1 className=" p-3 text-center  font-semibold  w-[50%] h-[50px]">
                  Minutes
                </h1>
              </div>

              <h1 className="font-bold text-xl text-center block mt-3">
                <span className="text-3xl font-bold text-gray-400 opacity-30">
                  {/* {selectedHour.toString().padStart(2, "0")} */}
                  {watch("hour")?.toString().padStart(2, "0") || "00"}
                </span>{" "}
                {/* Green for hours */}:
                <span className="text-3xl font-bold ml-2 ">
                  {/* {selectedMinute.toString().padStart(2, "0")} */}
                  {watch("minute")?.toString().padStart(2, "0") || "00"}
                </span>{" "}
               
              </h1>
            </div>

            {/* mintue Circle */}
            <div className="relative w-full h-full">
              {/* Outer watch (12-hour format) */}
              {minutes.map((minute, index) => {
                const angle = (minute / 60) * 360;
                const radius = 150;
                const x = radius * Math.sin((angle * Math.PI) / 180);
                const y = -radius * Math.cos((angle * Math.PI) / 180);

                return (
                  <div
                    key={minute}
                    className={`mt-1 z-50 absolute text-center w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 
                     ${selectedMinute === minute ? "bg-[#F1C530] text-white" : ""}`}
                    style={{
                      transform: `translate(${x}px, ${y - 40}px)`,
                      left: "45%",
                      top: "40%",
                    }}
                    onClick={() => handleMinuteClick(minute)}
                  >
                    {minute}
                  </div>
                );
              })}

              {/* Line pointing to selected hour */}
              <div
                className="absolute w-[1px] bg-[#F1C530] origin-bottom "
                style={{
                  height: "33%",
                  left: "50%",
                  bottom: "65%",
                  transform: `rotate(${(selectedMinute / 60) * 360}deg)`,
                }}
              />

              {/* Center dot */}
              <div className="absolute w-3 h-3 bg-[#F1C530] rounded-full left-1/2 top-[35%] transform -translate-x-1/2 -translate-y-1/2 z-50" />
            </div>
          </div>
        </div>
        <div className="text-red-500 text-center">
          {error.hour && <p>{error.hour}</p>}
          {error.minute && <p>{error.minute}</p>}
        </div>
      </form>
    </CommonLayout>
  );
}
