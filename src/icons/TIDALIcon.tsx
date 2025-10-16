import React from "react";
import { SVGIconProps } from "../types";

export const TIDALIcon = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ size = 24, theme, isDark, ...props }, ref) => {
    const useDark = theme === "dark" || isDark;
    return useDark ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1001.000000 667.000000"
        width={size}
        height={size}
        ref={ref}
        {...props}
      >
        <path
          d="M840 5835 l-835 -835 830 -830 c456 -456 834 -830 840 -830 5 0 383
374 840 830 l830 830 830 -830 830 -830 -835 -835 -835 -835 835 -835 835
-835 835 835 835 835 -833 833 -832 832 833 833 832 832 833 -832 832 -833
835 835 835 835 -835 835 -835 835 -835 -835 -835 -835 -833 833 -832 832
-833 -832 -832 -833 -833 833 -832 832 -835 -835z"
          transform="translate(0.000000,667.000000) scale(0.100000,-0.100000)"
          fill="#ffffff"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1001.000000 667.000000"
        width={size}
        height={size}
        ref={ref}
        {...props}
      >
        <path
          d="M840 5835 l-835 -835 830 -830 c456 -456 834 -830 840 -830 5 0 383
374 840 830 l830 830 830 -830 830 -830 -835 -835 -835 -835 835 -835 835
-835 835 835 835 835 -833 833 -832 832 833 833 832 832 833 -832 832 -833
835 835 835 835 -835 835 -835 835 -835 -835 -835 -835 -833 833 -832 832
-833 -832 -832 -833 -833 833 -832 832 -835 -835z"
          transform="translate(0.000000,667.000000) scale(0.100000,-0.100000)"
          fill="#000000"
        />
      </svg>
    );
  },
);

TIDALIcon.displayName = "TIDALIcon";
