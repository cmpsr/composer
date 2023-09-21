import { BoxProps } from '@cmpsr/components';

export type MarkdownEditorProps = {
  initialValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  isReadonly?: boolean;
  height?: string;
  minHeight?: string;
  width?: string;
  maxWidth?: string;
  color?: string;
  backgroundColor?: string;
  border?: string;
  borderColor?: string;
  borderRadius?: string;
  initialValueVersion?: string;
  onChangeDebounceInterval?: number;
  editorContentProps?: BoxProps;
  editorContainerProps?: BoxProps;
  externalToolbarActions?: React.ReactNode;
};
