import React from "react";
import { SVGIconProps } from "../types";

export const VercelIcon = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ size = 24, theme, isDark, ...props }, ref) => {
    const useDark = theme === "dark" || isDark;
    return useDark ? (
      <svg
        fill="currentColor"
        viewBox="0 0 256 222"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        ref={ref}
        {...props}
      >
        <path fill="#fff" d="m128 0 128 221.705H0z" />
      </svg>
    ) : (
      <svg
        fill="currentColor"
        viewBox="0 0 256 222"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        ref={ref}
        {...props}
      >
        <path fill="#000" d="m128 0 128 221.705H0z" />
      </svg>
    );
  },
);

VercelIcon.displayName = "VercelIcon";
