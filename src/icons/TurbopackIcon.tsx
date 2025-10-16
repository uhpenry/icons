import React from "react";
import { SVGIconProps } from "../types";

export const TurbopackIcon = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ size = 24, theme, isDark, ...props }, ref) => {
    const useDark = theme === "dark" || isDark;
    return useDark ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 100 100"
        width={size}
        height={size}
        ref={ref}
        {...props}
      >
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M38.687 36.698c-1.131 0-2.048.917-2.048 2.048V61.52c0 1.131.917 2.048 2.048 2.048H61.46c1.13 0 2.048-.917 2.048-2.048V38.746c0-1.13-.917-2.048-2.048-2.048H38.687ZM22.259 20.443c-1.036 0-1.876.84-1.876 1.875v55.63c0 1.036.84 1.876 1.876 1.876h55.63c1.036 0 1.875-.84 1.875-1.876v-55.63c0-1.036-.84-1.875-1.875-1.875h-55.63Z"
          clipRule="evenodd"
        />
        <path
          fill="url(#icon_tdxauwd_a)"
          d="M0 51.064v36.17c0 2.427.677 4.696 1.853 6.627l13.04-13.04V51.064H0Z"
        />
        <path
          fill="url(#icon_tdxauwd_b)"
          d="m5.946 98.028 12.93-12.93c.09.005.181.008.273.008H47.64V100H12.766c-2.508 0-4.847-.723-6.82-1.972Z"
        />
        <path
          fill="url(#icon_tdxauwd_c)"
          d="M53.481 100h33.753C94.284 100 100 94.284 100 87.234V12.766C100 5.716 94.284 0 87.234 0h-36.17v14.894H80.85a4.255 4.255 0 0 1 4.255 4.255V80.85a4.255 4.255 0 0 1-4.255 4.255h-27.37V100Z"
        />
        <defs>
          <linearGradient
            id="icon_tdxauwd_a"
            x1="54.917"
            x2="5.699"
            y1="7.031"
            y2="55.915"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0096FF" />
            <stop offset="1" stopColor="#FF1E56" />
          </linearGradient>
          <linearGradient
            id="icon_tdxauwd_b"
            x1="54.917"
            x2="5.699"
            y1="7.031"
            y2="55.915"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0096FF" />
            <stop offset="1" stopColor="#FF1E56" />
          </linearGradient>
          <linearGradient
            id="icon_tdxauwd_c"
            x1="54.917"
            x2="5.699"
            y1="7.031"
            y2="55.915"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0096FF" />
            <stop offset="1" stopColor="#FF1E56" />
          </linearGradient>
        </defs>
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 100 100"
        width={size}
        height={size}
        ref={ref}
        {...props}
      >
        <path
          fill="#000"
          fillRule="evenodd"
          d="M38.687 36.698c-1.131 0-2.048.917-2.048 2.048V61.52c0 1.131.917 2.048 2.048 2.048H61.46c1.13 0 2.048-.917 2.048-2.048V38.746c0-1.13-.917-2.048-2.048-2.048H38.687ZM22.259 20.443c-1.036 0-1.876.84-1.876 1.875v55.63c0 1.036.84 1.876 1.876 1.876h55.63c1.036 0 1.875-.84 1.875-1.876v-55.63c0-1.036-.84-1.875-1.875-1.875h-55.63Z"
          clipRule="evenodd"
        />
        <path
          fill="url(#icon_i8k2rle_a)"
          d="M0 51.064v36.17c0 2.427.677 4.696 1.853 6.627l13.04-13.04V51.064H0Z"
        />
        <path
          fill="url(#icon_i8k2rle_b)"
          d="m5.946 98.028 12.93-12.93c.09.005.181.008.273.008H47.64V100H12.766c-2.508 0-4.847-.723-6.82-1.972Z"
        />
        <path
          fill="url(#icon_i8k2rle_c)"
          d="M53.481 100h33.753C94.284 100 100 94.284 100 87.234V12.766C100 5.716 94.284 0 87.234 0h-36.17v14.894H80.85a4.255 4.255 0 0 1 4.255 4.255V80.85a4.255 4.255 0 0 1-4.255 4.255h-27.37V100Z"
        />
        <defs>
          <linearGradient
            id="icon_i8k2rle_a"
            x1="54.917"
            x2="5.699"
            y1="7.031"
            y2="55.915"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0096FF" />
            <stop offset="1" stopColor="#FF1E56" />
          </linearGradient>
          <linearGradient
            id="icon_i8k2rle_b"
            x1="54.917"
            x2="5.699"
            y1="7.031"
            y2="55.915"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0096FF" />
            <stop offset="1" stopColor="#FF1E56" />
          </linearGradient>
          <linearGradient
            id="icon_i8k2rle_c"
            x1="54.917"
            x2="5.699"
            y1="7.031"
            y2="55.915"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0096FF" />
            <stop offset="1" stopColor="#FF1E56" />
          </linearGradient>
        </defs>
      </svg>
    );
  },
);

TurbopackIcon.displayName = "TurbopackIcon";
