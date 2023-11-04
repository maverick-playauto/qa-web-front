import { AtomicSelect } from './Select.types';
import * as S from './Select.style';

export const NormalSelect = ({
  name,
  children = 'empty',
  ...props
}: AtomicSelect) => {
  return (
    <S.NormalSelect name={name} {...props}>
      {children}
    </S.NormalSelect>
  );
};
