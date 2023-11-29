import React, { useState } from 'react';
import { ISelectProp } from './Select.interface';
import { TiArrowUnsorted } from 'react-icons/ti';
import * as S from './Select.style';

export const NormalSelect = ({
  width = 'small',
  disabled = false,
  margin,
  padding,
  options = [{ name: 'sampleOption', value: '' }],
  subject = 'select',
}: ISelectProp) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(prev => !prev);
  };
  return (
    <S.Select width={width} margin={margin} padding={padding}>
      <div>{subject}</div>
      <TiArrowUnsorted />
    </S.Select>
  );
};
