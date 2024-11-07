import React from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";
import CommonLayout from "./CommonLayout";
import { useProgress } from '../context/ProgressProvider ';

const Contact = ({ prevStep, nextStep, formData, setFormData }) => {
  const { handleNextClick  } = useProgress();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
  });

  const onSubmit = (data) => {
    console.log("meeting", data);
    setFormData({ ...formData, ...data });
    handleNextClick();
    nextStep();
  };

  return (
    <CommonLayout
      title="Please confirm the meeting time & your information."
      imageUrl="/images/contactImage.png"
      sidebarContent="Launch into a future of sustainable energy today!"
      prevStep={prevStep}
      nextStep={handleSubmit(onSubmit)}
    >
     <div className="flex flex-col items-center w-full space-y-2">
  <p className="text-gray-600 text-center sm:text-lg font-semibold">
    Saturday, October 5, 2024, 11:30 AM, US/Eastern
  </p>
  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-4 w-full">
    <div>
      <Input
        placeholder="First Name"
        register={register("firstName", {
          required: "First Name is required",
        })}
      />
      {errors.firstName && (
        <span className="text-red-600">{errors.firstName.message}</span>
      )}
    </div>

    <div>
      <Input
        placeholder="Last Name"
        register={register("lastName", {
          required: "Last Name is required",
        })}
      />
      {errors.lastName && (
        <span className="text-red-600">{errors.lastName.message}</span>
      )}
    </div>

    <div>
      <Input
        placeholder="Mobile Number"
        register={register("mobile", {
          required: "Mobile number is required",
          pattern: {
            value: /^[0-9]{10}$/,
            message: "Invalid mobile number",
          },
        })}
      />
      {errors.mobile && (
        <span className="text-red-600">{errors.mobile.message}</span>
      )}
    </div>

    <div>
      <Input
        placeholder="Email"
        register={register("email", {
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Invalid email address",
          },
        })}
      />
      {errors.email && (
        <span className="text-red-600">{errors.email.message}</span>
      )}
    </div>

    <div className="">
      <Input placeholder="Address" register={register("address")} />
    </div>
    <div className="">
      <Input
        placeholder="Apartment/Unit number"
        register={register("apartment")}
      />
    </div>

    <div>
      <Input placeholder="City" register={register("city")} />
    </div>
    <div>
      <Input placeholder="State" register={register("state")} />
    </div>

    <div className="col-span-2 flex justify-center">
      <div className="w-full lg:w-[50%]">
        <Input
          placeholder="Zip code"
          register={register("zipCode", {
            required: "Zip code is required",
            pattern: {
              value: /^[0-9]{5}$/,
              message: "Invalid Zip code",
            },
          })}
        />
        {errors.zipCode && (
          <span className="text-red-600">{errors.zipCode.message}</span>
        )}
      </div>
    </div>
  </form>
</div>

    </CommonLayout>
  );
};

export default Contact;