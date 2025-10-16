import React from "react";
import { SVGIconProps } from "../types";

export const WhopIcon = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ size = 24, theme, isDark, ...props }, ref) => {
    const useDark = theme === "dark" || isDark;
    return useDark ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 383.2 196.4"
        width={size}
        height={size}
        ref={ref}
        {...props}
      >
        <style>{".st0{fill:#ffffff;}"}</style>
        <path
          className="st0"
          d="M60.9,0C35.7,0,18.4,11.1,5.2,23.5c0,0-5.3,5-5.2,5.2l55.2,55.2l55.2-55.2C99.9,14.3,80.2,0,60.9,0z"
        />
        <path
          className="st0"
          d="M197.2,0c-25.2,0-42.5,11.1-55.7,23.5c0,0-4.8,4.9-5.1,5.2L68.2,96.9l55.1,55.1L246.6,28.7
		C236.1,14.3,216.5,0,197.2,0z"
        />
        <path
          className="st0"
          d="M333.8,0c-25.2,0-42.5,11.1-55.7,23.5c0,0-5,4.9-5.2,5.2L136.4,165.2l14.4,14.4c22.3,22.3,58.9,22.3,81.3,0
		L383,28.7h0.2C372.8,14.3,353.1,0,333.8,0z"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 383.2 196.4"
        width={size}
        height={size}
        ref={ref}
        {...props}
      >
        <style>{".st0{fill:#ff6143;}"}</style>
        <path
          className="st0"
          d="M60.9,0C35.7,0,18.4,11.1,5.2,23.5c0,0-5.3,5-5.2,5.2l55.2,55.2l55.2-55.2C99.9,14.3,80.2,0,60.9,0z"
        />
        <path
          className="st0"
          d="M197.2,0c-25.2,0-42.5,11.1-55.7,23.5c0,0-4.8,4.9-5.1,5.2L68.2,96.9l55.1,55.1L246.6,28.7
		C236.1,14.3,216.5,0,197.2,0z"
        />
        <path
          className="st0"
          d="M333.8,0c-25.2,0-42.5,11.1-55.7,23.5c0,0-5,4.9-5.2,5.2L136.4,165.2l14.4,14.4c22.3,22.3,58.9,22.3,81.3,0
		L383,28.7h0.2C372.8,14.3,353.1,0,333.8,0z"
        />
      </svg>
    );
  },
);

WhopIcon.displayName = "WhopIcon";
