import styled, { css, DefaultTheme } from 'styled-components';
import { ISelectTag } from './Select.interface';

export const Select = styled.button<ISelectTag>`
  //props로 받는 항목들은 그대로 사용
  border: 1px solid black;
  border-radius: 4px;
  font-weight: 400;
  margin: ${({ margin }) => (margin ? `${margin}px ${margin}px` : `$3px 5px`)};
  padding: ${({ padding }) =>
    padding ? `${padding}px ${padding}px` : `3px 5px`};
  ${({ theme, disabled }) => cssOfBtnType(theme, disabled)}
`;

const cssOfBtnType = (theme: DefaultTheme, disabled: boolean = false) => {
  let commonCss = null;
  let individualCss = null;

  commonCss = css``;
  return css`
    ${commonCss}
    ${individualCss}
  `;
};
