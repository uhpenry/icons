import React, { ForwardRefExoticComponent, RefAttributes } from 'react';
import { ICON_LIBRARY } from '../utils';

export type IconNameType = keyof typeof ICON_LIBRARY[number];

export interface IconProps extends React.SVGAttributes<SVGElement> {
  children?: never;
  size?: number | string;
}

export interface IconEntry {
  main: string;
  aliases: string[];
  icon: IconType;
}


export type IconType = ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;