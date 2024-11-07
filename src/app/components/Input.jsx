import React from 'react'

const Input = ({ placeholder, register }) => {
  return (
    <div className="flex justify-center items-center w-full">
      <input
        {...register}
        type="text"
        placeholder={placeholder}
        className="placeholder:text-sm placeholder:text-gray-500 sm:w-[70%] lg:w-full placeholder-black border-[1px] border-gray-200 p-1 lg:p-2 text-center text-black bg-[#EFEFEF] rounded-full lg:rounded-xl shadow-lg lg:shadow-md focus:outline-none focus:ring-none "
      />
    </div>
  )
}

export default Input
