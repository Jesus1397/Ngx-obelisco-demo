export type MediaSizes = 'sm' | 'md' | 'lg';

export interface Media {
  src?: string;
}

export enum EnumMediaSizes {
  Sm = 'sm',
  Md = 'md',
  Lg = 'lg'
}

export interface MediaImage extends Media {
  alt?: string;
}
export interface MediaVideo extends Media {
  track?: string;
  title?: string;
}
export interface MediaIframe extends Media {
  title?: string;
}
export interface MediaPanel extends Media {
  size?: MediaSizes;
  alt?: string;
}
export interface MediaHeader extends Media {
  route?: string;
  alt?: string;
  width?: string;
  height?: string;
  customClasses?: string;
}
