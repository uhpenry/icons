import React from "react";
import { SVGIconProps } from "../types";

export const FastAPIIcon = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ size = 24, theme, isDark, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width={size}
      height={size}
      ref={ref}
      {...props}
    >
      <path
        d="M128 0C57.33 0 0 57.33 0 128s57.33 128 128 128 128-57.33 128-128S198.67 0 128 0Zm-6.67 230.605v-80.288H76.699l64.128-124.922v80.288h42.966L121.33 230.605Z"
        fill="#009688"
      />
    </svg>
  ),
);

FastAPIIcon.displayName = "FastAPIIcon";
