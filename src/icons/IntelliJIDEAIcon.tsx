import React from "react";
import { SVGIconProps } from "../types";

export const IntelliJIDEAIcon = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ size = 24, theme, isDark, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width={size}
      height={size}
      ref={ref}
      {...props}
    >
      <defs>
        <linearGradient
          x1="37%"
          y1="51%"
          x2="178.1%"
          y2="41.9%"
          id="icon_j3w0gy2_a"
        >
          <stop stopColor="#FC801D" offset="9%" />
          <stop stopColor="#B07F61" offset="23%" />
          <stop stopColor="#577DB3" offset="41%" />
          <stop stopColor="#1E7CE6" offset="53%" />
          <stop stopColor="#087CFA" offset="59%" />
        </linearGradient>
        <linearGradient
          x1="73.6%"
          y1="114.8%"
          x2="35.6%"
          y2="1.1%"
          id="icon_j3w0gy2_b"
        >
          <stop stopColor="#FE2857" offset="0%" />
          <stop stopColor="#CB3979" offset="8%" />
          <stop stopColor="#9E4997" offset="16%" />
          <stop stopColor="#7557B2" offset="25%" />
          <stop stopColor="#5362C8" offset="34%" />
          <stop stopColor="#386CDA" offset="44%" />
          <stop stopColor="#2373E8" offset="54%" />
          <stop stopColor="#1478F2" offset="66%" />
          <stop stopColor="#0B7BF8" offset="79%" />
          <stop stopColor="#087CFA" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="28.6%"
          y1="23.6%"
          x2="81.8%"
          y2="129.8%"
          id="icon_j3w0gy2_c"
        >
          <stop stopColor="#FE2857" offset="0%" />
          <stop stopColor="#FE295F" offset="8%" />
          <stop stopColor="#FF2D76" offset="21%" />
          <stop stopColor="#FF318C" offset="30%" />
          <stop stopColor="#EA3896" offset="38%" />
          <stop stopColor="#B248AE" offset="55%" />
          <stop stopColor="#5A63D6" offset="79%" />
          <stop stopColor="#087CFA" offset="100%" />
        </linearGradient>
      </defs>
      <path
        fill="url(#icon_j3w0gy2_a)"
        d="M40.5 180.6 2.9 150.8l22.1-41 33.3 11.1z"
      />
      <path fill="#087CFA" d="m256 68.2-4.6 148.3-98.6 39.5-53.7-34.7z" />
      <path
        fill="url(#icon_j3w0gy2_b)"
        d="m256 68.2-48.8 47.6L144.5 39l31-34.8z"
      />
      <path
        fill="url(#icon_j3w0gy2_c)"
        d="m99.1 221.3-78.5 28.4 16.5-57.5 21.2-71.3L0 101.4 37.1 0l83.8 9.9 86.3 105.9z"
      />
      <path d="M49.1 48h160v160h-160z" />
      <path
        d="M69 177.8h60v10H69v-10ZM99 79V68H69.2v11h8.4v37.7h-8.4v11H99v-11h-8.3V79H99Zm28.5 49.4.2.1c-4.1.2-8.1-.8-11.8-2.6a27 27 0 0 1-7.7-6.3l8.2-9.2c1.5 1.7 3.2 3.1 5.2 4.3 1.7 1.1 3.7 1.7 5.7 1.6 2.2.2 4.3-.7 5.8-2.3a11 11 0 0 0 2.2-7.5V68h13.3v39a27 27 0 0 1-1.5 9.4c-1.7 5-5.7 9-10.8 10.6-2.8 1-5.8 1.5-8.8 1.4Z"
        fill="#FFF"
      />
    </svg>
  ),
);

IntelliJIDEAIcon.displayName = "IntelliJIDEAIcon";
