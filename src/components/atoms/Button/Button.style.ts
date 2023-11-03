import styled from 'styled-components';
import { ButtonStyle } from './Button.types';

export const Button = styled.button<ButtonStyle>`
  padding: 5px 12px;
  background-color: ${props => props.bgColor || 'white'};
  border: ${props =>
    props.border === 'none'
      ? 'none'
      : `${props.borderWidth || 'normal'} solid 
          ${props.borderColor || 'black'} `};
  border-radius: 3px;
  color: ${props => props.color || 'black'};
  font-size: ${props => props.fontSize || 'small'};
  transition: all 50ms ease-in-out;
  box-shadow: 1px 2px 10px 1px #f7efe5;

  &:hover {
    background-color: ${props =>
      props.hoverBgColor || props.bgColor || 'white'};
    color: ${props => props.hoverColor || props.color || 'black'};
    cursor: pointer;
  }

  &:active {
    background-color: ${props =>
      props.activeBgColor || props.hoverBgColor || 'whtie'};
    color: ${props => props.activeColor || props.hoverColor || 'black'};
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
