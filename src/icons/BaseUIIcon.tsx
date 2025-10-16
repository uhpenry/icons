import React from "react";
import { SVGIconProps } from "../types";

export const BaseUIIcon = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ size = 24, theme, isDark, ...props }, ref) => {
    const useDark = theme === "dark" || isDark;
    return useDark ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#fff"
        aria-label="Base UI"
        viewBox="0 0 17 24"
        width={size}
        height={size}
        ref={ref}
        {...props}
      >
        <path d="M9.5 7.015A.477.477 0 0 0 9 7.5V23a8 8 0 0 0 .5-15.985ZM8 9.8V23c-4.418 0-8-3.94-8-8.8V1c4.418 0 8 3.94 8 8.8Z" />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Base UI"
        viewBox="0 0 17 24"
        width={size}
        height={size}
        ref={ref}
        {...props}
      >
        <path d="M9.5 7.015A.477.477 0 0 0 9 7.5V23a8 8 0 0 0 .5-15.985ZM8 9.8V23c-4.418 0-8-3.94-8-8.8V1c4.418 0 8 3.94 8 8.8Z" />
      </svg>
    );
  },
);

BaseUIIcon.displayName = "BaseUIIcon";
