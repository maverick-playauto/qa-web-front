import { AtomicSelect } from './Select.types';
import * as S from './Select.style';

export const Select = ({
  name,
  children = 'empty',
  ...props
}: AtomicSelect) => {
  return (
    <S.Select name={name} {...props}>
      {children}
    </S.Select>
  );
};
