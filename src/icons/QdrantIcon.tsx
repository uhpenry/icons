import React from "react";
import { SVGIconProps } from "../types";

export const QdrantIcon = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ size = 24, theme, isDark, ...props }, ref) => {
    const useDark = theme === "dark" || isDark;
    return useDark ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 57 64"
        width={size}
        height={size}
        ref={ref}
        {...props}
      >
        <g fill="#fff" clipPath="url(#icon_b470yfy_a)">
          <path d="M28.667 0 .953 16v32l27.714 16 10.392-6V46l-10.392 6-17.32-10V22l17.32-10 17.32 10v40l10.393-6V16z" />
          <path d="M18.275 26v12l10.392 6 10.392-6V26l-10.392-6z" />
        </g>
        <defs>
          <clipPath id="icon_b470yfy_a">
            <path fill="#fff" d="M.664 0h56v64h-56z" />
          </clipPath>
        </defs>
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 57 64"
        width={size}
        height={size}
        ref={ref}
        {...props}
      >
        <g clipPath="url(#icon_sdbfb9a_a)">
          <path
            fill="#dc244c"
            d="M28.335 0 .62 16v32l27.714 16 10.392-6V46l-10.392 6-17.32-10V22l17.32-10 17.32 10v40l10.393-6V16z"
          />
          <path
            fill="#dc244c"
            d="M17.943 26v12l10.392 6 10.392-6V26l-10.392-6z"
          />
          <path
            fill="#bd0c3e"
            d="M38.727 46v12l-10.392 6V52zm17.321-30v40l-10.393 6V22z"
          />
          <path
            fill="#ff516b"
            d="m56.048 16-10.393 6-17.32-10-17.32 10L.62 16 28.335 0z"
          />
          <path fill="#dc244c" d="M28.335 52v12L.62 48V16l10.394 6v20z" />
          <path fill="#ff516b" d="m38.727 26-10.392 6-10.392-6 10.392-6z" />
          <path fill="#dc244c" d="M28.335 32v12l-10.392-6V26z" />
          <path fill="#bd0c3e" d="M38.727 26v12l-10.392 6V32z" />
        </g>
        <defs>
          <clipPath id="icon_sdbfb9a_a">
            <path fill="#fff" d="M.332 0h56v64h-56z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

QdrantIcon.displayName = "QdrantIcon";
