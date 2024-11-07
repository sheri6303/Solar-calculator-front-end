"use client"
import Layout from "./Layout.jsx";
import StepForm from "./components/StepForm.jsx";
import FormProvider from "./context/FormProvider.jsx";
import {ProgressProvider}  from "./context/ProgressProvider .js"

export default function Home() {
  return (
    <ProgressProvider >

      {/* <FormProvider>
        <Layout />
      </FormProvider> */}
      <StepForm />
    </ProgressProvider>
  );
}
