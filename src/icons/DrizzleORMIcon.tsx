import React from "react";
import { SVGIconProps } from "../types";

export const DrizzleORMIcon = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ size = 24, theme, isDark, ...props }, ref) => {
    const useDark = theme === "dark" || isDark;
    return useDark ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 160 160"
        width={size}
        height={size}
        ref={ref}
        {...props}
      >
        <rect
          width="9.631"
          height="40.852"
          fill="#C5F74F"
          rx="4.816"
          transform="matrix(.87303 .48767 -.49721 .86763 43.48 67.304)"
        />
        <rect
          width="9.631"
          height="40.852"
          fill="#C5F74F"
          rx="4.816"
          transform="matrix(.87303 .48767 -.49721 .86763 76.94 46.534)"
        />
        <rect
          width="9.631"
          height="40.852"
          fill="#C5F74F"
          rx="4.816"
          transform="matrix(.87303 .48767 -.49721 .86763 128.424 46.535)"
        />
        <rect
          width="9.631"
          height="40.852"
          fill="#C5F74F"
          rx="4.816"
          transform="matrix(.87303 .48767 -.49721 .86763 94.957 67.304)"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 160 160"
        width={size}
        height={size}
        ref={ref}
        {...props}
      >
        <rect
          width="9.631"
          height="40.852"
          fill="#121212"
          rx="4.816"
          transform="matrix(.87303 .48767 -.49721 .86763 43.48 67.304)"
        />
        <rect
          width="9.631"
          height="40.852"
          fill="#121212"
          rx="4.816"
          transform="matrix(.87303 .48767 -.49721 .86763 76.94 46.534)"
        />
        <rect
          width="9.631"
          height="40.852"
          fill="#121212"
          rx="4.816"
          transform="matrix(.87303 .48767 -.49721 .86763 128.424 46.535)"
        />
        <rect
          width="9.631"
          height="40.852"
          fill="#121212"
          rx="4.816"
          transform="matrix(.87303 .48767 -.49721 .86763 94.957 67.304)"
        />
      </svg>
    );
  },
);

DrizzleORMIcon.displayName = "DrizzleORMIcon";
