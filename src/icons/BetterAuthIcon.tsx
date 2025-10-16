import React from "react";
import { SVGIconProps } from "../types";

export const BetterAuthIcon = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ size = 24, theme, isDark, ...props }, ref) => {
    const useDark = theme === "dark" || isDark;
    return useDark ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 500 500"
        width={size}
        height={size}
        ref={ref}
        {...props}
      >
        <path fill="#fff" d="M0 0h500v500H0z" />
        <path
          fill="#000"
          d="M69 121h86.988v259H69zM337.575 121H430v259h-92.425z"
        />
        <path
          fill="#000"
          d="M427.282 121v83.456h-174.52V121zM430 296.544V380H252.762v-83.456z"
        />
        <path fill="#000" d="M252.762 204.455v92.089h-96.774v-92.089z" />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 500 500"
        width={size}
        height={size}
        ref={ref}
        {...props}
      >
        <path fill="#000" d="M0 0h500v500H0z" />
        <path
          fill="#fff"
          d="M69 121h86.988v259H69zM337.575 121H430v259h-92.425z"
        />
        <path
          fill="#fff"
          d="M427.282 121v83.456h-174.52V121zM430 296.544V380H252.762v-83.456z"
        />
        <path fill="#fff" d="M252.762 204.455v92.089h-96.774v-92.089z" />
      </svg>
    );
  },
);

BetterAuthIcon.displayName = "BetterAuthIcon";
