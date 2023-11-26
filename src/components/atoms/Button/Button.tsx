import { IButtonProp } from './Button.interface';
import * as S from './Button.style';

export const NormalButton = ({
  buttonType = 'contained',
  width = 'medium',
  disabled,
  onClick,
  margin,
  padding,
  height,
  children = 'button',
}: IButtonProp) => {
  console.log(onClick);
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
