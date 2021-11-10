import { Theme } from './types';
import { defaultColors } from './Colors';
import { Text } from './Components/Text';
import { TextPairing } from './Components/TextPairing';
import { textStyles } from './styles';

export const theme: Theme = {
  colors: defaultColors,
  components: {
    Text,
    TextPairing,
  },
  textStyles,
};
