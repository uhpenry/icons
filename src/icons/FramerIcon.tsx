import React from "react";
import { SVGIconProps } from "../types";

export const FramerIcon = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ size = 24, theme, isDark, ...props }, ref) => {
    const useDark = theme === "dark" || isDark;
    return useDark ? (
      <svg
        viewBox="0 0 256 384"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        ref={ref}
        {...props}
      >
        <path
          fill="#fff"
          d="M0 0h256v128H128L0 0Zm0 128h128l128 128H128v128L0 256V128Z"
        />
      </svg>
    ) : (
      <svg
        viewBox="0 0 256 384"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        ref={ref}
        {...props}
      >
        <path d="M0 0h256v128H128L0 0Zm0 128h128l128 128H128v128L0 256V128Z" />
      </svg>
    );
  },
);

FramerIcon.displayName = "FramerIcon";
