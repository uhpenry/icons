import React from "react";
import { SVGIconProps } from "../types";

export const MarkdownIcon = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ size = 24, theme, isDark, ...props }, ref) => {
    const useDark = theme === "dark" || isDark;
    return useDark ? (
      <svg
        viewBox="0 0 208 128"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        ref={ref}
        {...props}
      >
        <path
          fill="none"
          stroke="#FFF"
          strokeWidth="10"
          d="M15 5h178a10 10 0 0 1 10 10v98a10 10 0 0 1-10 10H15a10 10 0 0 1-10-10V15A10 10 0 0 1 15 5z"
        />
        <path
          fill="#FFF"
          d="M30 98V30h20l20 25 20-25h20v68H90V59L70 84 50 59v39H30zm125 0-30-33h20V30h20v35h20l-30 33z"
        />
      </svg>
    ) : (
      <svg
        viewBox="0 0 208 128"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        width={size}
        height={size}
        ref={ref}
        {...props}
      >
        <g fill="#000">
          <path
            fillRule="evenodd"
            d="M15 10a5 5 0 0 0-5 5v98a5 5 0 0 0 5 5h178a5 5 0 0 0 5-5V15a5 5 0 0 0-5-5zM0 15A15 15 0 0 1 15 0h178a15 15 0 0 1 15 15v98a15 15 0 0 1-15 15H15a15 15 0 0 1-15-15z"
            clipRule="evenodd"
          />
          <path d="M30 98V30h20l20 25 20-25h20v68H90V59L70 84 50 59v39zm125 0-30-33h20V30h20v35h20z" />
        </g>
      </svg>
    );
  },
);

MarkdownIcon.displayName = "MarkdownIcon";
