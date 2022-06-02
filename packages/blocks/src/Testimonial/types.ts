import { TextVariant } from '@cmpsr/components';
import { Colors } from '@cmpsr/components/lib/theme/ComposerTheme/Colors';

export interface TestimonialProps {
  backgroundColor?: Colors;
  legend?: string;
  link?: { label: string; href: string };
  association?: string;
  name: string;
  testimony: string;
  testimonyTextVariant?: TextVariant;
  imageUrl: string;
}
