import React from "react";
import { SVGIconProps } from "../types";

export const UbuntuIcon = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ size = 24, theme, isDark, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      ref={ref}
      {...props}
    >
      <circle cx="50" cy="50" r="45" fill="#f47421" />
      <circle
        cx="50"
        cy="50"
        r="21.8"
        fill="none"
        stroke="#fff"
        strokeWidth="8.6"
      />
      <g id="icon_dvoc74i_a">
        <circle cx="19.4" cy="50" r="8.4" fill="#f47421" />
        <path stroke="#f47421" strokeWidth="3.2" d="M67 50h10" />
        <circle cx="19.4" cy="50" r="6" fill="#fff" />
      </g>
      <use xlinkHref="#icon_dvoc74i_a" transform="rotate(120 50 50)" />
      <use xlinkHref="#icon_dvoc74i_a" transform="rotate(240 50 50)" />
    </svg>
  ),
);

UbuntuIcon.displayName = "UbuntuIcon";
