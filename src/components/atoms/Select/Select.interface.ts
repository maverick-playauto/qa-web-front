import { MouseEventHandler } from 'react';
import { IAtoms } from '..';

export interface ISelectProp extends Pick<IAtoms, 'disabled'> {
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
}

// 버튼 css 속성 값
export interface ISelectTag extends Pick<ISelectProp, 'margin' | 'padding'> {}
