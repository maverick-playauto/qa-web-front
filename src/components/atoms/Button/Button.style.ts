import styled, { css, DefaultTheme } from 'styled-components';
import { IButtonTag } from './Button.interface';

export const Btn = styled.button<IButtonTag>`
  //props로 받는 항목들은 그대로 사용
  border: none;
  border-radius: 4px;
  font-weight: 400;
  margin: ${({ margin }) => (margin ? `${margin}px ${margin}px` : `$3px 5px`)};
  padding: ${({ padding }) =>
    padding ? `${padding}px ${padding}px` : `3px 5px`};
  width: ${({ theme, width }) =>
    `${width ? theme.defaultWidth[width] : '106'}px`};
  height: ${({ theme, height }) =>
    `${height ? `${height}` : theme.defaultHeight}px`};
  ${({ variant, theme, disabled }) => cssOfBtnType(variant, theme, disabled)}
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }
`;

const cssOfBtnType = (
  btnType: 'primary' | 'contained' | 'outlined',
  theme: DefaultTheme,
  disabled: boolean = false,
) => {
  let individualCss = null;
  switch (btnType) {
    case 'primary':
      individualCss = css`
        background-color: ${theme.color.normal.background};
        color: ${disabled
          ? theme.color.disabled.text
          : theme.color.blueLight.deep};
        ${!disabled &&
        css`
          &:hover {
            background-color: ${theme.color.blueLight.moreLight};
          }

          &:active {
            background-color: ${theme.color.blueLight.light};
            transition: all 0.2s ease-out;
          }
        `}
      `;
      break;
    case 'contained':
      individualCss = css`
        background-color: ${disabled
          ? theme.color.disabled.background
          : theme.color.blueLight.deep};
        color: ${disabled
          ? theme.color.disabled.text
          : theme.color.revalsal.text};
        ${!disabled &&
        css`
          &:hover {
            background-color: ${theme.color.blueLight.moreDeep};
          }

          &:active {
            background-color: ${theme.color.blueLight.lessDeep};
            transition: all 0.2s ease-out;
          }
        `}
      `;
      break;
    case 'outlined':
      individualCss = css`
        background-color: ${theme.color.normal.background};
        border: 1px solid
          ${disabled
            ? theme.color.disabled.border
            : theme.color.blueLight.lessDeep};
        color: ${disabled
          ? theme.color.disabled.text
          : theme.color.blueLight.lessDeep};
        ${!disabled &&
        css`
          &:hover {
            background-color: ${theme.color.blueLight.moreLight};
            border-color: ${theme.color.blueLight.deep};
            color: ${theme.color.blueLight.deep};
          }

          &:active {
            background-color: ${theme.color.blueLight.light};
            color: ${theme.color.blueLight.moreDeep};
            border-color: ${theme.color.blueLight.moreDeep};
          }
        `}
      `;
      break;
  }
  return individualCss;
};
