import React from "react";
import { SVGIconProps } from "../types";

export const ReplicateIcon = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ size = 24, theme, isDark, ...props }, ref) => {
    const useDark = theme === "dark" || isDark;
    return useDark ? (
      <svg
        viewBox="0 0 726 726"
        fill="#ffff"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        ref={ref}
        {...props}
      >
        <g clipPath="url(#a)">
          <path d="M726 310.438V392.476H438.068V726H346.302V310.438H726Z" />
          <path d="M726 155.219V237.402H264.845V726H173.078V155.219H726Z" />
          <path d="M726 0V82.1832H91.7664V726H0V0H726Z" />
        </g>
        <defs>
          <clipPath id="a">
            <rect width="726" height="726" />
          </clipPath>
        </defs>
      </svg>
    ) : (
      <svg
        viewBox="0 0 726 726"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        ref={ref}
        {...props}
      >
        <g clipPath="url(#a)">
          <path d="M726 310.438V392.476H438.068V726H346.302V310.438H726Z" />
          <path d="M726 155.219V237.402H264.845V726H173.078V155.219H726Z" />
          <path d="M726 0V82.1832H91.7664V726H0V0H726Z" />
        </g>
        <defs>
          <clipPath id="a">
            <rect width="726" height="726" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

ReplicateIcon.displayName = "ReplicateIcon";
