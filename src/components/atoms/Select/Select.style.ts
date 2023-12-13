import styled from 'styled-components';
import {
  IItemTag,
  IOptionTag,
  ISelectTag,
  ISelectboxTag,
} from './Select.interface';

export const SelectBox = styled.div<ISelectboxTag>`
  display: inline-block;
  position: relative;
  width: ${({ theme, width }) =>
    `${width ? theme.defaultWidth[width] : '106'}px`};
  height: ${({ theme }) => `${theme.defaultHeight}px`};
  margin: ${({ margin }) => (margin ? `${margin}px ${margin}px` : `3px 5px`)};
`;

export const Select = styled.button<ISelectTag>`
  width: 100%;
  height: 100%;
  display: flex inline;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.color.normal.background};
  color: ${props =>
    props.value === ''
      ? props.theme.color.normal.text
      : props.theme.color.black};
  border: 1px solid ${({ theme }) => theme.color.normal.border};
  border-radius: 4px;
  font-weight: 400;

  &:hover {
    cursor: pointer;
    border-color: ${({ theme }) => theme.color.hover.border};
  }
  &:focus {
    border-width: 2px;
  }
`;

export const OptionBox = styled.ul<IOptionTag>`
  position: absolute;
  margin-top: 5px;
  padding: 0px;
  width: 100%;
  background: ${({ theme }) => theme.color.brownLight.moreLight};
  border: 1px solid ${({ theme }) => theme.color.brownLight.light};
  border-radius: 4px;
  z-index: 2;
`;

export const Item = styled.li<IItemTag>`
  display: flex;
  align-items: center;
  list-style: none;
  padding-left: 4px;
  font-size: 16px;
  height: 34px;

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.color.brownLight.lessLight};
    border-radius: 4px;
  }
`;
