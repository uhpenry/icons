import * as React from 'react';
import { IconProps } from '../types';

export const RedwoodJSIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 15 15" 
        {...props} 
        ref={forwardedRef}><path d='M7.252.066a.5.5 0 0 1 .496 0l3.36 1.92L7.5 4.337 3.893 1.985zM3.185 2.718 1.96 4.25 4.2 6.49l2.386-1.556zM1.438 5.146.52 8.363a.5.5 0 0 0 .034.36l.054.11 2.735-1.784zm-.38 4.587 1.371 2.743 4.227-2.113-2.591-2.591zm2.219 3.437 4.02 1.787a.5.5 0 0 0 .406 0l4.02-1.787L7.5 11.06zm9.293-.694 1.372-2.743-3.007-1.961-2.59 2.591zm1.823-3.643.054-.11a.5.5 0 0 0 .034-.36l-.92-3.217-1.903 1.903zm-1.351-4.582-1.227-1.533-3.4 2.217 2.387 1.556zM7.5 5.532l2.58 1.682L7.5 9.793l-2.58-2.58z' fill='#BF4722' /></svg>
  )
);

RedwoodJSIcon.displayName = 'RedwoodJSIcon';