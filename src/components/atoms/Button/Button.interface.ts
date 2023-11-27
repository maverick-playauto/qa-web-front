import { MouseEventHandler } from 'react';
import { IAtoms } from '..';

export interface IButtonProp
  extends Pick<IAtoms, 'children' | 'disabled' | 'width'> {
  /**
   * 버튼 종류
   */
  buttonType: 'text' | 'contained' | 'outlined';

  /**
   * onClick Event
   */
  onClick?: MouseEventHandler<HTMLButtonElement>;

  /**
   * 마진 커스텀
   */
  margin?: number;

  /**
   * 패딩 커스텀
   */
  padding?: number;

  /**
   * 버튼 높이
   */
  height?: number;

  /**
   * 로딩 여부
   */
  loading?: boolean;
}

// 버튼 css 속성 값
export interface IButtonTag
  extends Pick<
    IButtonProp,
    'disabled' | 'width' | 'buttonType' | 'margin' | 'height' | 'padding'
  > {}
