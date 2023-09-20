import styled from 'styled-components';

interface ButtonProps {
  background?: string;
}

export const Button = styled.button<ButtonProps>`
  border: 0.5;
  border-radius: 10;
  background-color: ${props => props.background};
`;
