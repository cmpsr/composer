export enum Color {
  Black = 'black',
  Primary = 'primary',
  Secondary = 'secondary',
}

export enum MessagePlacement {
  Left = 'left',
  Right = 'right',
}

type Media = {
  contentType: string;
  url: string;
};

export type Props = {
  text?: string;
  className?: string;
  testId?: string;
  backgroundColor?: Color;
  placement?: MessagePlacement;
  time?: string;
  mediaFiles?: Media[];
  onMediaClick?: (mediaFiles: Media[]) => void;
  onLoadMedia?: () => void;
};
