import { Block, BlockResult } from '../getPageById/types';

export const addBlockByPosition = (block: BlockResult, position?: number | ((currentContent: Block[]) => number)) => {
  return (currentContent: Block[]) => {
    let newPosition = position as number;

    if (typeof position === 'function') {
      newPosition = position(currentContent);
    }

    return insertBlock(currentContent, block, newPosition);
  };
};

const insertBlock = (content: Block[], newBlock: BlockResult, position = 0) => {
  if (!newBlock) return content;

  const contentCopy = [...content];

  const item = getBlockFromBlockResult(newBlock);

  contentCopy.splice(position, 0, item);
  return contentCopy;
};

export const getBlockFromBlockResult = (blockResult: BlockResult) => {
  return {
    models: blockResult?.modelsCollection?.items,
    propsValues: blockResult?.propsValue || [],
  };
};

export const pushBlocksCollection = (blocksResult: BlockResult[]) => {
  return (currentContent: Block[]) => {
    const pageContent = blocksResult?.map(getBlockFromBlockResult) || [];
    return [...currentContent, ...pageContent];
  };
};
