import { HTMLAttributes } from 'react';
export interface AtomicInput extends HTMLAttributes<HTMLInputElement> {
  name?: string;
  type?: 'text' | 'search' | 'email';
}
