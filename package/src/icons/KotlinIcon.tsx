import * as React from 'react';
import { IconProps } from '../types';

export const KotlinIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 32 32" 
        {...props} 
        ref={forwardedRef}><defs><linearGradient id='a' x1='73.714' y1='910.226' x2='105.452' y2='878.134' gradientTransform='translate(-64.139 -782.556)scale(.893)' gradientUnits='userSpaceOnUse' ><stop offset='0' stopColor='#0296d8' /><stop offset='1' stopColor='#8371d9' /></linearGradient><linearGradient id='b' x1='69.813' y1='905.226' x2='102.279' y2='875.745' gradientTransform='translate(-64.139 -782.556)scale(.893)' gradientUnits='userSpaceOnUse' ><stop offset='0' stopColor='#cb55c0' /><stop offset='1' stopColor='#f28e0e' /></linearGradient></defs><path d='M2 2v28h28v-.047l-6.95-7-6.95-7.007 6.95-7.012L29.938 2Z' fill='url(#a)' /><path d='M16.318 2 2 16.318V30h.124l14.008-14.008-.031-.031L23.05 8.95 29.938 2Z' fill='url(#b)' /></svg>
  )
);

KotlinIcon.displayName = 'KotlinIcon';