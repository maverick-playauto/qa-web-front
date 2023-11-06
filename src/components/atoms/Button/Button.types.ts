import { HTMLAttributes } from 'react';
import { BaseStyle } from '../basetype';

export interface AtomicButton extends HTMLAttributes<HTMLButtonElement> {
  name?: string;
  type?: 'submit' | 'button' | 'reset';
}

export interface NormalButtonStyle extends BaseStyle {
  hoverBgColor?: string;
  hoverColor?: string;
  activeBgColor?: string;
  activeColor?: string;
  fontSize?: string;
  fontWeight?: string;
}
