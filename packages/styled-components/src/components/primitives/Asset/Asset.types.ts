import { BaseProps } from 'components/Components.types';

export type Props = BaseProps & {
  imageClassName?: string;
  asset: Asset;
  autoPlay?: boolean;
  controls?: boolean;
};

export enum ContentType {
  Image = 'image',
  Video = 'video',
}

export type Asset = {
  contentType: ContentType | null;
  title: string | null;
  url: string | null;
};
