import { AtomicButton } from './Button.types';
import * as S from './Button.style';

export const NormalButton = ({
  name,
  children = 'empty',
  type = 'button',
  onClick,
  ...props
}: AtomicButton) => {
  return (
    <S.NormalButton name={name} type={type} onClick={onClick} {...props}>
      {children}
    </S.NormalButton>
  );
};
