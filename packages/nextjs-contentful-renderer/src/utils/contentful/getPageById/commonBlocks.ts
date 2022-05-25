import { Block, BlockResult } from './types';

export const addCommonBlock = (block: BlockResult, position?: number | ((currentContent: Block[]) => number)) => {
  return (currentContent: Block[]) => {
    let content = [...currentContent];
    let newPosition = position as number;

    if (typeof position === 'function') {
      newPosition = position(content);
    }

    content = insertCommonBlock(content, block, newPosition);
    return content;
  };
};

const insertCommonBlock = (content: Block[], newBlock: BlockResult, position = 0) => {
  if (!newBlock) return content;

  const contentCopy = [...content];

  const item = {
    models: newBlock?.modelsCollection?.items,
    propsValues: newBlock?.propsValue || [],
  };

  contentCopy.splice(position, 0, item);
  return contentCopy;
};
