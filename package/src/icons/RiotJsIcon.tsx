import * as React from 'react';
import { IconProps } from '../types';

export const RiotJsIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 111 116" 
        {...props} 
        ref={forwardedRef}><script /><path d='M0 1.003C0 .45.448 0 1 0h74.321C95.026 0 110 16.028 110 35.8v3.951a4 4 0 0 1-4 4H89.214c-1.104 0-2-.894-2-1.998v-5.954c0-6.59-5.324-11.933-11.893-11.933H24.786c-.553 0-1 .45-1 1.003v81.525a.97.97 0 0 1-1.001.983C10.113 106.851 0 96.376 0 83.531z' fill='#ED1846' /><path d='M44.607 47.732a.97.97 0 0 0-.98 1.005c.525 12.715 10.965 22.861 23.766 22.861H83.25a3.97 3.97 0 0 1 3.964 3.978v30.818a.97.97 0 0 0 1.001.983C100.887 106.851 111 96.376 111 83.531v-7.955c0-15.378-12.424-27.844-27.75-27.844z' fill='#ED1846' /></svg>
  )
);

RiotJsIcon.displayName = 'RiotJsIcon';