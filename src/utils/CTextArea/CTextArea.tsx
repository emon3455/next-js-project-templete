import React from "react";

interface CTextAreaProps {
  id?: string;
  name?: string;
  placeholder?: string;
  className?: string;
  value?: any;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
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
  disabled?: boolean;
  required?: boolean;
  label?: string;
  style?: React.CSSProperties;
  width?: string;
  height?: string;
}

const CTextArea = ({
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
  height,

  ...rest
}: CTextAreaProps) => {
  return (
    <section>
      <label
        htmlFor={label?.toLowerCase()}
        className="level text-sm text-gray-500"
      >
        {label}
      </label>
      <textarea
        id={id}
        className={`${className && className} ${width ? width : "w-full"} ${
          height ? height : "h-20"
        }  "rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"  ${
          disabled && "opacity-20 cursor-not-allowed"
        } border border-gray-200`}
        style={{
          backgroundColor: "#fff",
        }}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={onChange}
        disabled={disabled}
      ></textarea>
    </section>
  );
};

export default CTextArea;
