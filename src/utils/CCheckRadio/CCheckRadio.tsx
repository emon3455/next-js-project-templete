import React from "react";

interface CheckRadioProps {
  type: "radio" | "checkbox";
  id?: string;
  name?: string;
  className?: string;
  disabled?: boolean;
  label?: string;
  defaultChecked?: boolean;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const CCheckRadio = ({
  type,
  id,
  name,
  className,
  label,
  defaultChecked,
  onClick,
}: CheckRadioProps) => {
  return (
    <>
      <input
        onClick={onClick}
        type={type}
        name={name}
        id={id}
        defaultChecked={defaultChecked}
        className={className}
      />
      <label htmlFor={label?.toLowerCase()}>{label}</label>
    </>
  );
};

export default CCheckRadio;
