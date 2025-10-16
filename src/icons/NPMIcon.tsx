import React from "react";
import { SVGIconProps } from "../types";

export const NPMIcon = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ size = 24, theme, isDark, ...props }, ref) => (
    <svg
      viewBox="0 0 2500 2500"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      ref={ref}
      {...props}
    >
      <path fill="#c00" d="M0 0h2500v2500H0z" />
      <path
        fill="#fff"
        d="M1241.5 268.5h-973v1962.9h972.9V763.5h495v1467.9h495V268.5z"
      />
    </svg>
  ),
);

NPMIcon.displayName = "NPMIcon";
