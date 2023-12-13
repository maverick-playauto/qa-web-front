import React, { useEffect, useRef, useState } from 'react';
import { ISelectProp } from './Select.interface';
import { TiArrowUnsorted } from 'react-icons/ti';
import * as S from './Select.style';

export const NormalSelect = ({
  variant = 'primary',
  width = 'small',
  disabled = false,
  margin,
  options = [
    { name: 'sampleOption', value: 'sample' },
    { name: 'sampleOption2', value: 'sample' },
  ],
  subject = 'select',
}: ISelectProp) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState({ option: subject, value: '' });

  const handleOutsideClick = (e: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  const handleClick = (opt: { name: string; value: any }) => {
    setValue({ option: opt.name, value: opt.value });
    setIsOpen(false);
  };

  useEffect(() => {
    // 외부에서의 클릭 이벤트를 감지하기 위한 이벤트 리스너 추가
    document.addEventListener('click', handleOutsideClick);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const toggleDropMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsOpen(prevState => !prevState);
  };
  return (
    <S.SelectBox width={width} margin={margin} ref={selectRef}>
      <S.Select
        variant={variant}
        disabled={disabled}
        onClick={toggleDropMenu}
        value={value.value}
      >
        <div>{value.option}</div>
        <TiArrowUnsorted />
      </S.Select>
      {isOpen && (
        <S.OptionBox variant={variant}>
          {options.map(opt => (
            <S.Item
              variant={variant}
              key={opt.value}
              value={opt.value}
              onClick={() => handleClick(opt)}
            >
              {opt.name}
            </S.Item>
          ))}
        </S.OptionBox>
      )}
    </S.SelectBox>
  );
};
