import { HTMLInputTypeAttribute, MouseEventHandler } from 'react';
import { IAtoms } from '..';

export interface IButtonProp
  extends Pick<IAtoms, 'children' | 'disabled' | 'width'> {
  /**
   * 버튼 유형
   */
  variant: 'primary' | 'contained' | 'outlined';

  /**
   * 클릭시 이벤트
   */
  onClick?: MouseEventHandler<HTMLButtonElement>;

  /**
   * 마진
   */
  margin?: number;

  /**
   * 패딩
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

  /**
   * 버튼 타입
   */
  type?: HTMLButtonElement;
}

// 버튼 css 속성 값
export interface IButtonTag
  extends Pick<
    IButtonProp,
    'disabled' | 'width' | 'variant' | 'margin' | 'height' | 'padding' | 'type'
  > {}
