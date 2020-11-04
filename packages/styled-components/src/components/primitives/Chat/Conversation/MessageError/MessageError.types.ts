import { Placements } from 'components/primitives/Chat/Conversation/Message/Message.types';
import { CssCustomizableProps } from 'components/Components.types';

export type Props = CssCustomizableProps & {
  text: string;
  className?: string;
  testId?: string;
  placement?: Placements;
  errorText?: string;
  onErrorClick?: () => void;
};
