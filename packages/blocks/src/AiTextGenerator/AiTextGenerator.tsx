import React, { FC } from 'react';
import { Flex, Text } from '@cmpsr/components';

import { AiTextGeneratorProps, AiTextGeneratorType } from './types';

export const AiTextGenerator: AiTextGeneratorType = (props) => <Flex {...props} />;

export const AiTextGeneratorPrompt: FC<AiTextGeneratorProps> = (props) => {
  console.debug('AiTextGeneratorPrompt', props);
  return <Text>{''}</Text>;
};

export const AiTextGeneratorResult: FC<AiTextGeneratorProps> = (props) => {
  console.debug('AiTextGeneratorResult', props);
  return <Text>{''}</Text>;
};

AiTextGenerator.Prompt = AiTextGeneratorPrompt;
AiTextGenerator.Result = AiTextGeneratorResult;
