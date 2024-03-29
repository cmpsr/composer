import { BoxProps } from '@cmpsr/components';
import { CSSProperties, ReactNode } from 'react';

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
  contentProps?: BoxProps;
  containerProps?: BoxProps;
  contentEditableStyles?: CSSProperties;
  externalToolbarActions?: ReactNode;
  toolbarPluginProps?: BoxProps;
  editorMode?: EditorMode;
};

export enum EditorMode {
  RichText = 'rich-text',
  PlainText = 'plain-text',
}
