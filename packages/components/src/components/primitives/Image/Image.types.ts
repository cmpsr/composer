import { CssCustomizableProps } from 'components/Components.types';

export type Props = CssCustomizableProps & {
  imageClassName?: string;
  image: Image;
  onLoad?: () => void;
};

export type Image = {
  url: string;
  title: string;
};
