import React from 'react';
import { SVGIconProps } from '../types';

export const ShadcnUiIcon = React.forwardRef<SVGSVGElement, SVGIconProps>(
  ({ size = 24, theme, isDark, ...props }, forwardedRef) => {
    const useDark = theme === 'dark' || isDark;
    return useDark ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        width={size}
        height={size}
        ref={forwardedRef}
        {...props}
      >
        <path fill="none" d="M0 0h256v256H0z" />
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="25"
          strokeLinecap="round"
          d="M208 128l-80 80M192 40L40 192"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        width={size}
        height={size}
        ref={forwardedRef}
        {...props}
      >
        <path fill="none" d="M0 0h256v256H0z" />
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="25"
          strokeLinecap="round"
          d="M208 128l-80 80M192 40L40 192"
        />
      </svg>
    );
  }
);

ShadcnUiIcon.displayName = 'ShadcnUiIcon';
