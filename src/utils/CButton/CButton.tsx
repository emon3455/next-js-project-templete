"use client";
import React, { useState } from "react";

interface Props {
  id?: string;
  customClass?: string;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  btnTitle?: string | React.ReactNode;
  textUpperCased?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
  color?: string;
  variant: "solid" | "outline" | "text" | "contained";
  fontSize?: string;
  fontStyle?: string;
  gap?: string;
  onClick?: () => void;
  rest?: any;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onDoubleClick?: () => void;
  loading?: boolean;
  circle?: boolean;
  paddingNone?: boolean;
  className?: string;
}

const CButton = ({
  circle,
  customClass,
  className,
  fullWidth,
  fontSize,
  gap,
  fontStyle,
  type,
  btnTitle,
  textUpperCased,
  children,
  disabled,
  color,
  variant,
  onClick,
  loading,
  paddingNone,
  id,
  ...rest
}: Props) => {
  return (
    <section>
      <button
        className={
          customClass
            ? customClass
            : ` ${className} ${
                paddingNone ? "p-2" : "md:px-3 md:py-2  px-2 py-1"
              } 
              ${circle ? "rounded-full" : "rounded-sm"}
              ${fontSize ? fontSize : "text-[0.75rem] sm:text-sm"}
              ${fontStyle ? fontStyle : "font-semibold"}
              transition-all
              flex
              items-center
              justify-center
              ${gap ? gap : "gap-1"}
              ring-1
              ring-transparent
              focus:outline-none
              focus:ring-2
              focus:ring-warning
              focus:ring-opacity-50
              
              
            ${fullWidth ? "w-full" : ""} 
            ${textUpperCased ? "uppercase" : ""}
            ${
              disabled || loading
                ? `opacity-50 cursor-not-allowed hover:opacity-50 
                hover:cursor-not-allowed hover:bg-transparent hover:text-warning dark:hover:text-warning
                `
                : "cursor-pointer"
            }

            ${
              variant === "text"
                ? `bg-transparent ${
                    color ? color : "text-warning"
                  } `
                : ""
            }
            ${
              variant === "contained"
                ? `${color ? color : "bg-cyan-950 text-white"}
                  ${circle ? "rounded-full" : "rounded-none"}
                  hover:bg-cyan-950/90 `
                : ""
            }
              
              ${
                variant === "outline"
                  ? `${
                      color
                        ? color
                        : "border-[0.0625rem] border-warning text-warning hover:bg-warning rounded-md hover:text-black transition-all duration-500"
                    }
                  
                 hover:bg-warning/90 `
                  : ""
              }

              ${
                variant === "solid"
                  ? `${color ? color : "bg-warning text-dark"}
                  hover:opacity-80
                  transition-all
                  duration-500
                  `
                  : ""
              }
              `
        }
        onClick={onClick}
        type={type}
        disabled={disabled || loading}
        {...rest}
      >
        {loading && (
          <svg
            className="animate-spin h-5 w-5 mx-auto"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            ></path>
          </svg>
        )}
        {!loading && children}
      </button>
    </section>
  );
};

export default CButton;
