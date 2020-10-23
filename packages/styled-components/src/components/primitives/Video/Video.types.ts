export type Props = {
  autoPlay?: boolean;
  controls?: boolean;
  className?: string;
  video: Video;
  testId?: string;
};

export type Video = {
  url: string;
};
