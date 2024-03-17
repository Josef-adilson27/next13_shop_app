"use client";

import { CustomButtonProps } from "@/types";

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  style,
  handleClick,
}) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={style}
      onClick={handleClick}
    >
      <span>{title}</span>
    </button>
  );
};

export default CustomButton;
