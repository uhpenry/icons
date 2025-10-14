import * as React from 'react';
import { IconProps } from '../types';

export const VueJsIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 64 64" 
        {...props} 
        ref={forwardedRef}><path fill='none' d='M-512-128H768v800H-512z' /><path d='M17.595 11.204h8.91l5.536 9.391 5.591-9.391h8.831L32.041 36.563z' fill='#435466' /><path d='m8.089 11.204 23.952 41.845 24.126-41.845h-9.704L32.041 36.563 17.595 11.204z' fill='#4dba87' /></svg>
  )
);

VueJsIcon.displayName = 'VueJsIcon';