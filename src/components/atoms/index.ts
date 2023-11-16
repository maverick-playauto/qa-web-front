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

  // ----------

  // /**
  //  * 제목
  //  */
  // title?: string;

  // /**
  //  * TailwindCSS ClassName
  //  */
  // className?: string;

  // /**
  //  * 데이터
  //  */
  // list: { name: string; value: string }[];

  // /**
  //  * display Block 여부 (기본 inline)
  //  */
  // block?: Boolean;

  // /**
  //  * 기본 선택 값
  //  */
  // defaultValue?: string;

  // /**
  //  * 부가 설명
  //  */
  // description?: string[];

  // /**
  //  * onClick Event
  //  */
  // onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
