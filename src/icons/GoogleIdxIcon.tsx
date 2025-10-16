import React from "react";
import { SVGIconProps } from "../types";

export const GoogleIdxIcon = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ size = 24, ...props }, ref) => (
    <svg
      viewBox="0 0 192 192"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      ref={ref}
      {...props}
    >
      <rect x="28" y="156" width="88" height="24" rx="12" fill="#8964e8" />
      <rect x="104" y="120" width="36" height="24" rx="12" fill="#17b877" />
      <rect x="56" y="120" width="36" height="24" rx="12" fill="#17b877" />
      <rect x="84" y="84" width="52" height="24" rx="12" fill="#ffa23e" />
      <rect x="148" y="84" width="24" height="24" rx="12" fill="#ffa23e" />
      <rect x="56" y="48" width="88" height="24" rx="12" fill="#25a6e9" />
      <rect x="64" y="12" width="52" height="24" rx="12" fill="#8964e8" />
      <rect x="28" y="12" width="24" height="24" rx="12" fill="#8964e8" />
    </svg>
  ),
);

GoogleIdxIcon.displayName = "GoogleIdxIcon";
