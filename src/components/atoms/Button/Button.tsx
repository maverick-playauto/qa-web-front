import { ButtonProps } from './Button.types';
import * as S from './Button.style';
/**
 * Primary UI component for user interaction
 */
export const Button = ({
  borderColor = 'black',
  backgroundColor = 'white',
  color = 'black',
  fontSize = 'small',
  btnContent = 'none content',
}: ButtonProps) => {
  return (
    <S.Button
      color={color}
      fontSize={fontSize}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
    >
      {btnContent}
    </S.Button>
  );
};
