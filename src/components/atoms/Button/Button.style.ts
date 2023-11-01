import styled from 'styled-components';
import { ButtonStyleProps } from './Button.types';

export const Button = styled.button<ButtonStyleProps>`
  padding: 5px 15px;
  border: 1px solid ${props => props.theme.color[props.borderColor]};
  border-radius: 15px;
  background-color: ${props => props.theme.color[props.backgroundColor]};
  font-size: ${props => props.theme.fontSize[props.fontSize]};
  font-weight: 700;
  color: ${props => props.theme.color[props.color]};
  transition: all 150ms ease-in-out;

  &:hover {
    background-color: #ffffff;
    color: ${props => props.theme.white};
    cursor: pointer;
  }

  &:active {
    background-color: ${props => props.theme.color.yellow};
    color: ${props => props.theme.color.navy};
  }

  /*
  반응형 테스트
  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
  */
`;
