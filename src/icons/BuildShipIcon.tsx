import React from "react";
import { SVGIconProps } from "../types";

export const BuildShipIcon = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ size = 24, ...props }, ref) => (
    <svg
      viewBox="0 0 44 44"
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
        d="M18 12C18 8.13401 21.134 5 25 5C28.866 5 32 8.13401 32 12C32 15.866 28.866 19 25 19V15C26.6569 15 28 13.6569 28 12C28 10.3431 26.6569 9 25 9C23.3431 9 22 10.3431 22 12H18Z"
        fill="url(#a)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 12C32 15.866 28.866 19 25 19H22V15H25C26.6569 15 28 13.6569 28 12H32Z"
        fill="url(#b)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25 5C28.866 5 32 8.13401 32 12H28C28 10.3431 26.6569 9 25 9V5Z"
        fill="url(#c)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25 9C23.3431 9 22 10.3431 22 12H18C18 8.13401 21.134 5 25 5V9Z"
        fill="url(#d)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 22C8 18.134 11.134 15 15 15H18V19H15C13.3431 19 12 20.3431 12 22H8Z"
        fill="url(#e)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 32C18 35.866 21.134 39 25 39C28.866 39 32 35.866 32 32H28C28 33.6569 26.6569 35 25 35C23.3431 35 22 33.6569 22 32H18Z"
        fill="url(#f)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 12L22 32L18 32L18 12L22 12Z"
        fill="url(#g)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 32C32 28.134 28.866 25 25 25H20V29H25C26.6569 29 28 30.3431 28 32H32Z"
        fill="url(#h)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 22C8 25.866 11.134 29 15 29H20V25H15C13.3431 25 12 23.6569 12 22H8Z"
        fill="url(#i)"
      />
      <defs>
        <linearGradient
          id="a"
          x1="21.1111"
          y1="15.8889"
          x2="29.4444"
          y2="9.22222"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4200FF" />
          <stop offset="0.5" stopColor="#00AAFF" />
          <stop offset="1" stopColor="#00FFAA" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="30"
          y1="12"
          x2="22"
          y2="18"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FD3DF6" />
          <stop offset="1" stopColor="#D478EF" />
        </linearGradient>
        <linearGradient
          id="c"
          x1="25"
          y1="7"
          x2="30.5"
          y2="12"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF69F9" />
          <stop offset="1" stopColor="#FD3DF6" />
        </linearGradient>
        <linearGradient
          id="d"
          x1="22"
          y1="12"
          x2="25"
          y2="9"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8C6CF3" />
          <stop offset="1" stopColor="#FF69F9" />
        </linearGradient>
        <linearGradient
          id="e"
          x1="10"
          y1="22"
          x2="18"
          y2="17"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00D1AC" />
          <stop offset="1" stopColor="#7696D9" />
        </linearGradient>
        <linearGradient
          id="f"
          x1="20"
          y1="32"
          x2="30.5"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1B71EA" />
          <stop offset="1" stopColor="#2C91ED" />
        </linearGradient>
        <linearGradient
          id="g"
          x1="22"
          y1="32"
          x2="22"
          y2="11.7755"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1B71EA" />
          <stop offset="1" stopColor="#8C6CF3" />
        </linearGradient>
        <linearGradient
          id="h"
          x1="23.5"
          y1="26"
          x2="28"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00D1AC" />
          <stop offset="1" stopColor="#2C91ED" />
        </linearGradient>
        <linearGradient
          id="i"
          x1="10"
          y1="22"
          x2="20"
          y2="27"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00D1AC" />
          <stop offset="1" stopColor="#00D1AC" />
        </linearGradient>
      </defs>
    </svg>
  ),
);

BuildShipIcon.displayName = "BuildShipIcon";
