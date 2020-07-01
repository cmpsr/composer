import { ReactElement } from 'react';
import { DEFAULT } from 'constants/index';

export const renderFromComponentMap = (
  componentMap: Record<string, () => ReactElement>,
  type: string
): ReactElement => {
  if (!Object.keys(componentMap).includes(type)) return componentMap[DEFAULT]();
  return componentMap[type]();
};
