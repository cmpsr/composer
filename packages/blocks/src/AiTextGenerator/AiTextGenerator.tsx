import React, { FC } from 'react';
import { Flex, Text } from '@cmpsr/components';

import { AiTextGeneratorProps, AiTextGeneratorType } from './types';

export const AiTextGenerator: AiTextGeneratorType = (props) => <Flex {...props} />;

export const AiTextGeneratorPrompt: FC<AiTextGeneratorProps> = (props) => {
  const { aiTextGeneratorPrompt } = props;

  console.debug('AiTextGeneratorPrompt', props);

  return <Text>{aiTextGeneratorPrompt}</Text>;
};

export const AiTextGeneratorResult: FC<AiTextGeneratorProps> = (props) => {
  const { aiTextGeneratorResult } = props;

  console.debug('AiTextGeneratorResult', props);

  return <Text>{aiTextGeneratorResult}</Text>;
};

AiTextGenerator.Prompt = AiTextGeneratorPrompt;
AiTextGenerator.Result = AiTextGeneratorResult;
