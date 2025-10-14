import * as React from 'react';
import { IconProps } from '../types';

export const VcpkgIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 200, ...props }, forwardedRef) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 16 16" 
        {...props} 
        ref={forwardedRef}><script/><path d="M7.273 5.053c-3.325-1.178-5.703.322-7.08 2.05-.053.063-.153.023-.14-.06C.132 6.585.32 5.69.69 4.87 2.193 1.54 6.189-.08 8.566.003s5.225 1.64 4.237 3.836c-.872 1.942-2.052 2.448-5.53 1.214" fill="url(#a)"/><path d="M4.78 4.998a.08.08 0 0 0-.08-.083c-1.105.027-3.455.76-4.671 2.972q-.007.011-.008.028c-.378 2.646 4.578 4.373 4.758-2.917" fill="url(#b)"/><path d="M8.741 10.947c3.325 1.178 5.703-.322 7.08-2.05.053-.063.153-.023.14.06-.08.458-.268 1.353-.638 2.173-1.498 3.33-5.494 4.95-7.871 4.867s-5.225-1.64-4.237-3.836c.868-1.938 2.052-2.444 5.526-1.214" fill="url(#c)"/><path d="M11.213 11.07c0 .044.032.084.08.084 1.104-.028 3.462-.796 4.679-3.013q.007-.011.008-.028c.377-2.642-4.587-4.333-4.767 2.957" fill="url(#d)"/><defs><linearGradient id="a" x1=".324" y1="7.868" x2="13.877" y2="-.454" gradientUnits="userSpaceOnUse"><stop stopColor="#FC950B"/><stop offset=".592" stopColor="#F9C438"/></linearGradient><linearGradient id="b" x1="5.643" y1="4.087" x2=".328" y2="10.365" gradientUnits="userSpaceOnUse"><stop stopColor="#FC950B"/><stop offset="1" stopColor="#F9C438"/></linearGradient><linearGradient id="c" x1="17.288" y1="9.944" x2="2.096" y2="14.736" gradientUnits="userSpaceOnUse"><stop stopColor="#FC950B"/><stop offset=".613" stopColor="#F9C438"/></linearGradient><linearGradient id="d" x1="14.125" y1="13.457" x2="12.698" y2="2.107" gradientUnits="userSpaceOnUse"><stop stopColor="#FC950B"/><stop offset="1" stopColor="#F9C438"/></linearGradient></defs></svg>
  )
);

VcpkgIcon.displayName = 'VcpkgIcon';