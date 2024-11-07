"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import dayjs from 'dayjs';
import ArrowButton from '../ArrowButton';
import { useForm, Controller } from "react-hook-form";
import CommonLayout from '../CommonLayout';
import { useProgress } from "../../context/ProgressProvider ";

const CalendarPicker = ({ prevStep, nextStep, setFormData, formData }) => {
  const [mounted, setMounted] = useState(false);
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [selectedYear, setSelectedYear] = useState(currentDate.year());
  const [selectedMonth, setSelectedMonth] = useState(currentDate.month());
  const [selectedDay, setSelectedDay] = useState(null);
  const { handleNextClick  } = useProgress();

  const { control, handleSubmit, setValue, watch, formState: { errors } } = useForm({
    defaultValues: {
      day: formData.day || null,
      month: formData.month || selectedMonth,
      year: formData.year || selectedYear
    }
  });

  useEffect(() => {
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

  const onSubmit = (data) => {
    if (!selectedDay) {
      alert("Please select a day.");
      return;
    }

    const fullDate = `${selectedDay}/${selectedMonth + 1}/${selectedYear}`;
    const updatedFormData = { ...formData, day: selectedDay, month: selectedMonth, year: selectedYear, fullDate };

    setFormData(updatedFormData);
    handleNextClick();
    nextStep();
  };

  if (!mounted) {
    return null;
  }

  return (
    <CommonLayout
      title="What day works best?"
      imageUrl="/images/contactImage.png"
      sidebarContent="Launch into a future of sustainable energy today!"
      prevStep={prevStep}
      nextStep={handleSubmit(onSubmit)}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <p className="mb-6 lg:text-gray-600 font-semibold text-black text-center mt-12">
          Pick a day to review your personalized quote with our team.
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-12">
          {/* Calendar Section */}
          <div className="w-full lg:w-[70%] bg-white rounded-lg p-4 shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className=" sm:text-xl font-semibold flex">
                {months[selectedMonth]} {selectedYear} <ChevronRight className=" sm:h-7 sm:w-7 text-[#F1C530]" />
              </h3>
              <div className="flex  lg:space-x-2">
                <button type="button" onClick={prevMonth} className="p-1 rounded-full hover:bg-gray-200">
                  <ChevronLeft className="sm:h-7 sm:w-7 text-[#F1C530]" />
                </button>
                <button type="button" onClick={nextMonth} className="p-1 rounded-full hover:bg-gray-200">
                  <ChevronRight className="sm:h-7 sm:w-7 text-[#F1C530]" />
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
                  type="button"
                  className={`text-center py-1 hover:bg-gray-100 rounded ${selectedDay === day ? 'bg-gray-300' : ''}`}
                  onClick={() => setSelectedDay(day)}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          {/* Year and Month Selection - Hidden on smaller screens */}
          <div className="hidden lg:flex space-x-8 pt-8">
            {/* Year Selection */}
            <div className="w-full">
              <select
                value={selectedYear}
                onChange={(e) => handleYearChange(Number(e.target.value))}
                className="w-[60px] bg-white border rounded-lg text-gray-600 focus:outline-none focus:ring-green-500 h-[310px] overflow-hidden shadow-md"
                size={12}
                style={{ "-webkit-appearance": "none", "-moz-appearance": "none", appearance: "none" }}
              >
                {years.map((year) => (
                  <option
                    key={year}
                    value={year}
                    className={`p-[6px]  text-[12px] text-center ${selectedYear === year ? "bg-[#79BF43] text-white" : ""}`}
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
                className="w-[150%] bg-white border rounded-lg text-gray-600 focus:outline-none focus:ring-green-500 h-[310px] overflow-hidden shadow-md"
                size={12}
                style={{ "-webkit-appearance": "none", "-moz-appearance": "none", appearance: "none" }}
              >
                {months.map((month, index) => (
                  <option
                    key={month}
                    value={index}
                    className={`p-[6px] text-[12px] text-center font-semibold ${selectedMonth === index ? "bg-[#79BF43] text-white" : ""}`}
                  >
                    {month}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </form>
    </CommonLayout>
  );
};

export default CalendarPicker;