import React from "react";
import classNames from "classnames";

import { ColorScheme } from "@/app/Types/ColorScheme";

const Button = ({
  solid,
  colorScheme,
  className,
  children,
  ...rest
}: {
  solid?: boolean;
  colorScheme?: ColorScheme;
  className?: string;
  children: React.ReactNode;
}) => {
  const classes = classNames(
    className,
    "group",
    "text-lg",
    "px-8",
    "py-5",
    "rounded-2xl",
    "transition-all",
    "duration-300",
    "font-medium",
    {
      "text-light-black-33 bg-transparent hover:text-light-violet-d7 hover:bg-white":
        !solid,
      "bg-light-violet-ef text-white hover:bg-light-violet-d7 hover:shadow-[0_0.8rem_1.6rem_rgba(123,104,215,0.75)]":
        solid,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

export default Button;
