import React, { FC } from 'react';
import { Flex, Text } from '@cmpsr/components';

import { AiTextGeneratorProps, AiTextGeneratorType } from './types';

export const AiTextGenerator: AiTextGeneratorType = (props) => <Flex {...props} />;

export const AiTextGeneratorPrompt: FC<AiTextGeneratorProps> = ({ aiTextGeneratorPrompt, ...rest }) => (
  <Text {...rest}>{aiTextGeneratorPrompt}</Text>
);

export const AiTextGeneratorResult: FC<AiTextGeneratorProps> = ({ aiTextGeneratorResult, ...rest }) => (
  <Text {...rest}>{aiTextGeneratorResult}</Text>
);

AiTextGenerator.Prompt = AiTextGeneratorPrompt;
AiTextGenerator.Result = AiTextGeneratorResult;
