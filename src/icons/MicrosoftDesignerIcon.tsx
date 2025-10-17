import React from "react";
import { SVGIconProps } from "../types";

export const MicrosoftDesignerIcon = React.forwardRef<
  SVGSVGElement,
  SVGIconProps
>(({ size = 24, theme, isDark, ...props }, ref) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 512 512"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g clipPath="url(#icon_4u2q72p_a)">
      <g clipPath="url(#icon_4u2q72p_b)">
        <path
          fill="url(#icon_4u2q72p_c)"
          fillRule="evenodd"
          d="M440 415.811V247.996H240v8c-106.039 0-192 85.961-192 192v32c0 17.673 14.327 32 32 32h160c80.929 0 153.088-37.553 200-96.185Z"
          clipRule="evenodd"
        />
        <path
          fill="url(#icon_4u2q72p_d)"
          fillOpacity=".5"
          fillRule="evenodd"
          d="M440 415.811V247.996H240v8c-106.039 0-192 85.961-192 192v32c0 17.673 14.327 32 32 32h160c80.929 0 153.088-37.553 200-96.185Z"
          clipRule="evenodd"
        />
        <path
          fill="url(#icon_4u2q72p_e)"
          d="M240-.004H80c-17.673 0-32 14.327-32 32v32c0 106.039 85.961 192 192 192h72c70.692 0 128 57.308 128 128 0 13.657-2.139 26.814-6.1 39.155 38.699-44.85 62.1-103.269 62.1-167.155 0-141.385-114.615-256-256-256Z"
        />
        <path
          fill="url(#icon_4u2q72p_f)"
          fillOpacity=".5"
          d="M240-.004H80c-17.673 0-32 14.327-32 32v32c0 106.039 85.961 192 192 192h72c70.692 0 128 57.308 128 128 0 13.657-2.139 26.814-6.1 39.155 38.699-44.85 62.1-103.269 62.1-167.155 0-141.385-114.615-256-256-256Z"
        />
      </g>
    </g>
    <defs>
      <radialGradient
        id="icon_4u2q72p_c"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="rotate(-39.174 769.69 197.887) scale(417.938 512.42)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".045" stopColor="#AD7DFF" />
        <stop offset=".328" stopColor="#6864F6" />
        <stop offset=".571" stopColor="#5750E2" />
        <stop offset=".809" stopColor="#3E36B1" />
        <stop offset="1" stopColor="#261D82" />
      </radialGradient>
      <radialGradient
        id="icon_4u2q72p_d"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="rotate(-160.304 281.777 209.998) scale(481.906)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".706" stopColor="#AC80FF" stopOpacity="0" />
        <stop offset=".921" stopColor="#BD96FF" />
      </radialGradient>
      <radialGradient
        id="icon_4u2q72p_e"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="rotate(38.202 1.73 77.015) scale(570.097 471.102)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFC470" />
        <stop offset=".251" stopColor="#FF835C" />
        <stop offset=".584" stopColor="#F24A9D" />
        <stop offset=".871" stopColor="#B339F0" />
        <stop offset="1" stopColor="#C354FF" />
      </radialGradient>
      <radialGradient
        id="icon_4u2q72p_f"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="matrix(-365.33125 -254.66907 241.84112 -346.92913 231.792 366.661)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".709" stopColor="#FFB357" stopOpacity="0" />
        <stop offset=".942" stopColor="#FFB357" />
      </radialGradient>
      <clipPath id="icon_4u2q72p_a">
        <path fill="#fff" d="M0 0h512v512H0z" />
      </clipPath>
      <clipPath id="icon_4u2q72p_b">
        <path fill="#fff" d="M0 0h512v512H0z" />
      </clipPath>
    </defs>
  </svg>
));

MicrosoftDesignerIcon.displayName = "MicrosoftDesignerIcon";
