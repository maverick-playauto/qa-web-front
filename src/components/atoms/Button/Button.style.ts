import styled, { css, DefaultTheme } from 'styled-components';
import { IButtonTag } from './Button.interface';

export const Btn = styled.button<IButtonTag>`
  border: none;
  border-radius: 4px;
  margin: ${({ margin }) => (margin ? `${margin}px ${margin}px` : `$3px 5px`)};
  padding: ${({ padding }) =>
    padding ? `${padding}px ${padding}px` : `3px 5px`};
  ${({ buttonType, theme }) => cssOfBtnType(buttonType, theme)}
`;

const cssOfBtnType = (
  btnType: 'text' | 'contained' | 'outlined',
  theme: DefaultTheme,
) => {
  switch (btnType) {
    case 'text':
      return css`
        background-color: ${theme.colorPalette.blue_100};
        color: ${theme.colorPalette.blue_500};

        &:hover {
          cursor: pointer;
          background-color: ${theme.colorPalette.grey_100};
        }

        &:active {
          background-color: ${theme.colorPalette.grey_200};
          color: ${theme.colorPalette.grey_200};
          transition: all 0.2s ease-out;
        }
      `;
    case 'contained':
      return css`
        background-color: ${theme.colorPalette.blue_200};
        color: ${theme.color.text};
      `;
  }
};
