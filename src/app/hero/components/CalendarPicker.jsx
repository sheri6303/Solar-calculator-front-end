"use client"
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import dayjs from 'dayjs';

const CalendarPicker = () => {
  const [mounted, setMounted] = useState(false);
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [selectedYear, setSelectedYear] = useState(currentDate.year());
  const [selectedMonth, setSelectedMonth] = useState(currentDate.month());

  useEffect(() => {
    // Only render the component on the client-side to avoid hydration issues
    setMounted(true);
  }, []);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
  ];

  const years = Array.from({ length: 12 }, (_, i) => 2021 + i);

  const daysInMonth = currentDate.daysInMonth();
  const firstDayOfMonth = currentDate.startOf('month').day();

  const prevMonth = () => {
    setCurrentDate(currentDate.subtract(1, 'month'));
    setSelectedMonth(currentDate.subtract(1, 'month').month());
    setSelectedYear(currentDate.subtract(1, 'month').year());
  };

  const nextMonth = () => {
    setCurrentDate(currentDate.add(1, 'month'));
    setSelectedMonth(currentDate.add(1, 'month').month());
    setSelectedYear(currentDate.add(1, 'month').year());
  };

  const handleYearChange = (year) => {
    setSelectedYear(year);
    setCurrentDate(currentDate.year(year));
  };

  const handleMonthChange = (month) => {
    setSelectedMonth(month);
    setCurrentDate(currentDate.month(month));
  };

  if (!mounted) {
    return null; // Prevent rendering on the server to avoid hydration issues
  }

  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-2">What day works best?</h2>
      <p className="mb-6 text-gray-600">Pick a day to review your personalized quote with our team.</p>
      
      <div className="flex gap-5">
        <div className="w-[70%] bg-white h-[270px] rounded-lg p-4 pr-6 shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold flex">
              {months[selectedMonth]} {selectedYear}    <ChevronRight className="h-7 w-7 text-[#F1C530] " />
            </h3>
            <div className="flex space-x-2">
              <button onClick={prevMonth} className="p-1 rounded-full hover:bg-gray-200">
                <ChevronLeft className="h-7 w-7 text-[#F1C530] " />
              </button>
              <button onClick={nextMonth} className="p-1 rounded-full hover:bg-gray-200">
                <ChevronRight className="h-7 w-7 text-[#F1C530]"  />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-7 gap-1 mb-2">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
              <div key={day} className="text-center text-gray-500 text-sm py-1">{day}</div>
            ))}
          </div>
          
          <div className="grid grid-cols-7 gap-1">
            {Array((firstDayOfMonth + 6) % 7).fill(null).map((_, index) => (
              <div key={`empty-${index}`} className="text-center py-2"></div>
            ))}
            {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => (
              <button
                key={day}
                className="text-center  hover:bg-gray-100 rounded"
                onClick={() => console.log(`Selected: ${day}/${selectedMonth + 1}/${selectedYear}`)}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex space-x-4">
          {/* Year Selection */}
          <div className="w-full">
            <select
              value={selectedYear}
              onChange={(e) => handleYearChange(Number(e.target.value))}
              className="w-full  bg-white border rounded-lg text-gray-600 focus:outline-none  focus:ring-green-500 h-[290px] overflow-hidden shadow-md"
              size={12}
              style={{ "-webkit-appearance": "none", "-moz-appearance": "none", appearance: "none" }}
            >
              {years.map((year) => (
                <option
                  key={year}
                  value={year}
                  className={`p-[5px] text-[12px] text-center  ${
                    selectedYear === year ? "bg-[#79BF43] text-white" : ""
                  }`}
                >
                  {year}
                </option>
              ))}
            </select>
          </div>

          {/* Month Selection */}
          <div className="w-full">
            <select
              value={selectedMonth}
              onChange={(e) => handleMonthChange(Number(e.target.value))}
              className="w-[140%]  bg-white border rounded-lg text-gray-600 focus:outline-none  focus:ring-green-500 h-[290px] overflow-hidden shadow-md"
              size={12}
              style={{ "-webkit-appearance": "none", "-moz-appearance": "none", appearance: "none" }}
            >
              {months.map((month, index) => (
                <option
                  key={month}
                  value={index}
                  className={`p-[5px] text-[12px] text-center font-semibold ${
                    selectedMonth === index ? "bg-[#79BF43] text-white" : ""
                  }`}
                >
                  {month}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarPicker;