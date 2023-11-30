import styled from 'styled-components';
import {
  IItemTag,
  IOptionTag,
  ISelectTag,
  ISelectboxTag,
} from './Select.interface';

export const SelectBox = styled.div<ISelectboxTag>`
  display: inline-table;
  position: relative;
  width: ${({ theme, width }) =>
    `${width ? theme.defaultWidth[width] : '106'}px`};
  margin: ${({ margin }) => (margin ? `${margin}px ${margin}px` : `3px 5px`)};
`;

export const Select = styled.button<ISelectTag>`
  width: 100%;
  display: flex inline;
  justify-content: space-between;
  align-items: center;

  background: ${({ theme }) => theme.color.normal.background};
  color: ${({ theme }) => theme.color.normal.text};
  border: 1px solid ${({ theme }) => theme.color.normal.border};
  border-radius: 4px;
  font-weight: 400;

  &:hover {
    cursor: pointer;
    border-color: ${({ theme }) => theme.color.hover.border};
  }
`;

export const Option = styled.ul<IOptionTag>`
  margin-top: 5px;
  padding: 0 5px;
  width: 100%;
  background: ${({ theme }) => theme.color.brownLight.moreLight};
  border: 1px solid ${({ theme }) => theme.color.brownLight.light};
  border-radius: 4px;
  z-index: 2;
`;

export const Item = styled.li<IItemTag>`
  list-style: none;
  margin: 3px 0;
  padding-left: 4px;
  font-size: 12px;

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.color.brownLight.lessLight};
    border-radius: 4px;
  }
`;
