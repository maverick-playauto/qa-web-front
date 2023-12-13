import { IButtonProp } from './Button.interface';
import * as S from './Button.style';

export const NormalButton = ({
  variant = 'contained',
  width = 'xs',
  disabled = false,
  onClick,
  margin,
  padding,
  height,
  children = 'button',
}: IButtonProp) => {
  return (
    <S.Btn
      variant={variant}
      width={width}
      disabled={disabled || false}
      onClick={onClick}
      padding={padding}
      margin={margin}
      height={height}
    >
      {children}
    </S.Btn>
  );
};
