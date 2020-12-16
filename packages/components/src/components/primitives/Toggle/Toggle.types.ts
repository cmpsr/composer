import { BaseProps } from 'components/Components.types';

export type Props = BaseProps & {
  enabled?: boolean;
  onStateChanged?: (enabled: boolean) => void;
  disabled?: boolean;
};
