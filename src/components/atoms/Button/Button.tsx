import { IButtonProp } from './Button.interface';
import * as S from './Button.style';

export const NormalButton = ({
  buttonType = 'contained',
  width = 'medium',
  disabled = false,
  onClick,
  margin,
  padding,
  height,
  children = 'button',
}: IButtonProp) => {
  return (
    <S.Btn
      buttonType={buttonType}
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
