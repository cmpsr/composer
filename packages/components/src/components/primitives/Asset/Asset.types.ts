import { FunctionComponent } from 'react';
import { BaseProps } from 'components/Components.types';

export type Props = BaseProps & {
  imageClassName?: string;
  asset: Asset;
  autoPlay?: boolean;
  controls?: boolean;
};

export type Type = FunctionComponent<Props> & {
  ContentType?: typeof ContentType;
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
