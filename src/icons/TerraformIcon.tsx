import React from "react";
import { SVGIconProps } from "../types";

export const TerraformIcon = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ size = 24, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 72"
      width={size}
      height={size}
      ref={ref}
      {...props}
    >
      <defs>
        <style>{".cls-1{fill:#a067da;fill-rule:evenodd;stroke-width:0}"}</style>
      </defs>
      <path
        d="m17.2 17.5 15.5 9v18l-15.5-9v-18ZM34.5 26.5v18l15.5-9v-18l-15.5 9ZM0 7.5v18l15.5 9v-18L0 7.5ZM17.2 55.5l15.5 9v-18l-15.5-9v18Z"
        className="cls-1"
      />
    </svg>
  ),
);

TerraformIcon.displayName = "TerraformIcon";
