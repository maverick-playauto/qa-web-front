import styled from 'styled-components';
import { NormalButtonStyle } from './Button.types';

export const NormalButton = styled.button<NormalButtonStyle>`
  padding: 5px 12px;
  background-color: ${props => props.theme.color[props.bgColor || 'white']};
  border: none;
  border-radius: 3px;
  color: ${props => props.theme.color[props.color || 'black']};
  font-size: ${props => props.theme.fontSize[props.fontSize || 'base']};
  transition: all 50ms ease-in-out;
  box-shadow: 1px 2px 10px 1px #f7efe5;

  &:hover {
    background-color: ${props =>
      props.theme.color[props.hoverBgColor || props.bgColor || 'white']};
    color: ${props =>
      props.theme.color[props.hoverColor || props.color || 'black']};
    cursor: pointer;
  }

  &:active {
    background-color: ${props =>
      props.theme.color[props.activeBgColor || props.hoverBgColor || 'whtie']};
    color: ${props =>
      props.theme.color[props.activeColor || props.hoverColor || 'black']};
    box-shadow:
      inset -0.3rem -0.1rem 1.4rem #fbfbfb,
      inset 0.3rem 0.4rem 0.8rem #bec5d0;
  }

  /*
  반응형 테스트
  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
  */
`;
