import { BoxProps } from '@cmpsr/components';
import { ReactNode } from 'react';

export interface ToolbarPluginProps {
  isDisabled?: boolean;
  externalActions?: ReactNode;
  toolbarPluginProps?: BoxProps;
}
