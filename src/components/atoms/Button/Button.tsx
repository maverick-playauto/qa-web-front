import { ButtonProps } from './Button.types';
import * as S from './Button.style';
/**
 * Primary UI component for user interaction
 */
export const Button = ({
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <S.Button background={backgroundColor} {...props}>
      {label}
    </S.Button>
  );
};
