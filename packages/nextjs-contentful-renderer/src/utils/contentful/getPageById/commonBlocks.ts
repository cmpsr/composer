import { Block, CommonBlock } from './types';

export const addCommonBlock = (commonBlocks: { items?: CommonBlock[] }) => {
  return (currentContent: Block[]) => {
    let content = [...currentContent];
    const block = getDefaultCommonBlock(commonBlocks);
    content = insertCommonBlock(content, block);
    return content;
  };
};

const getDefaultCommonBlock = (commonBlocks: { items?: CommonBlock[] }) => {
  const blocks = commonBlocks?.items || [];
  const hasCommonBlocks = blocks.length > 0;

  if (!hasCommonBlocks) return null;

  let block = blocks[0];
  const defaultBlock = blocks.find((item) => item.default);

  if (defaultBlock) {
    block = defaultBlock;
  }

  return block;
};

const insertCommonBlock = (content: Block[], commonBlock: CommonBlock, defaultPosition = 0) => {
  if (!commonBlock) return content;

  const contentCopy = [...content];

  const item = {
    models: commonBlock?.block?.modelsCollection?.items,
    propsValues: commonBlock?.block?.propsValue || [],
  };

  let position = defaultPosition;
  if (commonBlock.position) {
    position = commonBlock.position - 1;
  }

  contentCopy.splice(position, 0, item);
  return contentCopy;
};
