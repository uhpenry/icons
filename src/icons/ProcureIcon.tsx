import React from "react";
import { SVGIconProps } from "../types";

export const ProcureIcon = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ size = 24, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 69.2 108.3"
      width={size}
      height={size}
      ref={ref}
      {...props}
    >
      <style>
        {".st0{fill:#ea6611;}\n\t.st1{fill:#ff9b5a;}\n\t.st2{fill:#fe7f2d;}"}
      </style>
      <path
        className="st0"
        d="M36.3,68.8v-26c0-1.2,0.6-2.4,1.7-3.1l24.5-15.4c2.4-1.5,5.5,0.2,5.5,3.1v22.4c0,1.9-1,3.6-2.6,4.6L39,70.4
	C37.8,71.1,36.3,70.2,36.3,68.8z"
      />
      <path
        className="st0"
        d="M32.7,104.8V78.1c0-1.2-0.6-2.4-1.7-3.1L4.9,58.6C3.2,57.5,1,58.8,1,60.7v25.4c0,1.2,0.6,2.4,1.7,3.1L30,106.3
	C31.2,107.1,32.7,106.2,32.7,104.8z"
      />
      <path
        className="st1"
        d="M36.3,3.2v30.2c0,1.4,1.6,2.3,2.8,1.5l20.4-13.3c1.7-1.1,1.8-3.5,0.1-4.7L39.2,1.7C38,0.8,36.3,1.7,36.3,3.2z"
      />
      <path
        className="st2"
        d="M32.7,2.9v65.9c0,1.4-1.6,2.3-2.8,1.5L2.7,53.2c-1-0.7-1.7-1.8-1.7-3.1V21.5c0-1.2,0.6-2.4,1.7-3.1L30,1.3
	C31.2,0.6,32.7,1.4,32.7,2.9z"
      />
    </svg>
  ),
);

ProcureIcon.displayName = "ProcureIcon";
