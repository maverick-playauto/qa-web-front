export interface ButtonBaseProps {
  borderColor?: string;
  backgroundColor?: string;
  color?: string;
  fontSize?: string;
}
export interface ButtonProps extends ButtonBaseProps {
  btnContent?: string;
  device?: string;
  event?: () => void;
}

export interface ButtonStyleProps extends ButtonBaseProps {
  borderColor: string;
  backgroundColor: string;
  color: string;
  fontSize: string;
}
