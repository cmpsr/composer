import { CssCustomizableProps } from 'components/Components.types';

export enum BackgroundColors {
  Black = 'black',
  Primary = 'primary',
  Secondary = 'secondary',
}

export enum Placements {
  Left = 'left',
  Right = 'right',
}

type Media = {
  contentType: string;
  url: string;
};

export type Props = CssCustomizableProps & {
  text?: string;
  backgroundColor?: BackgroundColors;
  placement?: Placements;
  time?: string;
  mediaFiles?: Media[];
  onMediaClick?: (mediaFiles: Media[]) => void;
  onLoadMedia?: () => void;
};
