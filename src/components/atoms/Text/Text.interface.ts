import { KeyboardEvent } from 'react';
import { IAtoms } from '..';

export interface ITextProp
  extends Pick<IAtoms, 'children' | 'width' | 'disabled'> {
  /**
   * text id값
   */
  id: string;

  /**
   * text value값
   */
  value?: any;

  /**
   * text 종류
   */
  inputType: 'primary';

  /**
   * onChange Event
   */
  onChange?: KeyboardEvent<HTMLInputElement>;

  /**
   * 마진 커스텀
   */
  margin?: number;

  /**
   * 패딩 커스텀
   */
  padding?: number;

  /**
   * masking
   */
  masking?: 'number' | 'string' | '';

  /**
   * placeholder
   */
  placeholder?: string;
}

// 셀렉트 css 속성 값
export interface ITextTag
  extends Pick<ITextProp, 'padding' | 'margin' | 'width'> {}
