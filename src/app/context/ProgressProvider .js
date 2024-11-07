'use client';
import React, { createContext, useContext, useState } from 'react';

const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState(95);

  const handleNextClick = () => {
    console.log("function is called")
    if (progress > 0) {
      setProgress(prevProgress => Math.max(prevProgress - 5, 0));
    }
  };

  return (
    <ProgressContext.Provider value={{ progress, setProgress, handleNextClick }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  return useContext(ProgressContext);
};
