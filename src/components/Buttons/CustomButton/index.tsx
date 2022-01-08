import React, { BaseSyntheticEvent } from "react";
import classnames from "classnames";

import { useStyles } from "./style";

interface IProps {
  className?: string;
  text?: string;
  onClick?: (e: BaseSyntheticEvent) => void;
  value?: string;
  type?: "button" | "reset" | "submit" | undefined;
}
const CustomButton: React.FC<IProps> = ({ className, text, onClick, value, type }) => {
  const classes = useStyles();

  return (
    <button
      className={classnames(classes.root, className)}
      value={value || text}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CustomButton;
