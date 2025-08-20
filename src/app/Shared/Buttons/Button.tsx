import General from "@/fonts/General";
import React, { ReactNode } from "react";
type ButtonProps = {
  id: string;
  title: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  containerClass?: string;
};

const Button = ({ id, title, leftIcon, containerClass }: ButtonProps) => {
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
