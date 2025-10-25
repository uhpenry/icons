import React from "react";
import { SVGIconProps } from "../types";

export const AlgorandIcon = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ size = 24, theme, isDark, ...props }, ref) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      ref={ref}
      {...props}
    >
      <defs>
        <linearGradient
          id="icon_p976oul_d"
          x1="16"
          x2="16"
          y1="0"
          y2="30"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#FFF" stopOpacity=".5" />
          <stop offset="100%" stopOpacity=".5" />
        </linearGradient>
        <filter
          id="icon_p976oul_b"
          width="1.08"
          height="1.097"
          x="-.04"
          y="-.04"
          filterUnits="objectBoundingBox"
        >
          <feOffset dy=".5" in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
            stdDeviation=".5"
          />
          <feComposite
            in="shadowBlurOuter1"
            in2="SourceAlpha"
            operator="out"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            in="shadowBlurOuter1"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"
          />
        </filter>
        <circle id="icon_p976oul_a" cx="16" cy="15" r="15" />
      </defs>
      <use
        xlinkHref="#icon_p976oul_a"
        filter="url(#icon_p976oul_b)"
        style={{ fillRule: "evenodd" }}
      />
      <use
        xlinkHref="#icon_p976oul_a"
        fill="#627eea"
        style={{ fill: "#e5e5e5", fillOpacity: "1", fillRule: "evenodd" }}
      />
      <use
        xlinkHref="#icon_p976oul_a"
        fill="url(#icon_p976oul_d)"
        style={{ fill: "url(#icon_p976oul_d)", fillRule: "evenodd" }}
      />
      <circle
        cx="16"
        cy="15"
        r="14.5"
        stroke="#000"
        strokeOpacity=".097"
        style={{ fill: "none", fillRule: "evenodd" }}
      />
      <path
        d="m10.332 23 7.221-12.602.991 3.257L13.022 23h2.832l3.54-6.088L20.95 23h2.55l-2.407-9.062 1.699-2.973h-2.549L19.253 7h-2.408L7.5 23Z"
        style={{
          fill: "#000",
          fillOpacity: "1",
          stroke: "none",
          strokeWidth: ".141594",
          strokeOpacity: "1",
        }}
      />
    </svg>
  ),
);

AlgorandIcon.displayName = "AlgorandIcon";
