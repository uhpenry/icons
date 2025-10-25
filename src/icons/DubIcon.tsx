import React from "react";
import { SVGIconProps } from "../types";

export const DubIcon = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ size = 24, theme, isDark, ...props }, ref) => {
    const useDark = theme === "dark" || isDark;
    return useDark ? (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        ref={ref}
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M32 64c17.673 0 32-14.327 32-32 0-11.844-6.435-22.186-16-27.719V48h-8v-2.14A15.9 15.9 0 0 1 32 48c-8.837 0-16-7.163-16-16s7.163-16 16-16c2.914 0 5.647.78 8 2.14V1.008A32 32 0 0 0 32 0C14.327 0 0 14.327 0 32s14.327 32 32 32"
          fill="#fff"
        />
      </svg>
    ) : (
      <svg
        viewBox="0 0 191 191"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        ref={ref}
        {...props}
      >
        <g clipPath="url(#icon_eny0ry2_clip0_36_30)">
          <path
            d="M191 95.5C191 148.243 148.243 191 95.5 191C42.7568 191 0 148.243 0 95.5C0 42.7568 42.7568 0 95.5 0C148.243 0 191 42.7568 191 95.5Z"
            fill="black"
          />
          <mask
            id="icon_eny0ry2_mask0_36_30"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="191"
            height="191"
          >
            <path
              d="M191 95.5C191 148.243 148.243 191 95.5 191C42.7568 191 0 148.243 0 95.5C0 42.7568 42.7568 0 95.5 0C148.243 0 191 42.7568 191 95.5Z"
              fill="black"
            />
          </mask>
          <g mask="url(#icon_eny0ry2_mask0_36_30)">
            <circle cx="95" cy="100" r="49" fill="white" />
            <path d="M122 -14H144V148H122V-14Z" fill="white" />
          </g>
        </g>
        <defs>
          <clipPath id="icon_eny0ry2_clip0_36_30">
            <rect width="191" height="191" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

DubIcon.displayName = "DubIcon";
