import * as React from 'react';
import { IconProps } from '../types';

export const LitIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 76.8 96" 
        {...props} 
        ref={forwardedRef}><path d='m19.2 57.6 9.6-28.8L72 72 57.6 96 38.4 76.8h-9.6' fill='#00e8ff' /><path d='M38.4 76.8V38.4l19.2-19.2v38.4m-48 0h9.6l9.6 19.2L19.2 96 0 76.8z' fill='#283198' fillRule='evenodd' /><path d='M19.2 57.6V19.2L38.4 0v38.4M57.6 96V57.6l19.2-19.2v38.4M0 76.8V38.4l19.2 19.2' fill='#324fff' /><path d='M19.2 96V57.6l19.2 19.2' fill='#0ff' /></svg>
  )
);

LitIcon.displayName = 'LitIcon';