import React from "react";
import { SVGIconProps } from "../types";

export const TabbyIcon = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ size = 24, theme, isDark, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      width={size}
      height={size}
      ref={ref}
      {...props}
    >
      <style>
        {
          ".st0{fill:url(#icon_xcmznes_SVGID_1_)}.st1{opacity:.16;fill:url(#icon_xcmznes_SVGID_2_)}.st2{fill:url(#icon_xcmznes_SVGID_3_)}.st3{opacity:.16;fill:url(#icon_xcmznes_SVGID_4_)}.st4{fill:url(#icon_xcmznes_SVGID_5_)}.st5{opacity:.15;fill:url(#icon_xcmznes_SVGID_6_)}.st6{fill:url(#icon_xcmznes_SVGID_7_)}"
        }
      </style>
      <linearGradient
        id="icon_xcmznes_SVGID_1_"
        x1="260.967"
        x2="919.184"
        y1="871.181"
        y2="491.16"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" style={{ stopColor: "#669abd" }} />
        <stop offset="1" style={{ stopColor: "#77dbdb" }} />
      </linearGradient>
      <polygon
        points="297.54 934.52 882.6 596.72 882.61 427.82 297.54 765.65"
        className="st0"
      />
      <linearGradient
        id="icon_xcmznes_SVGID_2_"
        x1="553.505"
        x2="626.647"
        y1="617.828"
        y2="744.513"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".559" style={{ stopColor: "#000", stopOpacity: "0" }} />
        <stop offset="1" style={{ stopColor: "#000" }} />
      </linearGradient>
      <polygon
        points="297.54 934.52 882.6 596.72 882.61 427.82 297.54 765.65"
        className="st1"
      />
      <linearGradient
        id="icon_xcmznes_SVGID_3_"
        x1="114.663"
        x2="334.091"
        y1="744.528"
        y2="871.214"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" style={{ stopColor: "#6a8fad" }} />
        <stop offset="1" style={{ stopColor: "#669abd" }} />
      </linearGradient>
      <polygon
        points="151.23 681.18 151.22 850.09 297.54 934.52 297.54 765.65"
        className="st2"
      />
      <linearGradient
        id="icon_xcmznes_SVGID_4_"
        x1="260.948"
        x2="187.806"
        y1="744.528"
        y2="871.213"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".559" style={{ stopColor: "#000", stopOpacity: "0" }} />
        <stop offset="1" style={{ stopColor: "#000" }} />
      </linearGradient>
      <polygon
        points="151.23 681.18 151.22 850.09 297.54 934.52 297.54 765.65"
        className="st3"
      />
      <linearGradient
        id="icon_xcmznes_SVGID_5_"
        x1="114.663"
        x2="553.503"
        y1="237.793"
        y2="491.157"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" style={{ stopColor: "#6a8fad" }} />
        <stop offset="1" style={{ stopColor: "#669abd" }} />
      </linearGradient>
      <polygon
        points="151.23 174.45 151.21 343.36 443.79 512.27 590.08 427.81"
        className="st4"
      />
      <linearGradient
        id="icon_xcmznes_SVGID_6_"
        x1="370.656"
        x2="297.509"
        y1="301.128"
        y2="427.822"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".559" style={{ stopColor: "#000", stopOpacity: "0" }} />
        <stop offset="1" style={{ stopColor: "#000" }} />
      </linearGradient>
      <polygon
        points="151.23 174.45 151.21 343.36 443.79 512.27 590.08 427.81"
        className="st5"
      />
      <linearGradient
        id="icon_xcmznes_SVGID_7_"
        x1="78.091"
        x2="736.337"
        y1="554.498"
        y2="174.459"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" style={{ stopColor: "#ccecff" }} />
        <stop offset="1" style={{ stopColor: "#9feced" }} />
      </linearGradient>
      <polygon
        points="297.51 765.64 151.23 681.18 590.08 427.81 151.23 174.45 297.5 90 882.61 427.82"
        className="st6"
      />
    </svg>
  ),
);

TabbyIcon.displayName = "TabbyIcon";
