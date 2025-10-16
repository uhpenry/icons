import React from "react";
import { SVGIconProps } from "../types";

export const ZeaburIcon = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ size = 24, theme, isDark, ...props }, ref) => {
    const useDark = theme === "dark" || isDark;
    return useDark ? (
      <svg
        viewBox="0 0 294 229"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        ref={ref}
        {...props}
      >
        <path
          fill="#fff"
          d="M114 145h179v84H0v-84h82l114-61H0V0h293v84l-179 61Z"
        />
        <path fill="#6300FF" d="M195 0H0v84h195V0Z" />
        <path fill="#F40" d="M293 145H115v84h178v-84Z" />
      </svg>
    ) : (
      <svg
        viewBox="0 0 294 229"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        ref={ref}
        {...props}
      >
        <path d="M114 145h179v84H0v-84h82l114-61H0V0h293v84l-179 61Z" />
        <path fill="#6300FF" d="M195 0H0v84h195V0Z" />
        <path fill="#F40" d="M293 145H115v84h178v-84Z" />
      </svg>
    );
  },
);

ZeaburIcon.displayName = "ZeaburIcon";
