import React from "react";
import { SVGIconProps } from "../types";

export const SVGIcon = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ size = 24, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 300"
      width={size}
      height={size}
      ref={ref}
      {...props}
    >
      <g stroke="#000" strokeWidth="38.009">
        <g id="b" transform="translate(150 150)">
          <path
            id="a"
            fill="#ffb13b"
            d="M-84.149-15.851a22.417 22.417 0 1 0 0 31.702H84.15a22.417 22.417 0 1 0 0-31.702Z"
          />
          <use xlinkHref="#a" transform="rotate(45)" />
          <use xlinkHref="#a" transform="rotate(90)" />
          <use xlinkHref="#a" transform="rotate(135)" />
        </g>
      </g>
      <use xlinkHref="#b" />
    </svg>
  ),
);

SVGIcon.displayName = "SVGIcon";
