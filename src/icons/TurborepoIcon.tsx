import React from "react";
import { SVGIconProps } from "../types";

export const TurborepoIcon = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ size = 24, theme, isDark, ...props }, ref) => {
    const useDark = theme === "dark" || isDark;
    return useDark ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 100 100"
        width={size}
        height={size}
        ref={ref}
        {...props}
      >
        <path
          fill="#fff"
          d="M49.542 17.322c-17.766 0-32.22 14.454-32.22 32.22s14.454 32.22 32.22 32.22 32.22-14.454 32.22-32.22-14.454-32.22-32.22-32.22Zm0 48.894c-9.21 0-16.674-7.464-16.674-16.674 0-9.21 7.464-16.674 16.674-16.674 9.21 0 16.674 7.464 16.674 16.674 0 9.21-7.464 16.674-16.674 16.674Z"
        />
        <path
          fill="url(#icon_ktdtlh0_a)"
          fillRule="evenodd"
          d="M52.242 12.03V0c26.148 1.398 46.92 23.046 46.92 49.542 0 26.496-20.772 48.138-46.92 49.542v-12.03c19.488-1.392 34.92-17.676 34.92-37.512 0-19.836-15.432-36.12-34.92-37.512ZM21.126 74.142c-5.166-5.964-8.496-13.56-9.09-21.9H0c.624 11.67 5.292 22.26 12.606 30.414l8.514-8.514h.006Zm25.716 24.942v-12.03c-8.346-.594-15.942-3.918-21.906-9.09l-8.514 8.514c8.16 7.32 18.75 11.982 30.414 12.606h.006Z"
          clipRule="evenodd"
        />
        <defs>
          <linearGradient
            id="icon_ktdtlh0_a"
            x1="54.186"
            x2="5.418"
            y1="6.967"
            y2="55.735"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0096FF" />
            <stop offset="1" stopColor="#FF1E56" />
          </linearGradient>
        </defs>
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 100 100"
        width={size}
        height={size}
        ref={ref}
        {...props}
      >
        <path
          fill="#000"
          d="M49.96 17.482C32.046 17.482 17.47 32.07 17.47 50S32.045 82.518 49.96 82.518c17.916 0 32.492-14.588 32.492-32.518S67.877 17.482 49.961 17.482Zm0 49.346c-9.287 0-16.814-7.533-16.814-16.828 0-9.295 7.527-16.828 16.815-16.828S66.776 40.705 66.776 50c0 9.295-7.527 16.828-16.815 16.828Z"
        />
        <path
          fill="url(#icon_4nisnkd_a)"
          fillRule="evenodd"
          d="M52.683 12.141V0C79.053 1.41 100 23.26 100 50s-20.948 48.583-47.317 50V87.859C72.336 86.454 87.898 70.019 87.898 50c0-20.02-15.562-36.454-35.215-37.859ZM21.305 74.827c-5.21-6.019-8.568-13.685-9.167-22.102H0C.63 64.503 5.337 75.19 12.713 83.42l8.586-8.593h.006ZM47.237 100V87.859c-8.417-.6-16.077-3.954-22.091-9.174l-8.586 8.593C24.79 94.665 35.469 99.37 47.23 100h.007Z"
          clipRule="evenodd"
        />
        <defs>
          <linearGradient
            id="icon_4nisnkd_a"
            x1="54.644"
            x2="5.425"
            y1="7.031"
            y2="56.211"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0096FF" />
            <stop offset="1" stopColor="#FF1E56" />
          </linearGradient>
        </defs>
      </svg>
    );
  },
);

TurborepoIcon.displayName = "TurborepoIcon";
