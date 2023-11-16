import styled from 'styled-components';
import { IButtonTag } from './Button.interface';

export const Btn = styled.button<IButtonTag>`
  border: none;
  border-radius: 4px;
  margin: ${({ margin }) => (margin ? `${margin}px ${margin}px` : `$3px 5px`)};
  padding: ${({ padding }) =>
    padding ? `${padding}px ${padding}px` : `3px 5px`};

  ${({ buttonType, theme }) =>
    buttonType === 'primary'
      ? `
    background: ${theme.color.warning}
    `
      : ''}
`;
