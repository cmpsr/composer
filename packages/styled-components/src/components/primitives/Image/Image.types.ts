import { BaseProps } from 'components/Components.types';

export type Props = BaseProps & {
  imageClassName?: string;
  image: Image;
  onLoad?: () => void;
};

export type Image = {
  url: string;
  title: string;
};
