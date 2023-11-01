import styled from 'styled-components';
import { StyleButtonProps } from './Button.types';

export const Button = styled.button<StyleButtonProps>`
  padding: 5px 15px;
  border: 5px solid ${props => props.theme.color[props.color]};
  border-radius: 15px;
  background-color: '#000000';
  font-size: 20px;
  font-weight: 700;
  color: ${props => props.theme.color};
  transition: all 100ms ease-in-out;

  &:hover {
    background-color: ${props => props.theme.color};
    color: ${props => props.theme.white};
    cursor: pointer;
  }

  &.active {
    background-color: ${props => props.theme.color};
    color: ${props => props.theme.white};
  }

  /*
  반응형 테스트
  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
  */
`;
