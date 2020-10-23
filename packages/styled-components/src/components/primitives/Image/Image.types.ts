export type Props = {
  className?: string;
  imageClassName?: string;
  image: Image;
  testId?: string;
  onLoad?: () => void;
};

export type Image = {
  url: string;
  title: string;
};
