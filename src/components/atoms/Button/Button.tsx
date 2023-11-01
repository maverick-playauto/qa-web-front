import { ButtonProps } from './Button.types';
import * as S from './Button.style';
/**
 * Primary UI component for user interaction
 */
export const Button = ({
  event,
  color = 'black',
  btnContent = 'none content',
}: ButtonProps) => {
  return <S.Button color={color}>{btnContent}</S.Button>;
};
