export type Props = {
  className?: string;
  imageClassName?: string;
  image: Image;
  testId?: string;
  onLoad?: () => void;
  customCss?: string;
};

export type Image = {
  url: string;
  title: string;
};
