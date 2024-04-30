"use client";
import CButton from "../CButton/CButton";
import React, { useRef } from "react";
interface CustomModalProps {
  open: boolean;
  onClose?: (value: boolean) => void;
  children?: React.ReactNode;
  width?: string;
  height?: string;
  title?: string;
  animation?: string;
}

const CModal: React.FC<CustomModalProps> = ({
  open,
  onClose,
  title,
  width,
  height,
  animation,
  children,
  ...rest
}) => {
  // ----------------------------- modal ref -----------------------------
  const modalRef = useRef<HTMLDivElement>(null);

  // ----------------------------- modal close on outside click -----------------------------
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose && onClose(false);
    }
  };

  return (
    <main
      className={`${
        open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[100rem]"
      }
        inset-0 fixed flex items-center justify-center bg-black/30 z-[9999] transition-all duration-300 ease-in-out
      `}
      onClick={handleOutsideClick}
      id={title || "modal"}
    >
      <section
        ref={modalRef}
        className={`
        bg-white rounded-md shadow-lg p-4  dark:bg-dark dark:text-gray-300
        ${width ? width : "md:w-[35rem]"}
          md:min-h-[25rem] 
          min-h-[15rem]
          w-full m-2 
          max-h-screen
          ${height ? height : "overflow-x-hidden"}
          z-[9999]
          overflow-y-auto
        `}
        {...rest}
      >
        {/* ----------------------------- modal header section ----------------------------- */}
        {(onClose || title) && (
          <section className="mb-4 border-b">
            <div className="flex justify-between items-center pb-4">
              <h2 className="md:text-[1rem] text-[0.875rem] font-medium">
                {title && title}
              </h2>
              {onClose && (
                <CButton
                  onClick={() => onClose && onClose(false)}
                  variant="text"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-red-500 hover:text-red-700 cursor-pointer transition duration-300 ease-in-out transform hover:scale-110 border rounded-full border-red-500/30 hover:border-red-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </CButton>
              )}
            </div>
          </section>
        )}
        {/* ----------------------------- modal body section ----------------------------- */}
        {children && children}
      </section>
    </main>
  );
};

export default CModal;
