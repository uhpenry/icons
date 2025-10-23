import React from "react";
import { SVGIconProps } from "../types";

export const JetBrainsRiderIcon = React.forwardRef<SVGSVGElement, SVGIconProps>(
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
          x1="90.8%"
          y1="81.8%"
          x2="-19.1%"
          y2="19%"
          id="icon_avgz5te_a"
        >
          <stop stopColor="#DD1265" offset="0%" />
          <stop stopColor="#DD1265" offset="48%" />
          <stop stopColor="#FDB60D" offset="94%" />
        </linearGradient>
        <linearGradient
          x1="36%"
          y1="7.3%"
          x2="53.7%"
          y2="93%"
          id="icon_avgz5te_b"
        >
          <stop stopColor="#087CFA" offset="14%" />
          <stop stopColor="#DD1265" offset="48%" />
          <stop stopColor="#087CFA" offset="96%" />
        </linearGradient>
        <linearGradient
          x1="39.5%"
          y1="11.4%"
          x2="56.9%"
          y2="91.7%"
          id="icon_avgz5te_c"
        >
          <stop stopColor="#DD1265" offset="28%" />
          <stop stopColor="#FDB60D" offset="97%" />
        </linearGradient>
      </defs>
      <path
        fill="url(#icon_avgz5te_a)"
        d="M256 99.6 76.5 0l120.2 178.5 24.7-16.2z"
      />
      <path
        fill="url(#icon_avgz5te_b)"
        d="M184.4 59 161.9 4l-49.7 49 20.3 177.6 48.2 25.4 75.3-44z"
      />
      <path
        fill="url(#icon_avgz5te_c)"
        d="M76.5 0 0 51.5l28.5 175.9 73.3 28.2 94.9-77.1z"
      />
      <path d="M48 48.3h160v160H48z" />
      <path
        d="M68 178h60v10H68v-10Zm0-109.9h27.5a24 24 0 0 1 17.5 6.1c3.3 3.5 5.2 8.2 5.2 13v1c.4 8.4-5 16-13 18.6l14.8 21.5h-15.5L91.6 109H81.3v19.3H68V68Zm26.7 29.3c6.2 0 9.9-3.2 10.1-8v-.6c0-5.7-4-8.6-10.4-8.6h-13v17.2h13.3ZM129 68.1h23.5c18.6 0 31.6 12.6 32 29.1v1c0 17-13 30-32 30h-23.5v-60Zm13.4 12v36.2h10.2A17.1 17.1 0 0 0 171 99.1v-1a17.3 17.3 0 0 0-18.2-18h-10.2Z"
        fill="#FFF"
      />
    </svg>
  ),
);

JetBrainsRiderIcon.displayName = "JetBrainsRiderIcon";
