import React from "react";
import { SVGIconProps } from "../types";

export const D3JsIcon = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ size = 24, theme, isDark, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-10 -10 116 111"
      width={size}
      height={size}
      ref={ref}
      {...props}
    >
      <clipPath id="icon_1ch4irm_clip">
        <path d="M0,0h7.75a45.5,45.5 0 1 1 0,91h-7.75v-20h7.75a25.5,25.5 0 1 0 0,-51h-7.75zm36.2510,0h32a27.75,27.75 0 0 1 21.331,45.5a27.75,27.75 0 0 1 -21.331,45.5h-32a53.6895,53.6895 0 0 0 18.7464,-20h13.2526a7.75,7.75 0 1 0 0,-15.5h-7.75a53.6895,53.6895 0 0 0 0,-20h7.75a7.75,7.75 0 1 0 0,-15.5h-13.2526a53.6895,53.6895 0 0 0 -18.7464,-20z" />
      </clipPath>
      <linearGradient
        id="icon_1ch4irm_gradient-1"
        gradientUnits="userSpaceOnUse"
        x1="7"
        y1="64"
        x2="50"
        y2="107"
      >
        <stop offset="0" stopColor="#f9a03c" />
        <stop offset="1" stopColor="#f7974e" />
      </linearGradient>
      <linearGradient
        id="icon_1ch4irm_gradient-2"
        gradientUnits="userSpaceOnUse"
        x1="2"
        y1="-2"
        x2="87"
        y2="84"
      >
        <stop offset="0" stopColor="#f26d58" />
        <stop offset="1" stopColor="#f9a03c" />
      </linearGradient>
      <linearGradient
        id="icon_1ch4irm_gradient-3"
        gradientUnits="userSpaceOnUse"
        x1="45"
        y1="-10"
        x2="108"
        y2="53"
      >
        <stop offset="0" stopColor="#b84e51" />
        <stop offset="1" stopColor="#f68e48" />
      </linearGradient>
      <g clipPath="url(#icon_1ch4irm_clip)">
        <path
          d="M-100,-102m-28,0v300h300z"
          fill="url(#icon_1ch4irm_gradient-1)"
        />
        <path
          d="M-100,-102m28,0h300v300z"
          fill="url(#icon_1ch4irm_gradient-3)"
        />
        <path
          d="M-100,-102l300,300"
          fill="none"
          stroke="url(#icon_1ch4irm_gradient-2)"
          strokeWidth="40"
        />
      </g>
    </svg>
  ),
);

D3JsIcon.displayName = "D3JsIcon";
