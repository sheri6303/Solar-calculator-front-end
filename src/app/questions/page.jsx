"use client";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import RightSide from "../RightSide";

const Questionnaire = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const questions = [
    {
      question: "When would you like the project completed?",
      options: ["ASAP", "NEXT 6 MONTHS", "STILL RESEARCHING"],
    },
    {
      question: "What is your credit score?",
      options: [
        "700+",
        "650-699",
        "620-649",
        "580-619",
        "<580",
        "I AM INTERESTED IN PAYING WITH CASH",
      ],
    },
    {
      question: "What type of property are you interested in solar for?",
      options: ["SINGLE FAMILY", "MULTI FAMILY", "MOBILE HOME", "COMMERCIAL"],
    },
    {
      question: "Do you own or rent the property?",
      options: ["OWN", "RENT"],
    },
    
  ];

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="">
  <div className="w-full h-[100vh] bg-[#D6D6D6] border-[0.5px] border-[#26262682] p-3">
    <div className="h-full w-full flex relative">
      <RightSide />
      <div className="flex justify-center items-center bg-white w-full p-6">
        <div className="flex flex-col items-center justify-center">
          <div className="">
            <h2 className="text-xl font-bold mb-4">
              QUESTION {currentQuestionIndex + 1} OF {questions.length}
            </h2>
            <p className="text-lg mb-6">
              {questions[currentQuestionIndex].question}
            </p>
            <div className={`${currentQuestionIndex === 2 || currentQuestionIndex === 3 ? "w-[250px]" : ""} ${currentQuestionIndex === 2 ? "ml-10" : ""} grid grid-cols-2 gap-4`}>
              {questions[currentQuestionIndex].options.map((option, index) => (
                <div
                  key={index}
                  className={`${
                    currentQuestionIndex === 0 && index === 2 ? "col-span-2" : ""
                  } ${currentQuestionIndex === 2 ? "w-[100px]" : ""} w-full text-white`}
                >
                  {/* Use checkbox or radio button depending on the question type */}
                  <label className="inline-flex items-center w-full">
                    <input
                      type={questions[currentQuestionIndex].isMultipleChoice ? "checkbox" : "radio"}
                      name="answer"
                      className="hidden" 
                    />
                    <span className={`${currentQuestionIndex === 1 ? "w-[168.08px]" : ""} ${currentQuestionIndex === 1 && index === 5 ? "text-[10px] h-[38px] py-[1px] flex items-center" : ""} ${currentQuestionIndex === 2 || currentQuestionIndex === 3 ? "px-[1] py-4 rounded-lg h-[80px]" : ""} ${currentQuestionIndex === 2 && index === 3 ? "text-[10px]" : ""} w-full py-2 px-4 bg-[#79BF43] text-white rounded-full transition-colors text-center cursor-pointer flex items-center justify-center`}>
                      {option}
                    </span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Buttons fixed at bottom-right of the screen */}
  <div className="fixed bottom-6 right-6 flex space-x-6">
    <button
      className="bg-[#F1C530] text-white rounded-full p-2 disabled:opacity-50"
      onClick={handlePrevious}
    >
      <FaArrowLeft className="text-xl" />
    </button>
    <button
      className="bg-[#F1C530] text-white rounded-full p-2 disabled:opacity-50"
      onClick={handleNext}
    >
      <FaArrowRight className="text-xl" />
    </button>
  </div>
</div>

  );
};

export default Questionnaire;
