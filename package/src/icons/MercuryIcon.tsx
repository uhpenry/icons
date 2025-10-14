import * as React from 'react';
import { IconProps } from '../types';

export const MercuryIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 33 37.5" 
        {...props} 
        ref={forwardedRef}><script /><defs><clipPath id='a'><path d='M3.817 11.295h24.834v14.661H3.817Zm0 0' /></clipPath></defs><g clipPath='url(#a)'><path fill='#2684ff' d='M11.061 25.92h10.348c3.999 0 7.242-3.259 7.242-7.279s-3.244-7.28-7.242-7.28H11.061c-4 0-7.244 3.261-7.244 7.28s3.244 7.28 7.244 7.28m10.348-11.439c2.284 0 4.138 1.864 4.138 4.16S23.694 22.8 21.409 22.8s-4.14-1.862-4.14-4.159 1.855-4.16 4.14-4.16m0 0' /></g></svg>
  )
);

MercuryIcon.displayName = 'MercuryIcon';