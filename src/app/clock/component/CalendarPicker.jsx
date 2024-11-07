"use client";
import { useState } from "react";

export default function TimePicker() {
  const [selectedHour, setSelectedHour] = useState(21); // Default hour 21 (9 PM)
  const [selectedMinute, setSelectedMinute] = useState(0); // Default minute 0
  const [timezone, setTimezone] = useState("US & Canada");

  const hours = Array.from({ length: 12 }, (_, i) => (i + 1) % 12 || 12);
  const minutes = Array.from({ length: 12 }, (_, i) => i * 5);

  const handleHourClick = (hour) => {
    setSelectedHour(hour);
  };

  const handleMinuteClick = (minute) => {
    setSelectedMinute(minute);
  };

  const timeZones = [
    "US & Canada",
    "Europe/London",
    "Asia/Tokyo",
    "Australia/Sydney",
  ];

  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <h2 className="text-center text-2xl font-semibold">And what time?</h2>

      {/* Timezone Dropdown */}
      <div className="text-center">
        <select
          className="border p-2 rounded-lg"
          value={timezone}
          onChange={(e) => setTimezone(e.target.value)}
        >
          {timeZones.map((zone) => (
            <option key={zone} value={zone}>
              {zone}
            </option>
          ))}
        </select>
      </div>

     

      {/* Hour and Minute Pickers */}
      <div className="flex justify-center gap-12">
        {/* Hour Picker */}
        <div className="flex flex-col items-center">
          <div className="relative w-[400px] h-[500px] bg-white shadow-md  ">
            <div className="w-full h-[100px] bg-[#79BF43] ">
              <div className="flex">
                <h1 className="  font-semibold w-[50%] p-3 text-center ">
                  Hours
                </h1>
                <h1 className=" p-3 text-center  font-semibold bg-[#F1C530] w-[50%] h-[50px]">
                  Minutes
                </h1>
              </div>
              {/* <h1 className="font-bold text-xl text-center block mt-3">
                21: <span className="text-gray-300 ">00</span>
              </h1> */}
              <h1 className="font-bold text-xl text-center block mt-3">
                <span className="text-3xl font-bold">{`${selectedHour}:${selectedMinute
                  .toString()
                  .padStart(2, "0")}`}</span>
              </h1>
            </div>
            {/* Hour Circle */}
            <div className="relative w-full h-full">
              {/* Outer watch (12-hour format) */}
              {hours.map((hour) => {
                const angle = ((hour % 12) / 12) * 360;
                const radius = 160; // Increased radius for the outer watch
                const x = radius * Math.sin((angle * Math.PI) / 180);
                const y = -radius * Math.cos((angle * Math.PI) / 180);

                return (
                  <div
                    key={hour}
                    className={` absolute text-center w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 
         
          `}
                    style={{
                      transform: `translate(${x}px, ${y - 40}px)`,
                      left: "45%",
                      top: "40%",
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
                const radius = 90; // Smaller radius for the inner watch
                const x = radius * Math.sin((angle * Math.PI) / 180);
                const y = -radius * Math.cos((angle * Math.PI) / 180);

                const equivalentHour = hour >= 12 ? hour : hour + 12; // Calculate 24-hour equivalent

                return (
                  <div
                    key={hour}
                    className={` absolute text-center w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
                      selectedHour === equivalentHour
                        ? "bg-[#79BF43] text-white"
                        : "text-black"
                    }`}
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                      left: "45%",
                      top: "30%",
                    }}
                    onClick={() => handleHourClick(equivalentHour)}
                  >
                    {equivalentHour}
                  </div>
                );
              })}

              {/* Line pointing to selected hour */}
              <div
                className="absolute w-[1px] bg-[#79BF43] origin-bottom z-50"
                style={{
                  height: "16%",
                  left: "50%",
                  bottom: "67%",
                  transform: `rotate(${((selectedHour % 12) / 12) * 360}deg)`,
                }}
              />

              {/* Center dot */}
              <div className="absolute w-3 h-3 bg-[#79BF43] rounded-full left-1/2 top-[33%] transform -translate-x-1/2 -translate-y-1/2" />
            </div>

            {/* Selected hour display */}
            {/* <span className="absolute text-3xl font-bold">{selectedHour}</span> */}
          </div>
        </div>

        {/* Minute Picker */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-medium mb-2">Minutes</h3>
          <div className="relative w-56 h-56 flex justify-center items-center bg-yellow-300 rounded-full">
            {/* Minute Circle */}
            {/* {minutes.map((minute, index) => {
              const angle = (index / 12) * 360;
              const x = 100 * Math.cos((angle * Math.PI) / 180);
              const y = 100 * Math.sin((angle * Math.PI) / 180);

              return (
                <div
                  key={minute}
                  className={`absolute w-10 h-10 rounded-full flex items-center justify-center cursor-pointer ${
                    selectedMinute === minute
                      ? "bg-yellow-600 text-white"
                      : "bg-white text-black"
                  }`}
                  style={{ transform: `translate(${x}%, ${y}%)` }}
                  onClick={() => handleMinuteClick(minute)}
                >
                  {minute.toString().padStart(2, "0")}
                </div>
              );
            })} */}
            {/* Selected minute display */}
            {/* <span className="absolute text-3xl font-bold">
              {selectedMinute.toString().padStart(2, "0")}
            </span> */}
          </div>
        </div>
      </div>

      {/* Confirm Button */}
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
        Confirm Time
      </button>
    </div>
  );
}
