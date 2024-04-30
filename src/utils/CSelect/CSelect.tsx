"use client";
import Select, { components } from "react-select";
import makeAnimated from "react-select/animated";

interface CSelectProps {
  name?: string;
  className?: string;
  onChange?: (selectedOptions: any) => void;
  id?: string;
  width?: string;
  label?: string;
  options?: any;
  isMulti?: boolean;
  classNamePrefix?: string;
  defaultValue?: any;
  disabled?: boolean;
  value?: any;
}

const CSelect = ({
  name = "",
  className = "",
  id = "",
  width,
  label,
  options,
  isMulti,
  classNamePrefix,
  defaultValue,
  onChange,
  disabled,
  value,
  ...props
}: CSelectProps) => {
  const animatedComponents = makeAnimated();

  const Control = ({ children, ...props }: any) => (
    <components.Control {...props} className="text-xs pl-[5px]">
      Select → {children}
    </components.Control>
  );

  return (
    <div className="">
      <label
        htmlFor={label?.toLowerCase()}
        className="level text-sm text-gray-500"
      >
        {label}
      </label>

      <Select
        name={name}
        id={id}
        className={`${className} ${
          width ? width : "w-full"
        }  border-0 border-dark-primary rounded-md outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent dark:bg-black/10`}
        onChange={(selectedOptions:any) => onChange?.(selectedOptions)}
        classNamePrefix={classNamePrefix || "select"}
        closeMenuOnSelect={true}
        components={isMulti ? animatedComponents : { Control }}
        isMulti={isMulti}
        options={options}
        defaultValue={defaultValue}
        isDisabled={disabled}
        isClearable={true}
        isSearchable={true}
        value={
          options?.find((item: any) => item?.value === value) ||
          defaultValue ||
          null
        }
        {...props}
        styles={{
          option: (defaultStyles:any, state:any) => ({
            ...defaultStyles,
            zIndex: 9999,
            backgroundColor: "#0C5164",
            color: "#fff",
            height: "100%",
            "&:hover": {
              backgroundColor: "#0D1526",
              color: "white",
            },
          }),
          singleValue: (defaultStyles:any) => ({
            ...defaultStyles,
            color: "#0C5164",
            zIndex: 9999,
          }),
          control: (provided:any, state:any) => ({
            ...provided,
            border: "2px solid #0C5164",
            borderRadius: "0.375rem",
            outlineColor: "#0C5164",
            opacity: state.isDisabled ? ".5" : "1",
            cursor: state.isDisabled ? "not-allowed" : "default",
            backgroundColor: "#fff",
            "&:hover": {
              border: "2px solid #FBBF24",
              outlineColor: "#FBBF24",
            },
            width: "100%",
          }),
        }}
      />
    </div>
  );
};

export default CSelect;