import styled from 'styled-components';
import { StyledOptions } from 'styled-components';
import { ISelectTag } from './Select.interface';

export const Select = styled.select<ISelectTag>`
  background: ${({ theme }) => theme.color.background};
  color: ${({ theme, value }) =>
    `${value === 'default' ? theme.color.selectText : theme.color.text}`};
  font-weight: 400;

  border: 1px solid ${({ theme }) => theme.color.selectBorder};
  border-radius: 4px;

  margin: ${({ margin }) => (margin ? `${margin}px ${margin}px` : `$3px 5px`)};
  padding: ${({ padding }) =>
    padding ? `${padding}px ${padding}px` : `3px 5px`};
  width: ${({ theme, width }) =>
    `${width ? theme.defaultWidth[width] : '5'}px`};
  position: relative;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 45%;
  }
`;
