"use client";

import React, { createContext, useContext, useState } from "react";

const FormContext = createContext();


const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({});

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};


export default FormProvider;


export const useFormContext = () => {
  return useContext(FormContext);
};
