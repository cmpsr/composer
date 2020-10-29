import { CssCustomizableProps } from 'components/Components.types';

export type Props = CssCustomizableProps & {
  imageClassName?: string;
  image: Image;
  onLoad?: () => void;
  customCss?: string;
};

export type Image = {
  url: string;
  title: string;
};
