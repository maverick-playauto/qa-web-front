import { HTMLAttributes } from 'react';
import { BaseStyle } from '../basetype';

export interface AtomicSelect extends HTMLAttributes<HTMLSelectElement> {
  name?: string;
}

export interface NoamalSelectStyle extends BaseStyle {
  fontSize?: string;
}
