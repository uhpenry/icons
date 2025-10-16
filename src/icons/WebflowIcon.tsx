import React from "react";
import { SVGIconProps } from "../types";

export const WebflowIcon = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ size = 24, theme, isDark, ...props }, ref) => (
    <svg
      viewBox="0 0 1080 674"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={size}
      height={size}
      ref={ref}
      {...props}
    >
      <path
        fill="#146EF5"
        fillRule="evenodd"
        d="M1080 0 735.386 673.684H411.695l144.221-279.203h-6.471C430.464 548.934 252.942 650.61-.0005 673.684v-275.34s161.8135-9.557 256.9385-109.568H-.0005V.0053H288.771V237.515l6.481-.026L413.254.0053h218.39V236.009l6.482-.01L760.555 0H1080Z"
        clipRule="evenodd"
      />
    </svg>
  ),
);

WebflowIcon.displayName = "WebflowIcon";
