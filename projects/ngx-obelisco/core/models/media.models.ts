export type ImageMediaSizes = 'sm' | 'md' | 'lg';

export interface Media {
  src?: string;
  alt?: string;
  track?: string;
  title?: string;
  size?: ImageMediaSizes;
}

export enum EnumImageMediaSizes {
  Sm = 'sm',
  Md = 'md',
  Lg = 'lg'
}
