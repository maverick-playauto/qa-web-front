import { AtomicButton } from './Button.types';
import * as S from './Button.style';

export const Button = ({
  name,
  children = 'empty',
  type = 'button',
  onClick,
  ...props
}: AtomicButton) => {
  return (
    <S.Button name={name} type={type} onClick={onClick} {...props}>
      {children}
    </S.Button>
  );
};
