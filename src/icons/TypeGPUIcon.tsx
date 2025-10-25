import React from "react";
import { SVGIconProps } from "../types";

export const TypeGPUIcon = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ size = 24, theme, isDark, ...props }, ref) => {
    const useDark = theme === "dark" || isDark;
    return useDark ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 166 166"
        fill="none"
        width={size}
        height={size}
        ref={ref}
        {...props}
      >
        <path
          fill="url(#icon_j4bsksm_a)"
          d="M70.1 78 47.2 59.2 28 84c-2 2.6-2.5 6-1.2 9.1L45 139.3c1.5 3.8 5 6.5 9 7l60.8 7.7-9.9-24.4c-9.4-21.4-18.5-38-34.8-51.6Z"
        />
        <path
          fill="url(#icon_j4bsksm_b)"
          d="M142.4 103.8 124 56.6a9.3 9.3 0 0 0-8-6l-51-4c-6.7-.4-8.8-4-9.5-5.9l-.3-1L45.3 3l-7.1 16.6a11 11 0 0 0 3 12.7L57 46l14.6 12c20.5 16.8 34 40.4 38.3 66.5l4.8 29.4 26.7-41.8a9.3 9.3 0 0 0 .9-8.4Z"
        />
        <defs>
          <linearGradient
            id="icon_j4bsksm_a"
            x1="-4.3"
            x2="199.3"
            y1="-95.8"
            y2="225.6"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".3" stopColor="#D48DFF" />
            <stop offset=".6" stopColor="#7272FF" />
            <stop offset=".7" stopColor="#0059DF" />
          </linearGradient>
          <linearGradient
            id="icon_j4bsksm_b"
            x1="45.6"
            x2="161.9"
            y1="-25.2"
            y2="196.7"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".3" stopColor="#D48DFF" />
            <stop offset=".5" stopColor="#5259EE" />
            <stop offset=".8" stopColor="#1E2FB6" />
          </linearGradient>
        </defs>
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 166 166"
        fill="none"
        width={size}
        height={size}
        ref={ref}
        {...props}
      >
        <path
          fill="url(#icon_1hmupjn_a)"
          d="M70.1 79 47.2 60.2 28 85c-2 2.6-2.5 6-1.2 9.1L45 140.3c1.5 3.8 5 6.5 9 7l60.8 7.7-9.9-24.4c-9.4-21.4-18.5-38-34.8-51.6Z"
        />
        <path
          fill="url(#icon_1hmupjn_b)"
          d="M142.4 104.8 124 57.6a9.3 9.3 0 0 0-8-6l-51-4c-6.7-.4-8.8-4-9.5-5.9l-.3-1L45.3 4l-7.1 16.6a11 11 0 0 0 3 12.7L57 47l14.6 12c20.5 16.8 34 40.4 38.3 66.5l4.8 29.4 26.7-41.8a9.3 9.3 0 0 0 .9-8.4Z"
        />
        <defs>
          <linearGradient
            id="icon_1hmupjn_a"
            x1="-4.3"
            x2="199.3"
            y1="-94.8"
            y2="226.6"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".4" stopColor="#D48DFF" />
            <stop offset=".6" stopColor="#6C80FF" />
            <stop offset=".9" stopColor="#0059DF" />
          </linearGradient>
          <linearGradient
            id="icon_1hmupjn_b"
            x1="45.6"
            x2="161.9"
            y1="-24.2"
            y2="197.7"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".3" stopColor="#D48DFF" />
            <stop offset=".8" stopColor="#273DE6" />
          </linearGradient>
        </defs>
      </svg>
    );
  },
);

TypeGPUIcon.displayName = "TypeGPUIcon";
