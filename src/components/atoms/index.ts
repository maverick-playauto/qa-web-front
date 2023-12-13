export interface IAtoms {
  /**
   * 이름, ReactiveVar Key 값
   */
  name: string;

  /**
   * 자식 Type
   */
  children?: React.ReactNode;

  /**
   * 선택불가처리
   */
  disabled?: boolean;

  /**
   * 너비 ( : 100%)
   */
  width?: 'xxs' | 'xs' | 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'full';
}
