import * as React from 'react';
import { IconProps } from '../../../types';

export const UhpenryIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg
        fill="currentColor"
        width={size} 
        height={size} 
        viewBox="0 0 3000 3000" 
        {...props} 
        ref={forwardedRef}><path d="M1492.89 1257.05c26.65 77.16 3.72 162.8-57.93 216.35l-686.216 596.03c-38.601 33.53-93.45 40.86-139.472 18.63-85.095-41.1-97.684-157.16-23.389-215.62l517.557-407.25c63.37-49.86 90.63-132.9 69.12-210.59L990.333 596.337c-21.24-76.728 31.007-154.339 110.097-163.544 60.48-7.039 117.7 28.923 137.58 86.464zm-448.08 785.15c31.91-24.9 73.2-34.42 112.79-25.99l1154.46 245.71c118.75 25.27 158.33 174.81 67.65 255.59-35.99 32.06-85.3 44.63-132.22 33.71l-1149.57-267.66c-112.128-26.1-143.905-170.52-53.11-241.36"fill="currentColor"/></svg>
  )
);

UhpenryIcon.displayName = 'UhpenryIcon';