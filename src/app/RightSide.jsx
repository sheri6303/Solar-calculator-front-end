import React from 'react'
import Image from 'next/image'

const RightSide = (image, text) => {
  return (
    <div className="w-[35%] bg-[#79BF43] text-white rounded-l-3xl flex flex-col justify-center items-center p-5 text-center">
    <Image src={image} alt='foot' width={100} height={100} />
    <h1 className="text-5xl font-bold leading-[60px] mt-4 text-start">
     {text}
    </h1>
  </div>
  
  )
}

export default RightSide