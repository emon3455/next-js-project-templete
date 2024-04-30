import React from "react";
import logo from "../../../public/gem.png";
import Image from "next/image";

const COverlayLoader = ({ title }: { title?: string }) => {
  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 w-full h-full
    flex justify-center items-center z-[9999]  gap-2 flex-col"
      >
        {/* //image  */}
        <section>
          <Image
            src={logo}
            width={100}
            height={50}
            alt="logo"
            className="md:w-[5rem] w-[4.5rem] cursor-pointer object-contain"
          />
        </section>

        <div className="flex items-center bg-white p-4 rounded-md shadow-lg dark:bg-gray-800 ">
          <span className="text-sm md:text-lg">
            {title ? title : "Upload in progress...! Please wait."}
            <small className="text-xs text-gray-500">Do not refresh</small>
          </span>
          <svg
            className="animate-spin h-8 w-8 text-gray-800 dark:text-gray-200"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default COverlayLoader;
