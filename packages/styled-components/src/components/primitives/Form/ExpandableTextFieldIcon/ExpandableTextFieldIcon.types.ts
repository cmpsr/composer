import { Shapes, CssCustomizableProps } from 'components/Components.types';
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

export enum IconPositions {
  Left = 'left',
  Right = 'right',
}
