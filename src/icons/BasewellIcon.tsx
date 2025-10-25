import React from "react";
import { SVGIconProps } from "../types";

export const BasewellIcon = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ size = 24, theme, isDark, ...props }, ref) => (
    <svg
      viewBox="0 0 165 165"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={size}
      height={size}
      ref={ref}
      {...props}
    >
      <path
        fill="#5DE8E8"
        d="M3 108.401c0-21.353 17.31-38.664 38.664-38.664H77.59c22.865 0 41.4 18.536 41.4 41.4 0 22.865-18.535 41.4-41.4 41.4H3v-44.136Z"
      />
      <path
        fill="#2B4FF1"
        d="M46.792 52.664C46.792 31.31 64.102 14 85.456 14h35.928c22.864 0 41.4 18.535 41.4 41.4s-18.536 41.4-41.401 41.4h-74.59V52.664Z"
      />
      <mask
        id="icon_cn41xfd_a"
        width="116"
        height="84"
        x="3"
        y="69"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path
          fill="#5DE8E8"
          d="M3 108.401c0-21.353 17.31-38.664 38.664-38.664H77.59c22.865 0 41.4 18.536 41.4 41.4 0 22.865-18.535 41.4-41.4 41.4H3v-44.136Z"
        />
      </mask>
      <g mask="url(#icon_cn41xfd_a)">
        <path
          fill="#00A5FD"
          d="M46.792 52.664C46.792 31.31 64.102 14 85.456 14h35.928c22.864 0 41.4 18.535 41.4 41.4s-18.536 41.4-41.401 41.4h-74.59V52.664Z"
        />
      </g>
    </svg>
  ),
);

BasewellIcon.displayName = "BasewellIcon";
