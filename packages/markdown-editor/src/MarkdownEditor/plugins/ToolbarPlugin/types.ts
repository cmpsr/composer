import { BoxProps } from '@cmpsr/components';
import { ReactNode } from 'react';
import { EditorMode } from '../../types';

export interface ToolbarPluginProps {
  isDisabled?: boolean;
  externalActions?: ReactNode;
  toolbarPluginProps?: BoxProps;
  editorMode: EditorMode;
  toggleEditorMode: () => void;
}
