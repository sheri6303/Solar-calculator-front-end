import React from "react";
import Image from "next/image";
import CommonLayout from "./CommonLayout";

const RoofSolar = ({ prevStep, nextStep }) => {
  return (
    <CommonLayout
      title=""
      imageUrl="/images/sun.PNG"
      sidebarContent="Harness the power of the sun and shine bight for a greener future"
      prevStep={prevStep}
      nextStep={nextStep}
    >
      <div className="flex flex-col items-center gap-12 mt-12">
        <h2 className="font-bold w-2/3 text-xl text-center">
          Your roof has about 11,730 sqft <br /> available for solar panels!
        </h2>
        {/* map */}
        <Image src="/images/map.png" alt="map" width={500} height={500} />
      </div>
    </CommonLayout>
  );
};

export default RoofSolar;
