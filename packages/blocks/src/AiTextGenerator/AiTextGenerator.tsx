import React, { FC } from 'react';
import { Text } from '@cmpsr/components';

import { AiTextGeneratorProps } from './types';

export const AiTextGenerator: FC<AiTextGeneratorProps> = ({ aiTextGeneratorResult, ...rest }) => (
  <Text as="p" {...rest}>
    {aiTextGeneratorResult || ''}
  </Text>
);
