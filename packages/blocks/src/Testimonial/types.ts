import { TextVariant, Theme } from '@cmpsr/components';

export interface TestimonialProps {
  backgroundColor?: ThisType<Theme['colors']>;
  legend?: string;
  link?: { label: string; href: string };
  association?: string;
  name: string;
  testimony: string;
  testimonyTextVariant?: TextVariant;
  imageUrl: string;
}
