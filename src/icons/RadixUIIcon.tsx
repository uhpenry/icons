import React from "react";
import { SVGIconProps } from "../types";

export const RadixUIIcon = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ size = 24, theme, isDark, ...props }, ref) => {
    const useDark = theme === "dark" || isDark;
    return useDark ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#ffff"
        viewBox="4 0 17 25"
        width={size}
        height={size}
        ref={ref}
        {...props}
      >
        <path d="M12 25a8 8 0 1 1 0-16v16zM12 0H4v8h8V0zM17 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#121212"
        viewBox="4 0 17 25"
        width={size}
        height={size}
        ref={ref}
        {...props}
      >
        <path d="M12 25a8 8 0 1 1 0-16v16zM12 0H4v8h8V0zM17 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
      </svg>
    );
  },
);

RadixUIIcon.displayName = "RadixUIIcon";
