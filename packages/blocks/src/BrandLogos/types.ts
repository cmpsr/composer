import { TextPairingVariant, TextVariant } from '@cmpsr/components';
import { Colors } from '@cmpsr/components/lib/theme/ComposerTheme/Colors';

export interface BrandLogosProps {
  backgroundColor?: Colors;
  title?: string;
  description?: string;
  logos: Array<string>;
  textVariant?: TextVariant | TextPairingVariant;
}
