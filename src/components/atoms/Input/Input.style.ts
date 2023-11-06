import styled from 'styled-components';
import { NormalInputStyle } from './Input.types';

export const NormalInput = styled.input<NormalInputStyle>`
  font-size: ${props => props.theme.fontSize[props.fontSize || 'base']};
`;
