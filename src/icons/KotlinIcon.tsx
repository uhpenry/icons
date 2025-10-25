import React from "react";
import { SVGIconProps } from "../types";

export const KotlinIcon = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ size = 24, theme, isDark, ...props }, ref) => (
    <svg
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      ref={ref}
      {...props}
    >
      <defs>
        <linearGradient
          x1="99.991%"
          y1="-.011%"
          x2=".01%"
          y2="100.01%"
          id="icon_bzv7hl6_a"
        >
          <stop stopColor="#E44857" offset=".344%" />
          <stop stopColor="#C711E1" offset="46.89%" />
          <stop stopColor="#7F52FF" offset="100%" />
        </linearGradient>
      </defs>
      <path fill="url(#icon_bzv7hl6_a)" d="M256 256H0V0h256L128 127.949z" />
    </svg>
  ),
);

KotlinIcon.displayName = "KotlinIcon";
