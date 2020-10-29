import { BaseProps } from 'components/Components.types';

export type Props = BaseProps & {
  autoPlay?: boolean;
  controls?: boolean;
  video: Video;
};

export type Video = {
  url: string;
};
