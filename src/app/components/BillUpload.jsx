"use client";
import { useState } from "react";
import CommonLayout from "./CommonLayout";
import FileInput from "./FileInput";
import { useProgress } from '../context/ProgressProvider ';

const BillUpload = ({ prevStep, nextStep, formData, setFormData }) => {
  const [bills, setBills] = useState({ bill1: null, bill2: null });
  const [errors, setErrors] = useState({});
  const {handleNextClick } = useProgress();

  const handleSubmit = (e) => {
    
    if (!bills.bill1 && !bills.bill2) {
      setErrors({ bill1: "Bill 1 is required", bill2: "Bill 2 is required" });
      return;
    }

    setErrors({});
    setFormData({ ...formData, ...bills });
    handleNextClick();
    nextStep();
  };

  const handleFileChange = (name, file) => {
    setBills((prevBills) => ({
      ...prevBills,
      [name]: file,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  return (
    <CommonLayout
      title="Please upload a copy of the last electric bill"
      imageUrl="/images/plant.png"
      sidebarContent="Plant the seeds of sustainability, your solar journey begins now"
      prevStep={prevStep}
      nextStep={handleSubmit}
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center space-y-6 lg:p-8"
      >
        <p className="text-black text-sm sm:text-xl lg:text-lg font-semibold sm:pt-4 lg:pt-16">
          If your bill does not show more than one month's usage, please upload
          at least two bills.
        </p>

        <div className="grid grid-rows-2 gap-4 w-full lg:max-w-2xl">
          <FileInput
            text="Bill 1"
            name="bill1"
            onChange={(e) => handleFileChange("bill1", e.target.files[0])}
          />
          {errors.bill1 && (
            <p className="text-red-600 text-center text-sm">{errors.bill1}</p>
          )}

          <FileInput
            text="Bill 2"
            name="bill2"
            onChange={(e) => handleFileChange("bill2", e.target.files[0])}
          />
          {errors.bill2 && (
            <p className="text-red-600 text-center text-sm">{errors.bill2}</p>
          )}
        </div>
      </form>
    </CommonLayout>
  );
};

export default BillUpload;

// "use client";
// import React from "react";
// import Prograssbar from "./Prograssbar";
// import Image from "next/image";
// import FileInput from "./FileInput";
// import { useForm } from "react-hook-form";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// const BillUpload = ({ prevStep, nextStep, formData, setFormData }) => {
//   const { register, handleSubmit, setValue, formState: { errors } } = useForm();

//   const onSubmit = (data) => {
//     console.log("bill, ", data)
//     setFormData({ ...formData, ...data });
//     nextStep();
//     console.log(data);
//   };

//   return (
//     <div>
//       <div className="w-full h-[100vh] bg-[#D6D6D6] border-[0.5px] border-[#26262682] p-3 overflow-hidden">
//         <div className="h-full w-full flex relative">
//           <div className="w-[35%] bg-[#79BF43] text-white rounded-l-3xl flex flex-col justify-center items-center p-5 text-center">
//             <Image
//               src="/images/charging.png"
//               alt="foot"
//               width={100}
//               height={100}
//             />
//             <h1 className="text-5xl font-bold leading-[60px] mt-4 text-start">
//               Store energy for a brighter tomorrow with solar
//             </h1>
//           </div>
//           <div className="container mx-auto bg-white w-full p-6 overflow-y-auto">
//             <div className="w-[36%] ml-[360px] mt-12">
//               <Prograssbar />
//             </div>
//             <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center space-y-6 p-8">
//               <h1 className="text-2xl font-bold text-center">
//                 Please upload a copy of the last electric bill
//               </h1>
//               <p className="text-black text-lg font-semibold pt-16">
//                 If your bill does not show more than one month's usage, please upload at least two bills.
//               </p>

//               <div className="grid grid-rows-2 gap-4 w-full max-w-2xl">
//                 <FileInput
//                   text="Bill 1"
//                   name="bill1"
//                   register={register}
//                   setValue={setValue}
//                 />
//                 {errors.bill1 && (
//                   <p className="text-red-600">Bill 1 is required</p>
//                 )}

//                 <FileInput
//                   text="Bill 2"
//                   name="bill2"
//                   register={register}
//                   setValue={setValue}
//                 />
//                 {errors.bill2 && (
//                   <p className="text-red-600">Bill 2 is required</p>
//                 )}
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* Buttons fixed at bottom-right of the screen */}
//       <div className="fixed bottom-6 right-12 mr-6 flex space-x-6">
//         <button
//           className="bg-[#F1C530] text-white rounded-full p-3"
//           onClick={prevStep}
//         >
//           <FaArrowLeft className="text-xl" />
//         </button>
//         <button
//           className="bg-[#F1C530] text-white rounded-full p-3"
//           onClick={handleSubmit(onSubmit)}
//         >
//           <FaArrowRight className="text-xl" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BillUpload;
