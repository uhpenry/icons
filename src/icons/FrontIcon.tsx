import React from "react";
import { SVGIconProps } from "../types";

export const FrontIcon = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ size = 24, theme, isDark, ...props }, ref) => (
    <svg
      viewBox="0 0 950 950"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      ref={ref}
      {...props}
    >
      <circle cx="475" cy="475" r="425" fill="white" />
      <path
        d="M308 308.2C308 262.25 345.25 225 391.2 225H658V343.4C658 366.375 639.375 385 616.4 385H508C485.909 385 468 402.909 468 425V683.4C468 706.375 449.375 725 426.4 725H308V308.2Z"
        fill="#001B38"
      />
      <circle
        cx="509"
        cy="426"
        r="108"
        transform="rotate(90 509 426)"
        fill="url(#icon_p17ejr1_paint0_linear)"
      />
      <circle
        opacity="0.5"
        cx="509"
        cy="426"
        r="108"
        transform="rotate(90 509 426)"
        fill="url(#icon_p17ejr1_paint1_linear)"
      />
      <defs>
        <linearGradient
          id="icon_p17ejr1_paint0_linear"
          x1="428.041"
          y1="502.06"
          x2="591.574"
          y2="339.649"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF0057" stopOpacity="0.16" />
          <stop offset="0.861354" stopColor="#FF0057" />
        </linearGradient>
        <linearGradient
          id="icon_p17ejr1_paint1_linear"
          x1="428.041"
          y1="502.06"
          x2="591.574"
          y2="339.649"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF0057" stopOpacity="0.16" />
          <stop offset="0.861354" stopColor="#FF0057" />
        </linearGradient>
      </defs>
    </svg>
  ),
);

FrontIcon.displayName = "FrontIcon";
