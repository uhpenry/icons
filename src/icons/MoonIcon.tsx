import React from "react";
import { SVGIconProps } from "../types";

export const MoonIcon = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ size = 24, theme, isDark, ...props }, ref) => (
    <svg
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      ref={ref}
      {...props}
    >
      <defs>
        <circle id="icon_cmravpi_path-1" cx="128" cy="128" r="128" />
        <radialGradient
          cx="50%"
          cy="50%"
          fx="50%"
          fy="50%"
          r="49.7893875%"
          id="icon_cmravpi_moonRadialGradient-1"
        >
          <stop stopColor="#4600D1" offset="0%" />
          <stop stopColor="#4600D1" offset="49.2852329%" />
          <stop stopColor="#35009F" offset="100%" />
        </radialGradient>
        <radialGradient
          cx="50%"
          cy="50%"
          fx="50%"
          fy="50%"
          r="49.6030859%"
          id="icon_cmravpi_moonRadialGradient-2"
        >
          <stop stopColor="#35019E" offset="0%" />
          <stop stopColor="#320194" offset="18.7296056%" />
          <stop stopColor="#220066" offset="100%" />
        </radialGradient>
      </defs>
      <circle fill="#5805FF" cx="128" cy="128" r="128" />
      <mask id="icon_cmravpi_mask-2" fill="white">
        <use xlinkHref="#icon_cmravpi_path-1" />
      </mask>
      <circle
        fill="url(#icon_cmravpi_moonRadialGradient-1)"
        mask="url(#icon_cmravpi_mask-2)"
        cx="199.694484"
        cy="105.369165"
        r="128"
      />
      <circle
        fill="url(#icon_cmravpi_moonRadialGradient-2)"
        mask="url(#icon_cmravpi_mask-2)"
        cx="275.371994"
        cy="82.3762376"
        r="128"
      />
    </svg>
  ),
);

MoonIcon.displayName = "MoonIcon";
