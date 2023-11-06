export interface Square {
  type: 'square';
  size: { string: string };
}

export interface Rectangle<K> {
  type: 'rectangle';
  size: K;
}

export interface Custom {
  type: 'custom';
  top: string;
  right: string;
  bottom: string;
  left: string;
}

export interface BaseStyle {
  width?: string;
  height?: string;
  bgColor?: string;
  borderColor?: string;
  color?: string;
}
