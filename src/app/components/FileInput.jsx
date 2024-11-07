"use client";
import { useState } from "react";
import Image from "next/image";

const FileInput = ({ text, name, onChange }) => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      onChange(e);  // Trigger parent onChange handler for file
    }
  };

  return (
    <div className="flex justify-center items-center">
      <input
        id={name}
        type="file"
        className="hidden"
        onChange={handleFileChange}  // Handle file change locally
      />
      <label
        htmlFor={name}
        className="w-full sm:w-[60%] lg:w-[70%] flex gap-2 items-center justify-center bg-[#79BF43] text-white font-bold py-1 sm:py-2  lg:py-3 px-6 rounded-full cursor-pointer transition hover:bg-[#68a639] mb-4"
      >
        <Image src="/images/fileInput.PNG" alt="file" width={40} height={40} />
        {fileName ? fileName : text}  {/* Display file name if selected */}
      </label>
    </div>
  );
};

export default FileInput;
