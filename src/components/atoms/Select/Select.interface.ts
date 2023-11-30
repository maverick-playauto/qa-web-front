import { MouseEventHandler } from 'react';
import { IAtoms } from '..';

export interface ISelectProp
  extends Pick<IAtoms, 'children' | 'width' | 'disabled'> {
  /**
   * 셀렉트 종류
   */
  selectType: 'primary';

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
   * 옵션
   */
  options?: { name: string; value: number | string; [key: string]: any }[];

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

  /**
   * Option Area Open여부
   */
  isOpen?: boolean;
}

// 셀렉트 css 속성 값
export interface ISelectboxTag
  extends Pick<ISelectProp, 'padding' | 'margin' | 'width'> {}

export interface ISelectTag
  extends Pick<ISelectProp, 'selectType' | 'disabled'> {}

export interface IOptionTag
  extends Pick<ISelectProp, 'selectType' | 'width' | 'isOpen'> {}

export interface IItemTag extends Pick<ISelectProp, 'selectType'> {}
