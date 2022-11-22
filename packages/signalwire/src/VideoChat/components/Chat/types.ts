import { FlexProps } from '@cmpsr/components';

export interface ChatProps extends FlexProps {
  userId: string;
  floating?: boolean;
  channel: string;
}
