import React from "react";
import { SVGIconProps } from "../types";

export const AlacrittyIcon = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ size = 24, theme, isDark, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      ref={ref}
      {...props}
    >
      <defs>
        <linearGradient
          id="icon_0lf5r3z_a"
          x1=".025"
          y1=".079"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(90 177.831 370.053)scale(473.895)"
        >
          <stop offset="0" style={{ stopColor: "#ec2802", stopOpacity: "1" }} />
          <stop offset="1" style={{ stopColor: "#fcb200", stopOpacity: "1" }} />
        </linearGradient>
        <linearGradient
          xlinkHref="#icon_0lf5r3z_a"
          id="icon_0lf5r3z_b"
          x1="19.063"
          y1="0"
          x2="19"
          y2="43.25"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1.40188 0 0 1.34821 21.364 -32.96)"
        />
        <clipPath clipPathUnits="userSpaceOnUse" id="icon_0lf5r3z_c">
          <path
            d="M14.813 26.75 19 15.945l4.187 10.805L19 43.25Z"
            style={{
              fill: "none",
              stroke: "#000",
              strokeWidth: ".03779528",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeMiterlimit: "1.41420996",
              strokeDasharray: "none",
              strokeOpacity: "1",
            }}
          />
        </clipPath>
        <filter
          id="icon_0lf5r3z_d"
          x="-.096"
          width="1.192"
          y="-.074"
          height="1.148"
        >
          <feGaussianBlur stdDeviation="1.002" />
        </filter>
      </defs>
      <g>
        <path
          d="m43.566 2.972-1.39 3.37C45.912 17.854 45.912 17.854 48 27.896c2.087-10.042 2.087-10.042 5.825-21.552l-1.391-3.37L48-7.772Z"
          style={{
            clipRule: "evenodd",
            fill: "#069efe",
            fillOpacity: "1",
            fillRule: "evenodd",
            stroke: "none",
            strokeWidth: ".26960364",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: "1.41420996",
            strokeDasharray: "none",
            strokeOpacity: ".4330357",
            paintOrder: "stroke markers fill",
          }}
          transform="translate(-16 35.82)"
        />
        <path
          d="M43.093-32.96h9.814l21.729 53.928h-9.112L48-20.221 30.476 20.968h-9.112z"
          style={{
            clipRule: "evenodd",
            fill: "url(#icon_0lf5r3z_b)",
            fillOpacity: "1",
            fillRule: "evenodd",
            stroke: "url(#linearGradient10962)",
            strokeWidth: "0",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: "1.41420996",
            strokeDasharray: "none",
            strokeOpacity: "1",
          }}
          transform="translate(-16 35.82)"
        />
        <path
          transform="matrix(1.3912 0 0 1.33794 5.567 6.716)"
          clipPath="url(#icon_0lf5r3z_c)"
          style={{
            clipRule: "evenodd",
            fill: "#fff",
            fillOpacity: "1",
            fillRule: "evenodd",
            stroke: "none",
            strokeWidth: "0",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "0",
            strokeDasharray: "none",
            strokeDashoffset: "0",
            strokeOpacity: "1",
            paintOrder: "markers fill stroke",
            filter: "url(#icon_0lf5r3z_d)",
          }}
          d="M19 32.395 31.5 0 6.5.133Z"
        />
      </g>
    </svg>
  ),
);

AlacrittyIcon.displayName = "AlacrittyIcon";
