import React from "react";
import { SVGIconProps } from "../types";

export const ChromiumIcon = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ size = 24, theme, isDark, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 511.98489 511.98489"
      width={size}
      height={size}
      ref={ref}
      {...props}
    >
      <defs>
        <linearGradient
          xlinkHref="#icon_iwtwgof_a"
          id="icon_iwtwgof_f"
          x1=".46521288"
          x2=".5565635"
          y1="-.67390651"
          y2=".81129867"
          gradientTransform="matrix(231.62575 0 0 231.62472 111.11013 159.99363)"
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient id="icon_iwtwgof_a">
          <stop offset="0" stopColor="#1972e7" />
          <stop offset="1" stopColor="#1969d5" />
        </linearGradient>
        <linearGradient
          xlinkHref="#icon_iwtwgof_b"
          id="icon_iwtwgof_e"
          x1="101.74381"
          x2="101.59915"
          y1="33.726189"
          y2="135.466"
          gradientTransform="matrix(3.7794235 0 0 3.7794067 .00151555 .00377865)"
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          id="icon_iwtwgof_b"
          x2="1"
          gradientTransform="translate(29.399 42.333) scale(61.286)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#afccfb" />
          <stop offset="1" stopColor="#8bb5f8" />
        </linearGradient>
        <linearGradient
          xlinkHref="#icon_iwtwgof_c"
          id="icon_iwtwgof_g"
          x1=".01820255"
          x2="1.7695541"
          y1="-.51170158"
          y2=".4994337"
          gradientTransform="matrix(94.931559 164.42687 -164.4276 94.931137 97.555991 173.61083)"
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          id="icon_iwtwgof_c"
          x2="1"
          gradientTransform="matrix(25.118 43.506 -43.506 25.118 25.812 45.935)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#659cf6" />
          <stop offset="1" stopColor="#4285f4" />
        </linearGradient>
        <linearGradient
          xlinkHref="#icon_iwtwgof_d"
          id="icon_iwtwgof_h"
          x1="67.452377"
          x2="67.733002"
          y1="40.320694"
          y2="95.25"
          gradientTransform="matrix(3.7794235 0 0 3.7794067 .00150043 .00377865)"
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient id="icon_iwtwgof_d">
          <stop offset="0" stopColor="#3680f0" />
          <stop offset="1" stopColor="#2678ec" />
        </linearGradient>
      </defs>
      <path
        fill="url(#icon_iwtwgof_e)"
        d="m255.99319 255.99433 110.85049 63.99671-110.85049 191.99385c141.38068 0 255.9917-114.61051 255.9917-255.99056 0-46.64165-12.53559-90.3316-34.33115-127.99716h-221.6632z"
      />
      <path
        fill="url(#icon_iwtwgof_f)"
        d="M255.99054 0C161.2404 0 78.576848 51.513314 34.31224 128.0274l110.82781 191.96363 110.85049-63.9967V127.99717h221.6632C433.38157 51.501975 350.72936 0 255.99054 0Z"
      />
      <path
        fill="url(#icon_iwtwgof_g)"
        d="M.00151177 255.99433c0 141.38005 114.60723823 255.99056 255.99168823 255.99056l110.85048-191.99386-110.85048-63.9967-110.85049 63.9967L34.314897 128.0274C12.531434 165.68239 0 209.35646 0 255.99056"
      />
      <path
        fill="#fff"
        d="M383.99094 255.99433c0 70.69003-57.30741 127.99717-127.99775 127.99717-70.69034 0-127.99773-57.30714-127.99773-127.99717 0-70.69002 57.30739-127.99716 127.99773-127.99716s127.99775 57.30714 127.99775 127.99716"
      />
      <path
        fill="url(#icon_iwtwgof_h)"
        d="M359.99158 255.99433c0 57.43565-46.56249 103.99794-103.99839 103.99794-57.4359 0-103.9984-46.56229-103.9984-103.99794 0-57.43564 46.5625-103.99793 103.9984-103.99793 57.4359 0 103.99839 46.56229 103.99839 103.99793"
      />
    </svg>
  ),
);

ChromiumIcon.displayName = "ChromiumIcon";
