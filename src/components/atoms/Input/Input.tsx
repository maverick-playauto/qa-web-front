import { AtomicInput } from './Input.types';
import * as S from './Input.style';

export const NormalInput = ({
  name,
  children = 'empty',
  type = 'text',
  onChange,
  placeholder = '검색어 입력',
  ...props
}: AtomicInput) => {
  return null;
};
