export type ImageMediaSizes = 'sm' | 'md' | 'lg';

export interface Media {
  src?: string;
  alt?: string;
  track?: string;
  title?: string;
  size?: ImageMediaSizes;
}
