import * as React from 'react';

import { MarkdownShortcutPlugin as LexicalMarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';

import { PLAYGROUND_TRANSFORMERS } from '../MarkdownTransformers';

export const MarkdownShortcutPlugin = (): JSX.Element => (
  <LexicalMarkdownShortcutPlugin transformers={PLAYGROUND_TRANSFORMERS} />
);
