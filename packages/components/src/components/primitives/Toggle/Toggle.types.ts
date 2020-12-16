import { BaseProps } from 'components/Components.types';

export type Props = BaseProps & {
  on?: boolean;
  onStateChanged?: (enabled: boolean) => void;
  disabled?: boolean;
};
