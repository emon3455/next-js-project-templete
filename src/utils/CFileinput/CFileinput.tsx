"use client";
import React from "react";
import { BsCloudUpload } from "react-icons/bs";

interface CFileInputProps {
  type?: string;
  id?: string;
  name?: string;
  placeholder?: string;
  className?: string;
  value?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  disabled?: boolean;
  defaultValue?: string;
  width?: string;
  multiple?: boolean;
  accept?: string;
  fileName?: any;
  files?: any;
}

const CFileInput = ({
  type = "text",
  id = "",
  name = "",
  placeholder = "",
  className = "",
  value,
  onChange,
  label,
  disabled = false,
  defaultValue,
  width,
  multiple = false,
  accept,
  fileName,
  files,
  ...rest
}: CFileInputProps) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onChange?.(e);
    }
  };

  return (
    <section>
      {label && (
        <label
          htmlFor={label?.toLowerCase()}
          className="level text-sm text-gray-500"
        >
          {label}
        </label>
      )}
      <div className="relative w-full mt-1">
        <label
          className={`flex items-center justify-center cursor-pointer w-full p-2 -mt-1 bg-gray-200 rounded-md hover:bg-gray-300 dark:bg-black/10 border overflow-hidden ${
            disabled && "opacity-30"
          }`}
        >
          <BsCloudUpload className="mr-2" />
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {files?.length && multiple
              ? `${files?.length} file(s) selected`
              : multiple && files?.length === 0
              ? "Choose multiple files: "
              : "Choose a file: "}

            {!multiple && files?.name && (
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {files?.name}
              </span>
            )}
          </span>
        </label>
        <input
          id={id}
          type="file"
          className="absolute inset-0 opacity-0 cursor-pointer w-full"
          onChange={handleFileChange}
          multiple={multiple}
          accept={accept || "*/*"}
          disabled={disabled}
          {...rest}
        />
      </div>
    </section>
  );
};

export default CFileInput;
