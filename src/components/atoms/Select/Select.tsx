import { ISelectProp } from './Select.interface';
import * as S from './Select.style';

export const NormalSelect = ({
  disabled = false,
  margin,
  padding,
  onChange,
}: ISelectProp) => {
  return <S.Select disabled={disabled} margin={margin} padding={padding} />;
};
