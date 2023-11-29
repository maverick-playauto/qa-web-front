import styled from 'styled-components';
import { ISelectBoxTag, ISelectTag } from './Select.interface';

export const Select = styled.div<ISelectTag>`
  display: flex inline;
  justify-content: space-between;
  align-items: center;
  width: ${({ theme, width }) =>
    `${width ? theme.defaultWidth[width] : '5'}px`};
  border: 1px solid ${({ theme }) => theme.color.selectBorder};
  border-radius: 4px;
  font-weight: 400;

  margin: ${({ margin }) => (margin ? `${margin}px ${margin}px` : `3px 5px`)};
  padding: ${({ padding }) =>
    padding ? `${padding}px ${padding}px` : `3px 5px`};
`;
