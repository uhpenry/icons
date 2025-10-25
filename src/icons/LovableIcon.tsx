import React from "react";
import { SVGIconProps } from "../types";

export const LovableIcon = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ size = 24, theme, isDark, ...props }, ref) => (
    <svg
      viewBox="0 0 121 122"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={size}
      height={size}
      ref={ref}
      {...props}
    >
      <mask
        id="icon_7y1v3tm_b"
        width="121"
        height="122"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path
          fill="url(#icon_7y1v3tm_a)"
          fillRule="evenodd"
          d="M36.069 0c19.92 0 36.068 16.155 36.068 36.084v13.713h12.004c19.92 0 36.069 16.156 36.069 36.084 0 19.928-16.149 36.083-36.069 36.083H0v-85.88C0 16.155 16.148 0 36.069 0Z"
          clipRule="evenodd"
        />
      </mask>
      <g mask="url(#icon_7y1v3tm_b)">
        <g filter="url(#icon_7y1v3tm_c)">
          <ellipse
            cx="52.738"
            cy="65.101"
            fill="#4B73FF"
            rx="81.373"
            ry="81.192"
          />
        </g>
        <g filter="url(#icon_7y1v3tm_d)">
          <ellipse
            cx="61.673"
            cy="20.547"
            fill="#FF66F4"
            rx="104.216"
            ry="81.192"
          />
        </g>
        <g filter="url(#icon_7y1v3tm_e)">
          <ellipse
            cx="78.666"
            cy="5.268"
            fill="#FF0105"
            rx="81.373"
            ry="71.304"
          />
        </g>
        <g filter="url(#icon_7y1v3tm_f)">
          <ellipse
            cx="63.121"
            cy="20.527"
            fill="#FE7B02"
            rx="48.937"
            ry="48.829"
          />
        </g>
      </g>
      <defs>
        <filter
          id="icon_7y1v3tm_c"
          width="235.52"
          height="235.159"
          x="-65.022"
          y="-52.478"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_572_319"
            stdDeviation="18.194"
          />
        </filter>
        <filter
          id="icon_7y1v3tm_d"
          width="281.208"
          height="235.159"
          x="-78.93"
          y="-97.032"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_572_319"
            stdDeviation="18.194"
          />
        </filter>
        <filter
          id="icon_7y1v3tm_e"
          width="235.52"
          height="215.383"
          x="-39.094"
          y="-102.423"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_572_319"
            stdDeviation="18.194"
          />
        </filter>
        <filter
          id="icon_7y1v3tm_f"
          width="170.649"
          height="170.432"
          x="-22.204"
          y="-64.688"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_572_319"
            stdDeviation="18.194"
          />
        </filter>
        <linearGradient
          id="icon_7y1v3tm_a"
          x1="40.453"
          x2="76.933"
          y1="21.433"
          y2="121.971"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".025" stopColor="#FF8E63" />
          <stop offset=".56" stopColor="#FF7EB0" />
          <stop offset=".95" stopColor="#4B73FF" />
        </linearGradient>
      </defs>
    </svg>
  ),
);

LovableIcon.displayName = "LovableIcon";
