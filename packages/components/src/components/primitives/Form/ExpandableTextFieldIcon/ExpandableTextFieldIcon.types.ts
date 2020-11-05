import {
  Shapes,
  CssCustomizableProps,
  IconPositions,
} from 'components/Components.types';
import { ReactNode } from 'react';

export type Props = CssCustomizableProps & {
  expandableTextFieldClassName?: string;
  placeholder: string;
  onChange: (value: string) => void;
  onClickIcon?: () => void;
  shape?: Shapes;
  iconPosition?: IconPositions;
  icon: ReactNode;
};
