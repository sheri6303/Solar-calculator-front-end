import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Prograssbar from "./Prograssbar";
import ArrowButton from "./ArrowButton";
import { useProgress } from "../context/ProgressProvider ";

const Questions = ({
  prevStep,
  nextStep,
  setQuestionFormData,
  questionformData,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const {handleNextClick, progress } = useProgress();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sidebarContent = [
    {
      imageSrc: "/images/foot.png",
      text: "Reduce your carbon footprint while boosting your savings",
    },
    {
      imageSrc: "/images/sun.PNG",
      text: "Imagine a world powered by the sun, your journey starts here",
    },
    {
      imageSrc: "/images/solor.png",
      text: "Solar power: saving money and the planet, one panel at a time.",
    },
    {
      imageSrc: "/images/circle crossPNG.PNG",
      text: "The sun doesn't send a bill, start your solar journey today!",
    },
    {
      imageSrc: "/images/ssolor.png", 
      text: "Let's get your address to provide the best solar solution",
    },
  ];

  const questions = [
    {
      question: "When would you like the project completed?",
      options: ["ASAP", "NEXT 6 MONTHS", "STILL RESEARCHING"],
      name: "projectCompletion",
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
      name: "creditScore",
    },
    {
      question: "What type of property are you interested in solar for?",
      options: ["SINGLE FAMILY", "MULTI FAMILY", "MOBILE HOME", "COMMERCIAL"],
      name: "propertyType",
    },
    {
      question: "Do you own or rent the property?",
      options: ["OWN", "RENT"],
      name: "ownership",
    },
    {
      question: "What's your property address?",
      type: "address",
      name: "address",
    },
  ];

  const onSubmit = (data) => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuestionFormData({ ...questionformData, ...data });
      nextStep();
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      prevStep();
    }
  };

  const handleOptionSelect = (questionIndex, option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [questionIndex]: option,
    }));
  };

  const currentQuestion = questions[currentQuestionIndex];
  // const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const renderQuestionContent = () => {
    if (currentQuestion.type === 'address') {
      return (
        <div className="flex flex-col w-full max-w-md gap-6">
        <div className="flex flex-col gap-1">
          <label className="text-center font-semibold">Address</label>
          <div className="border-[1px] border-gray-200 py-2 text-black bg-[#EFEFEF] rounded-full lg:rounded-xl shadow-lg lg:shadow-md focus:outline-none focus:ring-none flex items-center justify-center">
            <input 
              type="text"
              {...register('streetAddress', {
                required: "Please enter your street address"
              })}
              className="w-full bg-transparent outline-none text-gray-800 placeholder:text-center text-center"
              placeholder="Street Address"
            />
          </div>
          {errors.streetAddress && (
            <p className="text-red-500 text-sm mt-1">{errors.streetAddress.message}</p>
          )}
        </div>
      
        <div className="flex flex-col gap-1">
          <label className="text-center font-semibold text-sm">Apartment/Unit Number</label>
          <div className="border-[1px] border-gray-200 py-2 text-black bg-[#EFEFEF] rounded-full lg:rounded-xl shadow-lg lg:shadow-md focus:outline-none focus:ring-none flex items-center justify-center">
            <input 
              type="text"
              {...register('unitNumber')}
              className="w-full bg-transparent outline-none text-gray-800 placeholder:text-center text-center"
              placeholder="12"
            />
          </div>
        </div>
      </div>
      
      );
    }

    return (
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 ${
          currentQuestionIndex === 2 || currentQuestionIndex === 3
            ? "w-[250px]"
            : ""
        } ${
          currentQuestionIndex === 2 || currentQuestionIndex === 3
            ? "grid grid-cols-2"
            : ""
        }`}
      >
        {currentQuestion.options.map((option, index) => (
          <div
            key={index}
            className={`${
              currentQuestionIndex === 0 && index === 2
                ? "lg:col-span-2"
                : ""
            } ${
              currentQuestionIndex === 2
                ? "w-full lg:w-[100px]"
                : ""
            } 
            ${
              currentQuestionIndex === 3
                ? "grid-rows-12 flex flex-col-reverse"
                : ""
            }    
            ${
              currentQuestionIndex === 2
                ? "bg-[#79BF43] w-full rounded-2xl text-center"
                : ""
            } w-full text-white`}
          >
            <label className="inline-flex items-center w-full cursor-pointer">
              <input
                type="radio"
                {...register(currentQuestion.name, {
                  required: "Please select an option",
                })}
                value={option}
                className="hidden"
                onClick={() =>
                  handleOptionSelect(currentQuestionIndex, option)
                }
              />
              <span
                className={`w-full py-2 px-4 text-white rounded-full transition-colors text-center flex items-center justify-center
                  ${
                    selectedOptions[currentQuestionIndex] === option
                      ? "border-2 border-[#F1C530]"
                      : ""
                  }
                  ${
                    currentQuestionIndex === 1
                      ? "w-[168.08px]"
                      : ""
                  }
                  ${
                    currentQuestionIndex === 1 && index === 5
                      ? "text-[10px] h-[38px] py-[1px] flex items-center"
                      : ""
                  }
                  ${
                    currentQuestionIndex === 2 ||
                    currentQuestionIndex === 3
                      ? " rounded-[16px] py-4 lg:rounded-lg h-[80px]"
                      : ""
                  }
                  ${
                    currentQuestionIndex === 2 && index === 3
                      ? "text-sm lg:text-[10px] p-4"
                      : ""
                  }
                  ${
                    currentQuestionIndex === 2 && !index === 3
                      ? "p-4 w-full"
                      : ""
                  }
                  ${
                    currentQuestionIndex === 2 && !index === 3 ? "md:ml-0" : ""
                  } ${
                    errors[currentQuestion.name]
                      ? "border-red-500"
                      : "border-blue-500"
                  } ${
                    errors[currentQuestion.name]
                      ? "bg-[#79BF43]"
                      : "bg-[#79BF43]"
                  }`}
              >
                {option}
              </span>
            </label>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full h-[100vh] bg-[#D6D6D6] border-[0.5px] border-[#26262682] p-3 overflow-hidden">
      <div className="h-full w-full flex relative">
        <div className="hidden w-[35%] bg-[#79BF43] text-white rounded-l-3xl lg:flex flex-col justify-center items-center p-5 text-center">
          <Image
            src={sidebarContent[currentQuestionIndex].imageSrc}
            alt="sidebar image"
            width={100}
            height={100}
            className="w-50 h-50"
          />
          <h1 className="text-5xl font-bold leading-[60px] mt-4 text-start">
            {sidebarContent[currentQuestionIndex].text}
          </h1>
        </div>
        <div className="container mx-auto rounded-r-3xl bg-white w-full p-6 overflow-y-auto flex flex-col items-center">
          <div className="w-full sm:w-[50%] lg:w-[36%] lg:mt-12">
            <Prograssbar progress={progress} />
          </div>
          <div className="flex flex-col items-center w-full">
            <div className="space-y-10">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-center items-center bg-white w-full p-6">
                  <div className="flex flex-col items-center justify-center">
                    <h2 className="text-xl font-bold mb-4">
                      QUESTION {currentQuestionIndex + 1} OF {questions.length}
                    </h2>
                    <p className="text-lg text-center font-semibold mb-6">
                      {currentQuestion.question}
                    </p>
                    {renderQuestionContent()}
                  </div>
                </div>

                <ArrowButton
                  prevStep={handlePrevious}
                  handleSubmit={handleSubmit}
                  onSubmit={onSubmit}
                  nextStep={nextStep}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;