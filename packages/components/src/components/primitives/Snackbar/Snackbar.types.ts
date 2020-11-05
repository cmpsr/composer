import { BaseProps } from 'components/Components.types';

export type ShowSnackbarProps = BaseProps & {
  message: string;
  description?: string;
  textPosition?: TextPositions;
  type?: Types;
  position?: Positions;
  autoClose?: number;
  action?: {
    childAction: React.ReactNode;
    onClickAction?: () => void;
  };
  onClose?: () => void;
};

export type SnackbarProps = BaseProps;

export enum Types {
  Default = 'default',
  Success = 'success',
  Warning = 'warning',
  Error = 'error',
}

export enum TextPositions {
  Left = 'left',
  Right = 'right',
}

export enum Positions {
  TopCenter = 'top-center',
  TopRight = 'top-right',
  TopLeft = 'top-left',
  BottomRight = 'bottom-right',
  BottomCenter = 'bottom-center',
  BottomLeft = 'bottom-left',
}
