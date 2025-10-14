import * as React from 'react';
import { IconProps } from '../types';

export const RazzleIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 32 32" 
        {...props} 
        ref={forwardedRef}><path d='M6.093 29.071V2.659h11.173A8.05 8.05 0 0 1 23.4 4.867a8.6 8.6 0 0 1 2.092 6.169 9.7 9.7 0 0 1-1.037 4.508A7.83 7.83 0 0 1 21.6 18.7l4.694 8.263v2.113h-6.081l-5.24-9.659h-2.62v9.659Zm6.26-15.017h3.857a3.3 3.3 0 0 0 2.2-.641 2.87 2.87 0 0 0 .746-2.264 2.76 2.76 0 0 0-.746-2.189 3.3 3.3 0 0 0-2.2-.641h-3.857Z' style={{ fill: '#5099f9', }} /><path d='M6.093 2.659V10.4l6.26 2.276V8.319h3.857a3.3 3.3 0 0 1 2.2.641 2.76 2.76 0 0 1 .746 2.189 2.87 2.87 0 0 1-.746 2.264 3.3 3.3 0 0 1-2.2.641h-.061l7.51 2.731a8.4 8.4 0 0 0 .793-1.241 9.7 9.7 0 0 0 1.037-4.508 13 13 0 0 0-.107-1.652L7.73 2.659Z' style={{ fill: '#415dd0', }} /><path style={{ fill: '#4469da', }} d='m16.466 22.164 3.747 6.907h6.077v-1.685zm-4.113-2.546-5.689-2.26 5.689 6.844z' /></svg>
  )
);

RazzleIcon.displayName = 'RazzleIcon';