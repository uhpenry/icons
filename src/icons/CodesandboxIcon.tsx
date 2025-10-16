import React from "react";
import { SVGIconProps } from "../types";

export const CodesandboxIcon = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ size = 24, theme, isDark, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 600 600"
      width={size}
      height={size}
      ref={ref}
      {...props}
    >
      <path
        fill="#DCFF50"
        fillRule="evenodd"
        d="M150 150h299.832v300H150V150Zm269.168 30.682v238.636H180.665V180.682h238.503Z"
        clipRule="evenodd"
      />
    </svg>
  ),
);

CodesandboxIcon.displayName = "CodesandboxIcon";
