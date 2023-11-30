import React, { useState } from 'react';
import { ISelectProp } from './Select.interface';
import { TiArrowUnsorted } from 'react-icons/ti';
import * as S from './Select.style';

export const NormalSelect = ({
  selectType = 'primary',
  width = 'small',
  disabled = false,
  margin,
  options = [{ name: 'sampleOption', value: '' }],
  subject = 'select',
}: ISelectProp) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(prev => !prev);
  };
  return (
    <S.SelectBox width={width} margin={margin}>
      <S.Select
        selectType={selectType}
        disabled={disabled}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <div>{subject}</div>
        <TiArrowUnsorted />
      </S.Select>
      {isOpen && (
        <S.Option selectType={selectType}>
          {options.map(opt => (
            <S.Item selectType={selectType} key={opt.value} value={opt.value}>
              {opt.name}
            </S.Item>
          ))}
        </S.Option>
      )}
    </S.SelectBox>
  );
};
