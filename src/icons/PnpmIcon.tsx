import React from "react";
import { SVGIconProps } from "../types";

export const PnpmIcon = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ size = 24, theme, isDark, ...props }, ref) => {
    const useDark = theme === "dark" || isDark;
    return useDark ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="76.58987244897958 44 164.00775510204068 164"
        width={size}
        height={size}
        ref={ref}
        {...props}
      >
        <defs>
          <path d="M237.6 95L187.6 95L187.6 45L237.6 45L237.6 95Z" id="a" />
          <path
            d="M182.59 95L132.59 95L132.59 45L182.59 45L182.59 95Z"
            id="b"
          />
          <path d="M127.59 95L77.59 95L77.59 45L127.59 45L127.59 95Z" id="c" />
          <path
            d="M237.6 150L187.6 150L187.6 100L237.6 100L237.6 150Z"
            id="d"
          />
          <path
            d="M182.59 150L132.59 150L132.59 100L182.59 100L182.59 150Z"
            id="e"
          />
          <path
            d="M182.59 205L132.59 205L132.59 155L182.59 155L182.59 205Z"
            id="f"
          />
          <path
            d="M237.6 205L187.6 205L187.6 155L237.6 155L237.6 205Z"
            id="g"
          />
          <path
            d="M127.59 205L77.59 205L77.59 155L127.59 155L127.59 205Z"
            id="h"
          />
        </defs>
        <use xlinkHref="#a" fill="#f9ad00" />
        <use xlinkHref="#b" fill="#f9ad00" />
        <use xlinkHref="#c" fill="#f9ad00" />
        <use xlinkHref="#d" fill="#f9ad00" />
        <use xlinkHref="#e" fill="#ffffff" />
        <use xlinkHref="#f" fill="#ffffff" />
        <use xlinkHref="#g" fill="#ffffff" />
        <use xlinkHref="#h" fill="#ffffff" />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="76.58987244897958 44 164.00775510204068 164"
        width={size}
        height={size}
        ref={ref}
        {...props}
      >
        <defs>
          <path d="M237.6 95L187.6 95L187.6 45L237.6 45L237.6 95Z" id="a" />
          <path
            d="M182.59 95L132.59 95L132.59 45L182.59 45L182.59 95Z"
            id="b"
          />
          <path d="M127.59 95L77.59 95L77.59 45L127.59 45L127.59 95Z" id="c" />
          <path
            d="M237.6 150L187.6 150L187.6 100L237.6 100L237.6 150Z"
            id="d"
          />
          <path
            d="M182.59 150L132.59 150L132.59 100L182.59 100L182.59 150Z"
            id="e"
          />
          <path
            d="M182.59 205L132.59 205L132.59 155L182.59 155L182.59 205Z"
            id="f"
          />
          <path
            d="M237.6 205L187.6 205L187.6 155L237.6 155L237.6 205Z"
            id="g"
          />
          <path
            d="M127.59 205L77.59 205L77.59 155L127.59 155L127.59 205Z"
            id="h"
          />
        </defs>
        <use xlinkHref="#a" fill="#f9ad00" />
        <use xlinkHref="#b" fill="#f9ad00" />
        <use xlinkHref="#c" fill="#f9ad00" />
        <use xlinkHref="#d" fill="#f9ad00" />
        <use xlinkHref="#e" fill="#4e4e4e" />
        <use xlinkHref="#f" fill="#4e4e4e" />
        <use xlinkHref="#g" fill="#4e4e4e" />
        <use xlinkHref="#h" fill="#4e4e4e" />
      </svg>
    );
  },
);

PnpmIcon.displayName = "PnpmIcon";
