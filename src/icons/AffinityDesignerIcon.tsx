import React from "react";
import { SVGIconProps } from "../types";

export const AffinityDesignerIcon = React.forwardRef<
  SVGSVGElement,
  SVGIconProps
>(({ size = 24, theme, isDark, ...props }, ref) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1024 1024"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <path
      fill="#134881"
      d="M1024 100c0-55.192-44.808-100-100-100H100C44.808 0 0 44.808 0 100v824c0 55.192 44.808 100 100 100h824c55.192 0 100-44.808 100-100z"
    />
    <path
      fill="url(#icon_zzhe1il_a)"
      d="M2477 909.311c-.17 21.934-18.03 39.689-40 39.689h-403.69l-172.55-298.876H2477zM1603 909V733.513L1983.19 75h148.58l-321.19 556.33L1993.98 949H1643c-22.08 0-40-17.923-40-40m487.17-292.956h-150.22c-16.77 0-32.27-8.8-40.65-23.327-8.38-14.502-8.38-32.433 0-46.935l75.15-130.17zM2437 75c21.97 0 39.83 17.755 40 39.689v501.355h-347.48l-135.41-234.495L2171.1 75z"
      transform="translate(-1528)"
    />
    <defs>
      <radialGradient
        id="icon_zzhe1il_a"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="translate(2271.03 -89.26)scale(1038.26)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#6be1fb" />
        <stop offset="1" stopColor="#38bdfa" />
      </radialGradient>
    </defs>
  </svg>
));

AffinityDesignerIcon.displayName = "AffinityDesignerIcon";
