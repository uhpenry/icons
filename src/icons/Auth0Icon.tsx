import React from "react";
import { SVGIconProps } from "../types";

export const Auth0Icon = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ size = 24, ...props }, ref) => (
    <svg
      fill="#EB5424"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      ref={ref}
      {...props}
    >
      <path d="M21.98 7.448L19.62 0H4.347L2.02 7.448c-1.352 4.312.03 9.206 3.815 12.015L12.007 24l6.157-4.552c3.755-2.81 5.182-7.688 3.815-12.015l-6.16 4.58 2.343 7.45-6.157-4.597-6.158 4.58 2.358-7.433-6.188-4.55 7.63-.045L12.008 0l2.356 7.404 7.615.044z" />
    </svg>
  ),
);

Auth0Icon.displayName = "Auth0Icon";
