import React from "react";
import CommonLayout from "./CommonLayout";

const CheckOutSavings = ({prevStep, nextStep, handleSubmit, onSubmit}) => {
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
  return (
    <CommonLayout
      title="Check out these saving!s"
      imageUrl="/images/estimate.png"
      sidebarContent="Say goodbye to high energy bills solar makes it possible!"
      prevStep={prevStep}
      nextStep={nextStep}
    >
      <div className="flex flex-col items-center justify-center">
        {/* <p className='font-semibold text-xl mt-4 mb-32'>Check out these saving!s</p> */}
        <div className="flex items-center justify-center gap-2">
          {savingBilling.map((card, index) => (
            <div key={index} className="w-[160px] h-[130px] shadow-lg">
              <h3 className=" text-center h-15 bg-[#79BF43] rounded-t-3xl text-white font-semibold pt-3 px-5 shadow-lg text-[12px]">
                {card.title}
              </h3>
              <div className="bg-[#F1C530] h-full rounded-b-3xl text-center space-y-4 shadow-lg">
                <h1 className="font-extrabold text-white text-[30px] text-center pt-8">
                  {card.price}
                </h1>
                <h3 className="text-white pt-1 text-center text-[12px]">
                  {card.desc}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CommonLayout>
  );
};

export default CheckOutSavings;
