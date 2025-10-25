import React from "react";
import { SVGIconProps } from "../types";

export const TodoistIcon = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ size = 24, theme, isDark, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 152 152"
      width={size}
      height={size}
      ref={ref}
      {...props}
    >
      <path
        style={{
          stroke: "none",
          strokeWidth: "1",
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeDashoffset: "0",
          strokeLinejoin: "miter",
          strokeMiterlimit: "4",
          fill: "rgb(228,67,50)",
          fillRule: "nonzero",
          opacity: "1",
        }}
        transform="matrix(1 0 0 1 76.4 76.15)  translate(-102.2, -325.95)"
        d="M 45.4 250.3 c -10.4 0 -18.9 8.5 -18.9 18.9 v 113.5 c 0 10.4 8.5 18.9 18.9 18.9 H 159 c 10.4 0 18.9 -8.5 18.9 -18.9 V 269.3 c 0 -10.4 -8.5 -18.9 -18.9 -18.9 H 45.4 z"
        strokeLinecap="round"
        id="icon_srnwgy7_layer"
      />
      <path
        style={{
          stroke: "none",
          strokeWidth: "1",
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeDashoffset: "0",
          strokeLinejoin: "miter",
          strokeMiterlimit: "4",
          fill: "rgb(255,255,255)",
          fillRule: "nonzero",
          opacity: "1",
        }}
        transform="matrix(1 0 0 1 47.55 76.21)  translate(-73.35, -326.01)"
        d="M 58.6 322 l 60.8 -35.4 c 1.3 -0.8 1.4 -3.1 -0.1 -3.9 c -1.5 -0.8 -4.2 -2.4 -5.3 -3 c -1.5 -0.8 -3.2 -0.8 -4.7 0.1 c -0.7 0.4 -49.3 28.7 -51 29.6 c -1.9 1.1 -4.4 1.1 -6.3 0 l -25.7 -15.1 v 12.8 c 6.2 3.7 21.8 12.8 25.6 15 C 54.2 323.3 56.4 323.3 58.6 322 M 58.6 346.2 l 60.8 -35.4 c 1.3 -0.8 1.4 -3.1 -0.1 -3.9 c -1.5 -0.8 -4.2 -2.4 -5.3 -3 c -1.5 -0.8 -3.2 -0.8 -4.7 0.1 c -0.7 0.4 -49.3 28.7 -51 29.6 c -1.9 1.1 -4.4 1.1 -6.3 0 l -25.7 -15.1 v 12.8 c 6.2 3.7 21.8 12.8 25.6 15 C 54.2 347.5 56.4 347.5 58.6 346.2 M 58.6 372 l 60.8 -35.4 c 1.3 -0.8 1.4 -3.1 -0.1 -3.9 c -1.5 -0.8 -4.2 -2.4 -5.3 -3 c -1.5 -0.8 -3.2 -0.8 -4.7 0.1 c -0.7 0.4 -49.3 28.7 -51 29.6 c -1.9 1.1 -4.4 1.1 -6.3 0 l -25.7 -15.1 V 357 c 6.2 3.7 21.8 12.8 25.6 15 C 54.2 373.2 56.4 373.2 58.6 372"
        strokeLinecap="round"
        id="icon_srnwgy7_layer"
      />
    </svg>
  ),
);

TodoistIcon.displayName = "TodoistIcon";
