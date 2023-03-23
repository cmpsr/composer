import { FC } from 'react';
import type { TextProps } from '@cmpsr/components';

export interface AiTextGeneratorProps extends TextProps {
  aiTextGeneratorResult?: string;
}

export interface AiTextGeneratorStaticMembers {
  Result: FC<AiTextGeneratorProps>;
}

export type AiTextGeneratorType = FC<AiTextGeneratorProps> & AiTextGeneratorStaticMembers;
