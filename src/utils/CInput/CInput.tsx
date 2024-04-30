"use client";
import React from "react";
import { FaQuestionCircle } from "react-icons/fa";

interface CInputProps {
  type?: string;
  id?: string;
  name?: string;
  placeholder?: string;
  className?: string;
  value?: any;
  defaultValue?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onInput?: (e: React.FormEvent<HTMLInputElement>) => void;
  onInvalid?: (e: React.FormEvent<HTMLInputElement>) => void;
  onReset?: (e: React.FormEvent<HTMLInputElement>) => void;
  onSelect?: (e: React.FormEvent<HTMLInputElement>) => void;
  onSubmit?: (e: React.FormEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
  required?: boolean;
  label?: string;
  errorQuery?: boolean;
  style?: React.CSSProperties;
  autoComplete?: string;
  pattern?: string;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  step?: number;
  multiple?: boolean;
  accept?: string;
  endIcon?: any;
  width?: string;
}

const CInput = ({
  type = "text",
  id = "",
  name = "",
  placeholder = "",
  className = "",
  value,
  onChange,
  label,
  errorQuery,
  disabled = false,
  defaultValue,
  endIcon,
  width,
  ...rest
}: CInputProps) => {
  return (
    <>
      <section className="flex justify-between">
        <label
          htmlFor={label?.toLowerCase()}
          className="level text-sm text-gray-500"
        >
          {label}
        </label>

        {errorQuery && (
          <div data-tooltip-id={id}>
            <span>
              <FaQuestionCircle
                className={`
                  ${
                    errorQuery
                      ? "text-red-500 animate-animate-bounce"
                      : "text-gray-500"
                  }
                `}
              />
            </span>
          </div>
        )}
      </section>
      <div className="relative flex">
        <input
          type={type}
          name={name}
          id={id}
          key={id}
          autoComplete="off"
          placeholder={placeholder || label}
          defaultValue={defaultValue}
          className={`${className} ${
            width ? width : "w-full"
          }  border-2 border-dark-primary rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400 dark:bg-black/10 focus:border-transparent ${
            disabled && "opacity-20"
          }`}
          value={value}
          onChange={onChange}
          disabled={disabled}
          {...rest}
        />
        {endIcon && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 text-xl z-50 cursor-pointer">
            {endIcon}
          </div>
        )}
      </div>
    </>
  );
};

export default CInput;
