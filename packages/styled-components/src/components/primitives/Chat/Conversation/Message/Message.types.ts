export enum Colors {
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

export type Props = {
  text?: string;
  className?: string;
  testId?: string;
  color?: Colors;
  placement?: Placements;
  time?: string;
  mediaFiles?: Media[];
  onMediaClick?: (mediaFiles: Media[]) => void;
  onLoadMedia?: () => void;
};
