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
      <g clipPath="url(#icon_gcbhtjg_clip0_906_1839)">
        <path d="M56.9686 0H90.4318V80L56.9686 0Z" fill="#EB1000" />
        <path d="M33.4632 0H0V80L33.4632 0Z" fill="#EB1000" />
        <path
          d="M45.1821 29.4668L66.5199 80.0002H52.5657L46.1982 63.9461H30.6182L45.1821 29.4668Z"
          fill="#EB1000"
        />
      </g>
      <defs>
        <clipPath id="icon_gcbhtjg_clip0_906_1839">
          <rect width="90.4318" height="80" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
);

AdobeIcon.displayName = "AdobeIcon";
