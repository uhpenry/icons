import * as React from 'react';
import { IconProps } from '../types';

export const StorybookIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 240 240" 
        {...props} 
        ref={forwardedRef}><path fill='#FF4785' d='m163.4 2.4-1.2 27.1a1.8 1.8 0 0 0 2.9 1.5l10.6-8 9 7a1.8 1.8 0 0 0 2.8-1.4l-1-27.6 13.3-1a12 12 0 0 1 12.8 12v216a12 12 0 0 1-12.6 12l-161-7.2a12 12 0 0 1-11.5-11.6L20 23.2a12 12 0 0 1 11.3-12.7l132-8.3zM132.7 93c0 4.7 31.6 2.4 35.9-.8 0-32-17.2-48.9-48.6-48.9-31.5 0-49 17.2-49 42.9 0 44.5 60 45.3 60 69.6 0 7-3.2 11-10.5 11-9.6 0-13.5-4.9-13-21.6 0-3.6-36.5-4.8-37.7 0-2.7 40.3 22.3 52 51 52 27.9 0 49.7-14.9 49.7-41.8 0-47.7-61-46.4-61-70 0-9.7 7.2-11 11.3-11 4.5 0 12.5.7 11.9 18.7z' /></svg>
  )
);

StorybookIcon.displayName = 'StorybookIcon';