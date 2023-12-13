import { KeyboardEvent } from 'react';
import { IAtoms } from '..';

export interface ITextProp extends Pick<IAtoms, 'width' | 'disabled'> {
  /**
   * text name (용도)
   */
  name: string;

  /**
   * text 종류
   */
  variant: 'primary';

  /**
   * 마진 커스텀
   */
  margin?: number;

  /**
   * 패딩 커스텀
   */
  padding?: number;

  /**
   * placeholder
   */
  placeholder?: string;
}

// 셀렉트 css 속성 값
export interface ITextTag
  extends Pick<ITextProp, 'padding' | 'margin' | 'width' | 'variant'> {}
