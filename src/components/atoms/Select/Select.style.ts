import styled from 'styled-components';
import { NoamalSelectStyle } from './Select.types';

export const NormalSelect = styled.select<NoamalSelectStyle>`
  font-size: ${props => props.theme.fontSize[props.fontSize || '16px']};
`;
