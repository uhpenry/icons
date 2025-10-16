import React from "react";
import { SVGIconProps } from "../types";

export const DailyDevIcon = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ size = 24, theme, isDark, ...props }, ref) => {
    const useDark = theme === "dark" || isDark;
    return useDark ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 40 40"
        width={size}
        height={size}
        ref={ref}
        {...props}
      >
        <g fill="#FFF" fillRule="evenodd">
          <path
            d="m31.48 19.944-3.533-3.533 1.765-3.531 5.74 5.74a1.873 1.873 0 0 1 0 2.648l-7.065 7.064a1.873 1.873 0 0 1-2.648-2.648l5.74-5.74Z"
            opacity=".56"
          />
          <path d="M25.74 11.548a1.873 1.873 0 0 1 2.649 0l1.324 1.325-15.452 15.452a1.873 1.873 0 0 1-2.649 0l-1.324-1.324L25.74 11.548Zm-6.622 4.857-2.65 2.649-3.532-3.533-4.415 4.416 3.532 3.532-1.765 3.532-5.74-5.74a1.873 1.873 0 0 1 0-2.648l7.064-7.064a1.873 1.873 0 0 1 2.65 0l4.856 4.856Z" />
        </g>
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 40 40"
        width={size}
        height={size}
        ref={ref}
        {...props}
      >
        <g fill="#151618" fillRule="evenodd">
          <path
            d="m31.48 19.944-3.533-3.533 1.765-3.531 5.74 5.74a1.873 1.873 0 0 1 0 2.648l-7.065 7.064a1.873 1.873 0 0 1-2.648-2.648l5.74-5.74Z"
            opacity=".56"
          />
          <path d="M25.74 11.548a1.873 1.873 0 0 1 2.649 0l1.324 1.325-15.452 15.452a1.873 1.873 0 0 1-2.649 0l-1.324-1.324L25.74 11.548Zm-6.622 4.857-2.65 2.649-3.532-3.533-4.415 4.416 3.532 3.532-1.765 3.532-5.74-5.74a1.873 1.873 0 0 1 0-2.648l7.064-7.064a1.873 1.873 0 0 1 2.65 0l4.856 4.856Z" />
        </g>
      </svg>
    );
  },
);

DailyDevIcon.displayName = "DailyDevIcon";
