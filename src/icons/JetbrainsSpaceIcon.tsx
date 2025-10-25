import React from "react";
import { SVGIconProps } from "../types";

export const JetbrainsSpaceIcon = React.forwardRef<SVGSVGElement, SVGIconProps>(
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
        <linearGradient
          id="icon_xzgyu3o_a"
          x1="45.082%"
          x2="55.522%"
          y1="-1.343%"
          y2="97.61%"
        >
          <stop offset="0%" stopColor="#FCF84A" />
          <stop offset="32%" stopColor="#ABE682" />
          <stop offset="79%" stopColor="#36CDD2" />
          <stop offset="100%" stopColor="#07C3F2" />
        </linearGradient>
        <linearGradient
          id="icon_xzgyu3o_b"
          x1="-2.942%"
          x2="100.445%"
          y1="38.992%"
          y2="62.105%"
        >
          <stop offset="0%" stopColor="#3BEA62" />
          <stop offset="100%" stopColor="#087CFA" />
        </linearGradient>
        <linearGradient
          id="icon_xzgyu3o_c"
          x1="-3.308%"
          x2="111.745%"
          y1="71.807%"
          y2="15.462%"
        >
          <stop offset="0%" stopColor="#009AE5" />
          <stop offset="18%" stopColor="#0490DD" />
          <stop offset="49%" stopColor="#1073C6" />
          <stop offset="89%" stopColor="#2346A1" />
          <stop offset="100%" stopColor="#293896" />
        </linearGradient>
      </defs>
      <path
        fill="url(#icon_xzgyu3o_a)"
        d="M46.36 255.991c91.075-7.978 170.982-63.92 209.64-146.768C208.12 40.799 129.873.033 46.36 0c-7.44 0-14.915.33-22.424.99C-14.676 83.893-6.128 181.099 46.36 255.99Z"
      />
      <path
        fill="url(#icon_xzgyu3o_b)"
        d="M24.209 1.024a301.387 301.387 0 0 1 134.685 108.199H256C208.263 40.76 130.062-.03 46.6 0c-7.441 0-14.905.341-22.391 1.024Z"
      />
      <path
        fill="url(#icon_xzgyu3o_c)"
        d="M158.894 109.223C147.187 186.6 46.258 255.99 46.258 255.99c91.781-8.67 172.23-63.622 209.742-146.768h-97.106Z"
      />
    </svg>
  ),
);

JetbrainsSpaceIcon.displayName = "JetbrainsSpaceIcon";
