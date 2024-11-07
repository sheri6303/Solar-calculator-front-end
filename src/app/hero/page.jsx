"use client";
import React, { useState } from "react";
import { ImHome } from "react-icons/im";
import Prograssbar from "../components/Prograssbar";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { FaPlus } from "react-icons/fa6";

const Page = () => {
  const [steps, setSteps] = useState([]);
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className=" h-auto w-full bg-[#D6D6D6] border-[0.5px] border-[#26262682] p-3">
        <div className="h-full w-full flex">
          <div className="bg-[#F8F8F8] flex flex-col mx-auto justify-center items-center px-1 py-2 w-full rounded-r-3xl space-y-6">
            <div className="w-1/2">
              <Prograssbar />
            </div>
            {/* title */}
            <h2 className="font-semibold w-2/3 text-center">
              Here's what going solar in Allen, TX could look <br />
              like bill for someone with a $405 average utility bill...
            </h2>
            {/* map */}
            <Image src="/images/map.png" alt="map" width={500} height={500} />

            {/* green div */}
            <div className="max-w-2xl mx-auto p-4 space-y-4">
              <div className="bg-[#79BF43] rounded-3xl p-4 text-white text-center flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <div className="flex justify-center items-center mb-2">
                    <Image
                      src="/images/leaf.png"
                      alt="Leaf icon"
                      width={50}
                      height={50}
                    />
                  </div>
                  <p className="font-bold text-2xl w-[70%] text-center">
                    Harness the power of the sun and shine bright for a greener
                    future
                  </p>
                </div>
              </div>

              {/* Two Box */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-yellow-400 rounded-xl p-4 text-white">
                  <div className="flex flex-col items-center mb-4">
                    <p className="font-medium text-lg leading-5 ">
                      Here's what going solar in Allen, TX could look like for
                      someone with a $405 average utility bill...
                    </p>
                    <Image
                      src="/images/sun_smail.png"
                      alt="sun_smail"
                      width={100}
                      height={100}
                      className="w-20 h-20"
                    />
                  </div>
                  <p className="mt-auto text-black text-center leading-5">
                    Based on day-to-day analysis of weather patterns
                  </p>
                </div>

                <div className="bg-yellow-400 rounded-xl p-4 text-white">
                  <div className="flex flex-col items-center mb-4">
                    <p className="font-medium text-lg text-center leading-5">
                      2,409 sq feet available for solar panels
                    </p>
                    <ImHome className="w-10 h-10 mt-11" />
                  </div>
                  <p className="mt-10 text-black text-center leading-5">
                    Based on day-to-day analysis of weather patterns
                  </p>

                  {/* map */}
                </div>
              </div>

              {/* map */}
              <div className="w-full  mt-8 rounded-lg overflow-hidden shadow-lg relative">
                <div className="relative">
                  <img
                    src="/images/map2.png"
                    alt="Map of Allen area"
                    className="w-full h-full"
                  />
                  {/* Overlaying the yellow box on top of the image */}
                  <div className="absolute top-0 left-0  p-4 text-white w-full">
                    <h2 className="text-3xl font-bold mb-2 absolute top-12 left-56">
                      Did you know?
                    </h2>
                    <p className="text-xl absolute font-semibold top-20 mt-[2px] left-36">
                      Over <span className="text-black">13 homes </span> near
                      Allen have gone solar!
                    </p>
                    <div className="flex justify-between mt-4 text-sm">
                      <div className="flex items-center absolute top-28 left-32 font-semibold text-black">
                        <MapPin className="w-4 h-4 text-red-500 mr-2" />
                        <span>Installed System</span>
                      </div>
                      <div className="flex items-center absolute right-20  top-28 font-semibold text-black">
                        <MapPin className="w-4 h-4 text-blue-500 mr-2 " />
                        <span>Your Zip Code</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* text */}
              <div className=" mx-auto p-4 space-y-6 flex flex-col items-center justify-center">
                <h2 className="text-2xl text-black font-semibold text-center">
                  Replace or reduce your utility bill solor <br /> for just...
                </h2>
                <div className="bg-[#79BF43] rounded-3xl p-6 text-white text-center  h-[120px] w-[250.47px]">
                  <h3 className="font-bold text-3xl">$264-$317</h3>
                  <span className="text-center">PER MONTH</span>
                </div>
              </div>
              {/* total incentive Discount */}
              <div className="rounded-3xl bg-[#F1C530] py-12 flex justify-center items-center">
                <div className="text-center">
                  <h2 className="text-2xl text-black font-semibold">
                    Total Incentive Discount
                  </h2>
                  {/* Inner green div centered */}
                  <div className="bg-[#79BF43] rounded-3xl p-6 text-white flex justify-center items-center mx-auto h-[120px] max-w-[250.47px] mt-4">
                    <h3 className="font-bold text-3xl">$26,265</h3>
                  </div>
                  <h3 className="text-black font-semibold mt-4">
                    Only while available!
                  </h3>
                  <p className="font-semibold text-xs mt-0">
                    Discount based on estimated size, actual aomount may very.
                  </p>
                </div>
              </div>

              {/* estimated */}
              <div className="flex flex-col items-center justify-center gap-6 mt-8">
                <h4 className="mt-10 font-bold text-xl">
                  Estimated 25 Year Savings
                </h4>
                <h1 className="font-bold text-5xl">$68,733</h1>
                <p className="font-bold text-xl">Your Bill in 25 Year</p>
              </div>

              {/* Grap */}
              <div className="rounded-3xl flex justify-center items-center p-48 bg-gray-400">
                <h1 className="font-bold text-5xl">Grap</h1>
              </div>

              {/* card */}

              <div className="flex flex-col items-center space-y-6">
                {/* Top Cards */}
                <div className="max-w-4xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 ">
                    <div className="col-span-5">
                      <div className="bg-[#79BF43] rounded-t-xl h-20 flex items-center justify-center">
                        <div className="p-4 text-white font-bold">
                          Why do utility rates go up?
                        </div>
                      </div>
                      <div className="bg-[#F1C530] p-4  rounded-b-xl  h-[270px] flex flex-col justify-center items-center gap-4">
                        <h3 className="text-xl  mb-2 text-white font-bold">
                          Home Value Increase
                        </h3>
                        <div className="text-5xl font-bold mb-2 text-white">
                          4.1%
                        </div>
                        <p className="text-sm text-center font-bold">
                          According to a recent study <br /> from Zillow.
                        </p>
                      </div>
                    </div>

                    <div className="bg-[#79BF43] rounded-xl h-[350px] col-span-7 flex flex-col items-center justify-center">
                      <div className="p-4 text-white font-bold text-center mt-3">
                        Learn about the Zillow study.
                      </div>
                      <div className="bg-[#F1C530] p-4 mt-3  h-[270px] rounded-b-xl">
                        <h3 className="text-xl font-semibold mb-4 text-center text-white mt-2">
                          Estimated Environmental <br /> Impact5
                        </h3>
                        <div className="flex justify-between items-center">
                          <div className="flex flex-col items-center">
                            <Image
                              src="/images/25.png"
                              alt="25"
                              width={50}
                              height={50}
                            />
                            <div className="text-3xl font-bold">25</div>
                            <div className="text-[10px] font-semibold text-center leading-3">
                              Tons of CO2 avoided
                            </div>
                          </div>

                          <div className="text-3xl font-bold mt-4">=</div>
                          <div className="flex flex-col items-center">
                            <Image
                              src="/images/leaf.png"
                              alt="25"
                              width={50}
                              height={50}
                              className="text-white"
                            />

                            <div className="text-3xl font-bold">722</div>
                            <div className="text-[10px] font-semibold text-center leading-3">
                              Trees grown for 10 years
                            </div>
                          </div>
                          <div className="text-3xl font-bold mt-4">=</div>
                          <div className="flex flex-col items-center leading-3">
                            <Image
                              src="/images/pump.png"
                              alt="25"
                              width={50}
                              height={50}
                              className="text-white w-8 h-8"
                            />

                            <div className="text-3xl font-bold mt-3">2550</div>
                            <div className="text-[10px] font-semibold text-center leading-3">
                              Gallons of gas not used
                            </div>
                          </div>
                        </div>
                        <p className="text-[7px] font-semibold mt-4 text-center">
                          Estimated Environmental Impact based on the EPA's
                          Greenhouse Gases Equivalencies Calculator
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Button Section */}
                <div className="bg-[#79BF43] text-white text-3xl py-4 px-8 rounded-3xl font-bold ">
                  Add Battery Backup
                </div>

                {/* Battery Options */}
                <div className="grid grid-cols-2 gap-6 w-full max-w-2xl">
                  {/* Panasonic Card */}
                  <div className="bg-[#F1C530] p-6 rounded-lg text-center text-black">
                    <h3 className="text-xl font-semibold text-white ">
                      Panasonic
                    </h3>
                    <Image
                      src="/images/charging.png"
                      alt="25"
                      width={50}
                      height={50}
                      className="mx-auto text-white mt-2"
                    />
                    <p className="mt-2 font-bold">Panasonic 18 kWh battery</p>
                    <p className="font-bold mt-1">+$101.37/mo.</p>
                    <div className="mt-4 text-2xl flex justify-center items-center ">
                      <FaPlus className="rounded-full p-2 bg-white text-[#F1C530] text-[35px]" />
                    </div>
                  </div>

                  {/* Solex Power Card */}
                  <div className="bg-[#F1C530] p-6 rounded-lg text-center text-black">
                    <h3 className="text-xl font-semibold text-white ">
                      Solex Power
                    </h3>
                    <Image
                      src="/images/charging.png"
                      alt="25"
                      width={50}
                      height={50}
                      className="mx-auto text-white mt-2"
                    />
                    <p className="mt-2 font-bold">Solex Power 20 kWh battery</p>
                    <p className="font-bold mt-1">+$132.16/mo.</p>
                    <div className="mt-4 text-2xl flex justify-center items-center ">
                      <FaPlus className="rounded-full p-2 bg-white text-[#F1C530] text-[35px]" />
                    </div>
                  </div>
                </div>

                {/* System Size */}
                <div className="bg-[#79BF43] text-white py-10 px-8 text-center rounded-xl w-full">
                  <h2 className="text-3xl font-bold">System Size</h2>
                  <h1 className="text-5xl font-extrabold mt-2">20-24kW</h1>
                </div>
                {/* text */}

                {/* Get Final */}
                <div className="bg-[#F1C530] p-4 rounded-xl flex justify-center items-center shadow-md  w-full">
                  <button className="text-white font-bold text-3xl  uppercase tracking-wide">
                    GET A FINIALIZED QUOTE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
