import { HTMLAttributes } from 'react';
import { BaseStyle } from '../basetype';

export interface AtomicInput extends HTMLAttributes<HTMLInputElement> {
  name?: string;
  type?: 'text' | 'search' | 'email';
}

export interface NormalInputStyle extends BaseStyle {
  fontSize?: string;
}
