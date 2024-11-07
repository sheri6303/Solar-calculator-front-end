"use client";
import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import RightSide from "../RightSide";

const EstimateForm = () => {
  const savingBilling = [
    {
      title: "Proem ipsum dolor sit",
      price: "$ 4200",
      desc: "Proem ipsum dolor sit",
    },
    {
      title: "Proem ipsum dolor sit",
      price: "41.1 %",
      desc: "Proem ipsum dolor sit",
    },
    {
      title: "Proem ipsum dolor sit",
      price: "120",
      desc: "Proem ipsum dolor sit",
    },
    {
      title: "Proem ipsum dolor sit",
      price: "3-5 kw",
      desc: "Proem ipsum dolor sit",
    },
  ];

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="h-[500px] w-[50%] bg-[#D6D6D6] border-[0.5px] border-[#26262682] p-3">
        <div className="h-full w-full flex">
          <RightSide />
          <div className="bg-white w-full p-6">
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center gap-2">
                {savingBilling.map((card, index) => (
                  <div key={index} className="w-[160px] h-[130px] shadow-lg">
                    <h3 className=" text-center h-15 bg-[#79BF43] rounded-t-3xl text-white font-semibold pt-3 px-5 shadow-lg text-[12px]">
                      {card.title}
                    </h3>
                    <div className="bg-[#F1C530] h-full rounded-b-3xl text-center space-y-4 shadow-lg">
                      <h1 className="font-extrabold text-white text-[30px] text-center pt-8">{card.price}</h1>
                      <h3 className="text-white pt-1 text-center text-[12px]">{card.desc}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  };

export default EstimateForm;
