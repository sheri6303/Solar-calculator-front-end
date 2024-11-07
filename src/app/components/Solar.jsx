// import React from "react";
// import { BatteryChargingIcon } from "@heroicons/react/24/outline";
// import Prograssbar from "./Prograssbar";
// import { FaSearch } from "react-icons/fa";
// import { FaArrowLeft } from "react-icons/fa6";
// import { FaArrowRight } from "react-icons/fa6";
// import Image from "next/image";
// import RightSide from "../RightSide";
// import Input from "./Input";
// import FileInput from "./FileInput";
// import Calendar from "./Calendar/Calendar";
// import Layout from "../Layout.jsx";

// const SolarComponent = ({prevStep, nextStep}) => {
//   return (
   
//       // <div className="space-y-10">
//       //   {/* <Prograssbar /> */}
//       //   <div>
//       //     <h2 className="text-xl text-center  font-bold mb-4 p-3">
//       //       Search for your electric utility provider
//       //     </h2>
//       //   </div>

//       //   <div className="flex items-center bg-gray-300 rounded-xl px-1 py-2 w-full ">
//       //     <FaSearch className="w-[12px] h-[12px] text-[#848488] ml-1 mr-2" />
//       //     <input
//       //       type="text"
//       //       placeholder="Search"
//       //       className="bg-transparent outline-none text-[12px] py-2 w-full text-[#848488] placeholder-[#848488]"
//       //     />
//       //   </div>
//       // </div>
//       <>
//        <div className="w-full h-[100vh] bg-[#D6D6D6] border-[0.5px] border-[#26262682] p-3 overflow-hidden">
//         <div className="h-full w-full flex relative ">
//           <div className="w-[35%] bg-[#79BF43] text-white rounded-l-3xl flex flex-col justify-center items-center p-5 text-center">
//             <Image
//               src="/images/solorsystem.PNG"
//               alt="foot"
//               width={100}
//               height={100}
//             />
//             <h1 className="text-5xl font-bold leading-[60px] mt-4 text-start">
//             Store energe for brighter tomorrow with solor
//             </h1>
//           </div>
//           <div className="container mx-auto bg-white w-full p-6  overflow-y-auto">
//             <div className="w-[36%]  ml-[360px] mt-12">
//               <Prograssbar />
//             </div>
//             <div className="flex flex-col items-center w-[90%] ">
//             <div className="space-y-10">
//         {/* <Prograssbar /> */}
//         <div>
//           <h2 className="text-xl text-center  font-bold mb-4 p-3">
//             Search for your electric utility provider
//           </h2>
//         </div>

//         <div className="flex items-center bg-gray-300 rounded-xl px-1 py-2 w-full ">
//           <FaSearch className="w-[12px] h-[12px] text-[#848488] ml-1 mr-2" />
//           <input
//             type="text"
//             placeholder="Search"
//             className="bg-transparent outline-none text-[12px] py-2 w-full text-[#848488] placeholder-[#848488]"
//           />
//         </div>
//       </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Buttons fixed at bottom-right of the screen */}
//       <div className="fixed bottom-6 right-12 mr-6 flex space-x-6">
//         <button
//           className="bg-[#F1C530] text-white rounded-full p-3 disabled:opacity-50"
//           onClick={prevStep}
//           // disabled={currentPage === 0}
//         >
//           <FaArrowLeft className="text-xl" />
//         </button>
//         <button
//           className="bg-[#F1C530] text-white rounded-full p-3 disabled:opacity-50"
//           onClick={nextStep}
//           // disabled={currentPage === content.length - 1}
//         >
//           <FaArrowRight className="text-xl" />
//         </button>
//       </div>
//       </>
      

//   );
// };

// export default SolarComponent;

import React from "react";
import { FaSearch } from "react-icons/fa";
import CommonLayout from "./CommonLayout";

const SolarComponent = ({ prevStep, nextStep }) => {
  return (
    <CommonLayout
      title="Search for your electric utility provider"
      imageUrl="/images/solorsystem.PNG"
      sidebarContent="Store energy for brighter tomorrow with solar"
      prevStep={prevStep}
      nextStep={nextStep}
    >
      <div className="flex items-center bg-gray-300 rounded-2xl px-1 py-2 w-full ">
        <FaSearch className="w-[12px] h-[12px] text-[#848488] ml-1 mr-2" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none text-[12px] py-1 w-full text-[#848488] placeholder-[#848488]"
        />
      </div>
    </CommonLayout>
  );
};

export default SolarComponent;
