import React, { FC } from 'react';
import { Text } from '@cmpsr/components';

import { AiTextGeneratorProps } from './types';

export const AiTextGenerator: FC<AiTextGeneratorProps> = (props) => (
  <Text as="p" {...props}>
    {props?.aiTextGeneratorResult || ''}
  </Text>
);
