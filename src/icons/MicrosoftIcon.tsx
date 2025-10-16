import React from "react";
import { SVGIconProps } from "../types";

export const MicrosoftIcon = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ size = 24, theme, isDark, ...props }, ref) => (
    <svg
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      ref={ref}
      {...props}
    >
      <path fill="#F1511B" d="M121.666 121.666H0V0h121.666z" />
      <path fill="#80CC28" d="M256 121.666H134.335V0H256z" />
      <path fill="#00ADEF" d="M121.663 256.002H0V134.336h121.663z" />
      <path fill="#FBBC09" d="M256 256.002H134.335V134.336H256z" />
    </svg>
  ),
);

MicrosoftIcon.displayName = "MicrosoftIcon";
