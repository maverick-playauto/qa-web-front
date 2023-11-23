import styled, { css, DefaultTheme } from 'styled-components';
import { IButtonTag } from './Button.interface';

export const Btn = styled.button<IButtonTag>`
  //props로 받는 항목들은 그대로 사용
  border-radius: 4px;
  font-weight: 600;
  margin: ${({ margin }) => (margin ? `${margin}px ${margin}px` : `$3px 5px`)};
  padding: ${({ padding }) =>
    padding ? `${padding}px ${padding}px` : `3px 5px`};
  ${({ buttonType, theme, disabled }) =>
    cssOfBtnType(buttonType, theme, disabled)}
`;

const cssOfBtnType = (
  btnType: 'text' | 'contained' | 'outlined',
  theme: DefaultTheme,
  disabled: boolean = false,
) => {
  let commonCss = null;
  let individualCss = null;

  commonCss = css``;

  switch (btnType) {
    case 'text':
      individualCss = css`
        background-color: ${theme.color.background};
        color: ${disabled ? theme.color.disabled : theme.color.blueLight.deep};
        ${!disabled &&
        css`
          &:hover {
            cursor: pointer;
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
          ? theme.color.disabled
          : theme.color.blueLight.deep};
        color: ${disabled
          ? theme.color.disabledText
          : theme.color.reversalText};
        ${!disabled &&
        css`
          &:hover {
            cursor: pointer;
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
        background-color: ${theme.color.background};
        border: 1px solid
          ${disabled
            ? theme.color.disabledBorder
            : theme.color.blueLight.lessDeep};
        color: ${disabled
          ? theme.color.disabledText
          : theme.color.blueLight.lessDeep};
        ${!disabled &&
        css`
          &:hover {
            cursor: pointer;
            background-color: ${theme.color.blueLight.moreLight};
          }

          &:active {
            color: ${theme.color.blueLight.moreDeep};
            border-color: ${theme.color.blueLight.moreDeep};
          }
        `}
      `;
      break;
  }
  return css`
    ${commonCss}
    ${individualCss}
  `;
};
