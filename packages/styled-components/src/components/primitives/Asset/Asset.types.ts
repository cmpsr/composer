export type Props = {
  className?: string;
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
