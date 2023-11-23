import styled, { css, DefaultTheme } from 'styled-components';
import { IButtonTag } from './Button.interface';

export const Btn = styled.button<IButtonTag>`
  //props로 받는 항목들은 그대로 사용
  border-radius: 4px;
  margin: ${({ margin }) => (margin ? `${margin}px ${margin}px` : `$3px 5px`)};
  padding: ${({ padding }) =>
    padding ? `${padding}px ${padding}px` : `3px 5px`};

  //이외의 스타일은 아래 함수를 통해 정의
  ${({ buttonType, theme, disabled }) =>
    cssOfBtnType(buttonType, theme, disabled)}
`;

const cssOfBtnType = (
  btnType: 'text' | 'contained' | 'outlined',
  theme: DefaultTheme,
  disabled: boolean = false,
) => {
  let commonCss = css``;
  let individualCss = css``;

  if (disabled) {
    commonCss = css`
      color: ${theme.color.disabledText};
      border-color: ${theme.color.borderColor};
    `;
  } else {
    commonCss = css`
      background-color: ${theme.color.btn[btnType].background};
      color: ${theme.color.btn[btnType].color};

      &:hover {
        cursor: pointer;
        background-color: ${theme.color.btn[btnType].hoverBackground};
      }

      &:active {
        background-color: ${theme.color.btn[btnType].activeBackground};
        transition: all 0.2s ease-out;
      }
    `;
  }

  switch (btnType) {
    case 'text':
      individualCss = css`
        background-color: ${disabled && '#FFFFFF'};
        border: none;
      `;
      break;
    case 'contained':
      individualCss = css`
        border: none;
      `;
      break;
    case 'outlined':
      individualCss = css`
        border-width: 1px;
        border-color: ${disabled
          ? theme.color.disabledBorder
          : theme.color.btn[btnType].borderColor};
      `;
      break;
  }

  const result = css`
    ${commonCss}
    ${individualCss}
  `;

  return result;
};
