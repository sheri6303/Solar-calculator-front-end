import React, { useState } from "react";
import FileInput from "./FileInput";
import CommonLayout from "./CommonLayout";
import { useProgress } from '../context/ProgressProvider ';

const Appointment = ({ prevStep, nextStep, formData, setFormData }) => {
  const [bills, setBills] = useState({ uploadBills: null });
  const [errors, setErrors] = useState({});
  const { handleNextClick  } = useProgress();
  const handleSubmit = (e) => {
    

    // Perform basic validation
    if (!bills.uploadBills) {
      setErrors({ uploadBills: "Upload Your Bills is required" });
      return;
    }

    // Clear errors and update formData
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

    // Clear error when file is uploaded
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  return (
    <CommonLayout
      title="Appointment Confirmed"
      imageUrl="/images/appointment.PNG"
      sidebarContent="Watch your savings grow as your energy bills shrink"
      prevStep={prevStep}
      nextStep={handleSubmit}
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center w-[100%]"
      >
        <h3 className="text-lg text-center font-semibold lg:mt-3">
          Now the Last Step!
        </h3>
        <p className="text-center mt-2 sm:mt-5 mb-4 sm:mb-5 lg:mt-12 lg:mb-12 font-semibold text-sm sm:text-xl lg:text-lg">
          To accurately size your custom solar panel system, we will need copies
          of <br /> your last electric bills.
        </p>
        <div className="w-[100%]">
          <FileInput
            text="Upload Your Bills"
            name="uploadBills"
            onChange={(e) => handleFileChange("uploadBills", e.target.files[0])}
          />
          {errors.uploadBills && (
            <p className="text-red-600 text-center text-sm">
              {errors.uploadBills}
            </p>
          )}
        </div>
        
          <p>OR</p>
          <button
            type="button"
            className="text-center w-full sm:w-[60%] lg:w-[68%] bg-[#F1C530] text-white font-bold py-2 sm:py-3 lg:py-4 px-3 sm:px-6 rounded-full cursor-pointer transition hover:bg-yellow-500 mt-4"
          >
            Opt Into Share Utility Data
          </button>
        
      </form>
    </CommonLayout>
  );
};

export default Appointment;
