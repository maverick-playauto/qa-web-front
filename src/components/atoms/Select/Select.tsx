import React, { useState } from 'react';
import { ISelectProp } from './Select.interface';
import * as S from './Select.style';

export const NormalSelect = ({
  width = 'medium',
  disabled = false,
  margin,
  padding,
  options = [{ name: 'sampleOption', value: '' }],
  subject = 'select',
}: ISelectProp) => {
  const [selectValue, setSelectValue] = useState('default');
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectValue(value);
  };
  return (
    <S.Select
      disabled={disabled}
      margin={margin}
      padding={padding}
      width={width}
      value={selectValue}
      onChange={handleChange}
    >
      <option disabled hidden selected value="default">
        {subject}
      </option>
      {options.map(menu => (
        <option key={menu.value} value={menu.value}>
          {menu.name}
        </option>
      ))}
    </S.Select>
  );
};
