import { Block } from '@cmpsr/cml';

export const insertBlock = (originalContent: Block[], block: Block, method: 'unshift' | 'push') => {
  if (!block) return originalContent;

  const content = Array.from(originalContent || []);
  content[method](block);

  return content;
};
