"use client";
import React, { useState } from "react";
import SolarComponent from "./Solar";
import ElectricBillSlider from "./ElectricBillSlider";
import MeetingInfo from "./MeetingInfo";
import Appointment from "./Appointment";
import BillUpload from "./BillUpload";
import Schedule from "./Schedule";
import TimePicker from "./TimePicker";
import CalendarPicker from "./Calendar/Calendar";
import Questions from "./Questions";
import FinialisezQuote from "./FinialisezQuote";
import SolarEstimateForm from "./SolarEstimateForm";
import CheckOutSavings from "./CheckOutSavings";
import RoofSolar from "./RoofSolar";
import { useProgress } from '../context/ProgressProvider ';

const StepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [questionformData, setQuestionFormData] = useState({});
  const [solarEstimateData, setSolarEstumateData] = useState({});
  const {progress, setProgress } = useProgress();
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  
 
  
  const handleNextClick = () => {
    if (progress > 0) {
      setProgress(prevProgress => Math.max(prevProgress - 5, 0));
    }
  };

  const handleSubmitForm = () => {
     console.log("Final Form Data:", formData);
     };

  const handleQuestionSubmitForm = () => {
    console.log("Question Form Data", questionformData);
  };

  const handleSolarEstimateData = () => {
    console.log("Solar Estimate Data", solarEstimateData);
  };

  switch (step) {
    case 1:
      return <SolarComponent nextStep={nextStep} prevStep={prevStep} />;
    case 2:
      return (
        <BillUpload
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
          setFormData={setFormData}
        />
      );
    case 3:
      return (
        <Appointment
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
          setFormData={setFormData}
        />
      );
    case 4:
      return (
        <MeetingInfo
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
          setFormData={setFormData}
        />
      );
    case 5:
      return (
        <TimePicker
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
          setFormData={setFormData}
        />
      );
    case 6:
      return (
        <CalendarPicker
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
          setFormData={setFormData}
        />
      );
    case 7:
      return (
        <Schedule
          nextStep={nextStep}
          formData={formData}
          setFormData={setFormData}
          handleSubmitForm={handleSubmitForm}
        />
      );

    case 8:
      return (
        <Questions
          nextStep={nextStep}
          prevStep={prevStep}
          questionformData={questionformData}
          setQuestionFormData={setQuestionFormData}
        />
      );
    case 9:
      return (
        <FinialisezQuote
          nextStep={nextStep}
          prevStep={prevStep}
          questionformData={questionformData}
          handleQuestionSubmitForm={handleQuestionSubmitForm}
        />
      );
    case 10:
      return (
        <SolarEstimateForm
          nextStep={nextStep}
          prevStep={prevStep}
          solarEstimateData={solarEstimateData}
          setSolarEstumateData={setSolarEstumateData}
          handleSolarEstimateData={handleSolarEstimateData}
        />
      );
    case 11:
      return <CheckOutSavings nextStep={nextStep} prevStep={prevStep} />;
    case 12:
      return <ElectricBillSlider nextStep={nextStep} prevStep={prevStep} />;
    case 13:
      return <RoofSolar nextStep={nextStep} prevStep={prevStep} />;
    default:
      return <SolarComponent nextStep={nextStep} prevStep={prevStep} />;
  }
};

export default StepForm;
