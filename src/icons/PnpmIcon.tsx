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
          <path
            d="M237.6 95L187.6 95L187.6 45L237.6 45L237.6 95Z"
            id="icon_609qk8i_b45vdTD8hs"
          />
          <path
            d="M182.59 95L132.59 95L132.59 45L182.59 45L182.59 95Z"
            id="icon_609qk8i_a40WtxIl8d"
          />
          <path
            d="M127.59 95L77.59 95L77.59 45L127.59 45L127.59 95Z"
            id="icon_609qk8i_h2CN9AEEpe"
          />
          <path
            d="M237.6 150L187.6 150L187.6 100L237.6 100L237.6 150Z"
            id="icon_609qk8i_dqv5133G8"
          />
          <path
            d="M182.59 150L132.59 150L132.59 100L182.59 100L182.59 150Z"
            id="icon_609qk8i_b1Lv79ypvm"
          />
          <path
            d="M182.59 205L132.59 205L132.59 155L182.59 155L182.59 205Z"
            id="icon_609qk8i_hy1IZWwLX"
          />
          <path
            d="M237.6 205L187.6 205L187.6 155L237.6 155L237.6 205Z"
            id="icon_609qk8i_akQfjxQes"
          />
          <path
            d="M127.59 205L77.59 205L77.59 155L127.59 155L127.59 205Z"
            id="icon_609qk8i_bdSrwE5pk"
          />
        </defs>
        <use xlinkHref="#icon_609qk8i_b45vdTD8hs" fill="#f9ad00" />
        <use xlinkHref="#icon_609qk8i_a40WtxIl8d" fill="#f9ad00" />
        <use xlinkHref="#icon_609qk8i_h2CN9AEEpe" fill="#f9ad00" />
        <use xlinkHref="#icon_609qk8i_dqv5133G8" fill="#f9ad00" />
        <use xlinkHref="#icon_609qk8i_b1Lv79ypvm" fill="#ffffff" />
        <use xlinkHref="#icon_609qk8i_hy1IZWwLX" fill="#ffffff" />
        <use xlinkHref="#icon_609qk8i_akQfjxQes" fill="#ffffff" />
        <use xlinkHref="#icon_609qk8i_bdSrwE5pk" fill="#ffffff" />
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
          <path
            d="M237.6 95L187.6 95L187.6 45L237.6 45L237.6 95Z"
            id="icon_zq1n52i_arNRoK435"
          />
          <path
            d="M182.59 95L132.59 95L132.59 45L182.59 45L182.59 95Z"
            id="icon_zq1n52i_a3H2WU7Px"
          />
          <path
            d="M127.59 95L77.59 95L77.59 45L127.59 45L127.59 95Z"
            id="icon_zq1n52i_b1DInM56vl"
          />
          <path
            d="M237.6 150L187.6 150L187.6 100L237.6 100L237.6 150Z"
            id="icon_zq1n52i_a7LFlgQIwu"
          />
          <path
            d="M182.59 150L132.59 150L132.59 100L182.59 100L182.59 150Z"
            id="icon_zq1n52i_amwLiZcuo"
          />
          <path
            d="M182.59 205L132.59 205L132.59 155L182.59 155L182.59 205Z"
            id="icon_zq1n52i_f3Peu5RWan"
          />
          <path
            d="M237.6 205L187.6 205L187.6 155L237.6 155L237.6 205Z"
            id="icon_zq1n52i_a6DXBfqPa"
          />
          <path
            d="M127.59 205L77.59 205L77.59 155L127.59 155L127.59 205Z"
            id="icon_zq1n52i_c1GWSTH1z7"
          />
        </defs>
        <use xlinkHref="#icon_zq1n52i_arNRoK435" fill="#f9ad00" />
        <use xlinkHref="#icon_zq1n52i_a3H2WU7Px" fill="#f9ad00" />
        <use xlinkHref="#icon_zq1n52i_b1DInM56vl" fill="#f9ad00" />
        <use xlinkHref="#icon_zq1n52i_a7LFlgQIwu" fill="#f9ad00" />
        <use xlinkHref="#icon_zq1n52i_amwLiZcuo" fill="#4e4e4e" />
        <use xlinkHref="#icon_zq1n52i_f3Peu5RWan" fill="#4e4e4e" />
        <use xlinkHref="#icon_zq1n52i_a6DXBfqPa" fill="#4e4e4e" />
        <use xlinkHref="#icon_zq1n52i_c1GWSTH1z7" fill="#4e4e4e" />
      </svg>
    );
  },
);

PnpmIcon.displayName = "PnpmIcon";
