import General from "@/fonts/General";
import React from "react";
const Button = ({
  id,
  title,
  leftIcon,
  containerClass,
}: {
  id: string;
  title: string;
  leftIcon?: any;
  containerClass?: string;
  rightIcon?: any;
}) => {
  return (
    <div
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 ${containerClass}`}
    >
      {leftIcon}
      <span
        className={`relative incline-flex overflow-hidden ${General.className} text-xs uppercase`}
      >
        <div>{title}</div>
      </span>
    </div>
  );
};

export default Button;
