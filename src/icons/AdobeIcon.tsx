import React from "react";
import { SVGIconProps } from "../types";

export const AdobeIcon = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ size = 24, theme, isDark, ...props }, ref) => (
    <svg
      viewBox="0 0 91 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      ref={ref}
      {...props}
    >
      <g clipPath="url(#icon_7mgztxw_a)" fill="#EB1000">
        <path d="M56.969 0h33.463v80zM33.463 0H0v80zm11.719 29.467L66.52 80H52.566l-6.368-16.054h-15.58z" />
      </g>
      <defs>
        <clipPath id="icon_7mgztxw_a">
          <path fill="#fff" d="M0 0h90.432v80H0z" />
        </clipPath>
      </defs>
    </svg>
  ),
);

AdobeIcon.displayName = "AdobeIcon";
