import React from "react";
import { SVGIconProps } from "../types";

export const SvglIcon = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ size = 24, theme, isDark, ...props }, ref) => (
    <svg
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      ref={ref}
      {...props}
    >
      <rect
        id="icon_erfg7ii_«r3b»"
        width="512"
        height="512"
        x="0"
        y="0"
        rx="128"
        fill="url(#icon_erfg7ii_«r3c»)"
        stroke="#FFFFFF"
        strokeWidth="0"
        paintOrder="stroke"
      />
      <defs>
        <radialGradient
          id="icon_erfg7ii_«r3c»"
          cx="50%"
          cy="50%"
          r="100%"
          fx="50%"
          fy="0%"
          gradientUnits="objectBoundingBox"
        >
          <stop stopColor="#232323" />
          <stop offset="1" stopColor="#000000" />
        </radialGradient>
      </defs>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="360"
        height="360"
        fill="#fffafa"
        viewBox="0 0 256 256"
        x="76"
        y="76"
        alignmentBaseline="middle"
        style={{ color: "rgb(230, 230, 230)" }}
      >
        <path d="M168,36H88A52.06,52.06,0,0,0,36,88v80a52.06,52.06,0,0,0,52,52h48a3.83,3.83,0,0,0,1.26-.21c25.46-8.48,74.05-57.07,82.53-82.53A3.83,3.83,0,0,0,220,136V88A52.06,52.06,0,0,0,168,36ZM44,168V88A44.05,44.05,0,0,1,88,44h80a44.05,44.05,0,0,1,44,44v44H184a52.06,52.06,0,0,0-52,52v28H88A44.05,44.05,0,0,1,44,168Zm96,42V184a44.05,44.05,0,0,1,44-44h26C198.9,162.23,162.23,198.9,140,210Z" />
      </svg>
    </svg>
  ),
);

SvglIcon.displayName = "SvglIcon";
