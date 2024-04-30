"use client";
import React from "react";

import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";

interface AccordionLayoutProps {
  title: string;
  children: React.ReactNode;
  index: number;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  created_at?: string;
}

const AccordionLayout = ({
  title,
  children,
  index,
  activeIndex,
  setActiveIndex,
  created_at,
}: AccordionLayoutProps) => {
  const handleSetIndex = (index: any) => {
    activeIndex !== index && setActiveIndex(index);
  };

  return (
    <>
      <div className="w-full my-1 flex flex-col justify-center items-center rounded-lg border border-gray-200">
        <div
          className={`
           w-full flex flex-row justify-between items-center px-5 py-3 cursor-pointer
          rounded-lg transition-all duration-500 ease-in-out 
            ${
              activeIndex === index
                ? "bg-cyan-950 text-white"
                : "bg-cyan-600 text-black"
            }
          `}
          onClick={() => handleSetIndex(index)}
        >
          <h2 className="text-sm font-bold text-white uppercase">{title}</h2>
          {activeIndex === index ? (
            <BsFillArrowUpCircleFill className="text-2xl text-white animate-animate-bounce " />
          ) : (
            <BsFillArrowDownCircleFill className="text-2xl text-white animate-animate-bounce " />
          )}
        </div>
        {activeIndex === index && (
          <div
            className="w-full flex flex-col justify-center  px-5 py-8 bg-white
          transition-all duration-500 ease-in-out rounded-b-lg shadow-xl"
            style={{
              height: "auto",
            }}
          >
            <div className="text-sm font-medium text-stone-600 group flex relative flex-col">
              {children}
              {/* //created at  */}
              {created_at && (
                <span className="text-xs text-gray-400 mt-5">
                  Created at: {""}
                  {created_at?.split?.("T")?.[0]}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AccordionLayout;