import React from "react";
import { SVGIconProps } from "../types";

export const NextJsIcon = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ size = 24, ...props }, ref) => (
    <svg
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      ref={ref}
      {...props}
    >
      <mask
        id="a"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="180"
        height="180"
      >
        <circle cx="90" cy="90" r="90" fill="black" />
      </mask>
      <g mask="url(#a)">
        <circle
          cx="90"
          cy="90"
          r="87"
          fill="black"
          stroke="white"
          strokeWidth="6"
        />
        <path
          d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
          fill="url(#b)"
        />
        <rect x="115" y="54" width="12" height="72" fill="url(#c)" />
      </g>
      <defs>
        <linearGradient
          id="b"
          x1="109"
          y1="116.5"
          x2="144.5"
          y2="160.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="c"
          x1="121"
          y1="54"
          x2="120.799"
          y2="106.875"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  ),
);

NextJsIcon.displayName = "NextJsIcon";
