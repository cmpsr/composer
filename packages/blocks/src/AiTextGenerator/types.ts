import { FC } from 'react';
import type { TextProps } from '@cmpsr/components';

export interface AiTextGeneratorProps extends TextProps {
  aiTextGeneratorPrompt?: string;
  aiTextGeneratorResult?: string;
}

export interface AiTextGeneratorStaticMembers {
  Prompt: FC<AiTextGeneratorProps>;
  Result: FC<AiTextGeneratorProps>;
}

export type AiTextGeneratorType = FC<AiTextGeneratorProps> & AiTextGeneratorStaticMembers;
