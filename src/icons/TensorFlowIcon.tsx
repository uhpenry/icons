import React from "react";
import { SVGIconProps } from "../types";

export const TensorFlowIcon = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ size = 24, theme, isDark, ...props }, ref) => {
    const useDark = theme === "dark" || isDark;
    return useDark ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 266.79 243.84"
        width={size}
        height={size}
        ref={ref}
        {...props}
      >
        <defs>
          <style>
            {
              ".cls-1{fill:#fff;}.cls-2{clip-path:url(#icon_ocyfqci_clip-path);}.cls-3{clip-path:url(#icon_ocyfqci_clip-path-2);}"
            }
          </style>
          <clipPath id="icon_ocyfqci_clip-path">
            <polygon
              className="cls-1"
              points="200.76 83.27 136.29 46.43 136.29 197.41 162.05 182.45 162.05 139.98 181.5 151.23 181.39 122.18 162.05 111.13 162.05 94.26 200.85 116.68 200.76 83.27"
            />
          </clipPath>
          <clipPath id="icon_ocyfqci_clip-path-2">
            <polygon
              className="cls-1"
              points="66.03 83.27 130.5 46.43 130.5 197.41 104.74 182.45 104.74 94.26 65.94 116.68 66.03 83.27"
            />
          </clipPath>
        </defs>
        <polygon
          className="cls-1"
          points="200.76 83.27 136.29 46.43 136.29 197.41 162.05 182.45 162.05 139.98 181.5 151.23 181.39 122.18 162.05 111.13 162.05 94.26 200.85 116.68 200.76 83.27"
        />
        <g className="cls-2">
          <rect
            className="cls-1"
            x="60.08"
            y="45.88"
            width="158.31"
            height="151.72"
          />
        </g>
        <polygon
          className="cls-1"
          points="66.03 83.27 130.5 46.43 130.5 197.41 104.74 182.45 104.74 94.26 65.94 116.68 66.03 83.27"
        />
        <g className="cls-3">
          <rect
            className="cls-1"
            x="59"
            y="45.88"
            width="158.31"
            height="151.72"
          />
        </g>
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 266.79 269.02"
        width={size}
        height={size}
        ref={ref}
        {...props}
      >
        <defs>
          <style>
            {
              ".cls-1{fill:none;}.cls-2{clip-path:url(#icon_c8f13n5_clip-path);}.cls-3{fill:url(#icon_c8f13n5_linear-gradient);}.cls-4{clip-path:url(#icon_c8f13n5_clip-path-2);}.cls-5{fill:url(#icon_c8f13n5_linear-gradient-2);}"
            }
          </style>
          <clipPath id="icon_c8f13n5_clip-path">
            <polygon
              className="cls-1"
              points="200.76 95.86 136.29 59.02 136.29 210 162.05 195.04 162.05 152.57 181.5 163.82 181.39 134.77 162.05 123.72 162.05 106.85 200.85 129.27 200.76 95.86"
            />
          </clipPath>
          <linearGradient
            id="icon_c8f13n5_linear-gradient"
            x1="60.08"
            y1="134.33"
            x2="218.39"
            y2="134.33"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#ff6f00" />
            <stop offset="1" stopColor="#ffa800" />
          </linearGradient>
          <clipPath id="icon_c8f13n5_clip-path-2">
            <polygon
              className="cls-1"
              points="66.03 95.86 130.5 59.02 130.5 210 104.74 195.04 104.74 106.85 65.94 129.27 66.03 95.86"
            />
          </clipPath>
          <linearGradient
            id="icon_c8f13n5_linear-gradient-2"
            x1="59"
            y1="134.33"
            x2="217.32"
            y2="134.33"
            xlinkHref="#icon_c8f13n5_linear-gradient"
          />
        </defs>
        <g className="cls-2">
          <rect
            className="cls-3"
            x="60.08"
            y="58.47"
            width="158.31"
            height="151.72"
          />
        </g>
        <g className="cls-4">
          <rect
            className="cls-5"
            x="59"
            y="58.47"
            width="158.31"
            height="151.72"
          />
        </g>
      </svg>
    );
  },
);

TensorFlowIcon.displayName = "TensorFlowIcon";
