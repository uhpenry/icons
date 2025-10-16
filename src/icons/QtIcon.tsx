import React from "react";
import { SVGIconProps } from "../types";

export const QtIcon = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ size = 24, theme, isDark, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 54 43"
      width={size}
      height={size}
      ref={ref}
      {...props}
    >
      <path fill="#0c0" d="M1 42V10l9-9h43v33l-9 9z" />
      <text x="9" y="32" fill="#FFF" fontFamily="Arial" fontSize="32">
        Qt
      </text>
    </svg>
  ),
);

QtIcon.displayName = "QtIcon";
