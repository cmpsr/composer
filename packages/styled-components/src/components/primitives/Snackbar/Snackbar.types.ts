export type ShowSnackbarProps = {
  className?: string;
  testId?: string;
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

export type SnackbarProps = {
  className?: string;
  testId?: string;
};

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
