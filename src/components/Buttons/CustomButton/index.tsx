import React, { BaseSyntheticEvent } from "react";

interface IProps {
  className?: string;
  text?: string;
  onClick?: (e: BaseSyntheticEvent) => void;
  value?: string;
  type?: "button" | "reset" | "submit" | undefined;
}
const CustomButton: React.FC<IProps> = ({ className, text, onClick, value, type }) => {
  return (
    <button
      className={className}
      value={value || text}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CustomButton;
