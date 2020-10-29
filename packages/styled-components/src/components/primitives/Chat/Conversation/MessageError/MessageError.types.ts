import { Placements } from '../Message/Message.types';

export type Props = {
  text: string;
  className?: string;
  placement?: Placements;
  errorText?: string;
  onErrorClick?: () => void;
};
