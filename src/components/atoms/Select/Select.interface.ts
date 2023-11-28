import { MouseEventHandler } from 'react';
import { IAtoms } from '..';

export interface ISelectProp extends Pick<IAtoms, 'width' | 'disabled'> {
  /**
   * onChange Event
   */
  onChange?: MouseEventHandler<HTMLSelectElement>;

  /**
   * 마진 커스텀
   */
  margin?: number;

  /**
   * 패딩 커스텀
   */
  padding?: number;

  /**
   * 로딩 여부
   */
  loading?: boolean;

  /**
   * 옵션
   */
  options?: { name: string; value: number | string }[];

  /**
   * placeholder
   */
  placeholder?: string;

  /**
   * Select 주제
   */
  subject?: string;

  /**
   * option value 값
   */
  value?: string | number | 'default';
}

// 버튼 css 속성 값
export interface ISelectTag
  extends Pick<
    ISelectProp,
    'value' | 'width' | 'options' | 'margin' | 'padding'
  > {}
