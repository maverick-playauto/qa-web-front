import { ChangeEvent, useState } from 'react';
import { ITextProp } from './Text.interface';
import * as S from './Text.style';

export const NormalText = ({
  name,
  inputType = 'primary',
  placeholder = '검색어 입력',
}: ITextProp) => {
  const [value, setValue] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <S.Input
      name={name}
      type="text"
      value={value}
      inputType={inputType}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};
