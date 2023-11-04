import { HTMLAttributes } from 'react';

export interface AtomicButton extends HTMLAttributes<HTMLButtonElement> {
  name?: string;
  type?: 'submit' | 'button' | 'reset';
}

export interface NormalButtonStyle {
  bgColor?: string;
  fontSize?: string;
  borderColor?: string;
  color?: string;
  borderWidth?: string;
  hoverBgColor?: string;
  border?: string;
  hoverColor?: string;
  activeBgColor?: string;
  activeColor?: string;
}
