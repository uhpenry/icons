import React, { ForwardRefExoticComponent, RefAttributes } from 'react';

export interface SVGIconProps extends React.SVGAttributes<SVGElement> {
  isDark?: boolean;
  children?: never;
  size?: number | string;
  theme?: 'light' | 'dark';
}

export type IconType = ForwardRefExoticComponent<
  SVGIconProps & RefAttributes<SVGSVGElement>
>;

export type SvgAllowedType = 'string' | 'number' | string[];

// ----------------------------
// Types
// ----------------------------
export interface iSvgAPIData {
  id: number;
  title: string;
  category?: string[];
  route: { light?: string; dark?: string } | string;
  wordmark?: { light?: string; dark?: string };
  url?: string;
}

export interface iSvgMetadata {
  id: number;
  url: string;
  title: string;
  icon: string;
  checked: boolean;
  path: Record<string, string>;
}
export type iAliasesType = Record<string, string[]>;

export type GetIconType = {
  icon: IconType;
  name: string;
  aliases: string[];
};
