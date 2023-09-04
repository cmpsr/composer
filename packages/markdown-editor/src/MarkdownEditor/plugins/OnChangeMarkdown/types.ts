import type { Transformer } from '@lexical/markdown';

export type OnChangeMarkdownProps = {
  onChange?: (value: string) => void;
  transformers?: Array<Transformer>;
  debounceTime?: number;
};
