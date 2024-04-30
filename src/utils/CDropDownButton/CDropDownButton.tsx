"use client";
import React from "react";
import CButton from "../CButton/CButton";
import Link from "next/link";

interface Props {
  dropdown: boolean;
  setDropdown: (dropdown: boolean) => void;
  variant: "solid" | "outline" | "text" | "contained";
  color?: string;
  textUpperCased?: boolean;
  btnText?: string;
  type?: "button" | "submit" | "reset";
  btnIcon?: React.ReactNode;
  childIcon?: React.ReactNode;
  customClass?: string;
  menuList?: {
    text: string;
    icon?: React.ReactNode;
    query?: any;
    href?: string;
    navigate?: string;
    target?: string;
  }[];
}

const CDropDownButton = ({
  type,
  dropdown,
  setDropdown,
  variant,
  color,
  textUpperCased,
  btnText,
  btnIcon,
  menuList,
  customClass,
  childIcon,
}: Props) => {
  return (
    <div>
      <div className="relative inline-block text-left">
        <div>
          <CButton
            textUpperCased={textUpperCased}
            type={type}
            variant={variant}
            id="options-menu"
            color={color}
            aria-haspopup="true"
            aria-expanded="true"
            customClass={customClass}
            onClick={() => {
              setDropdown(!dropdown);
            }}
          >
            {btnText}
            {btnIcon}
          </CButton>

          <div
            className="absolute right-0 text-[0.625rem]
            sm:text-sm
            font-semibold
            transition-all mt-[1px] origin-top-right shadow-lg "
            hidden={dropdown ? false : true /* dropdown ? false : true */}
          >
            <div
              className="py-1 bg-black text-white shadow-xs w-max "
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {menuList?.map((item, index) => {
                return (
                  <section key={index}>
                    {item?.href ? (
                      <Link
                        key={index}
                        href={{
                          pathname: item?.href,
                          query: item?.query,
                        }}
                        target={item?.target || "_self"}
                        className={`block px-4 py-2 text-white hover:bg-gray-100 hover:text-gray-900 text-[0.75rem]
                    sm:text-sm
                        ${
                          btnText === item?.text
                            ? "bg-gray-100/20 text-white"
                            : ""
                        }
                    `}
                        role="menuitem"
                      >
                        {item?.text}
                      </Link>
                    ) : (
                      // {/* // <button */}
                      <CButton
                        variant="text"
                        color="black"
                        key={index}
                        onClick={() => {
                          window.open(item?.navigate, "_blank");
                          setDropdown(false);
                        }}
                        fullWidth
                        customClass={`
                          block px-4 py-2 text-white hover:bg-gray-100 hover:text-gray-900 text-[0.75rem]
                          sm:text-sm
                          ${
                            btnText === item?.text
                              ? "bg-gray-100/20 text-white"
                              : ""
                          }
                          flex items-center justify-between gap-1
                         `}
                      >
                        {item?.text} {childIcon}
                      </CButton>
                    )}
                  </section>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CDropDownButton;
