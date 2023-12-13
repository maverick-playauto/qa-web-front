import styled from 'styled-components';
import { ITextTag } from './Text.interface';

export const Input = styled.input<ITextTag>`
  height: ${({ theme }) => `${theme.defaultHeight}px`};

  &:focus {
    border-width: 2px;
  }
`;
