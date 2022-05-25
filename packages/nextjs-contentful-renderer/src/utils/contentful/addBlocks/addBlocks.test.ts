import { addBlockByPosition } from '.';

const dummyBlock = {
  propsValue: [],
  modelsCollection: {
    items: [
      {
        base: '- opt1',
      },
    ],
  },
};

describe('add blocks helpers', () => {
  test('should return an empty array if blocks fields are null', () => {
    const commonBlocks = addBlockByPosition(null)([]);
    expect(commonBlocks.length).toBe(0);
  });
  test('should insert commonBlock at the beginning', () => {
    const commonBlocks = addBlockByPosition(dummyBlock)([
      {
        models: [{ base: '# H1' }, { base: '## H2' }],
        propsValues: [],
      },
    ]);
    expect(commonBlocks.length).toBe(2);
    expect(commonBlocks[0]).toStrictEqual({
      models: [{ base: '- opt1' }],
      propsValues: [],
    });
  });
  test('should insert block if position has a negative value', () => {
    const commonBlocks = addBlockByPosition(
      dummyBlock,
      -1
    )([
      {
        models: [{ base: '# H1' }, { base: '## H2' }],
        propsValues: [],
      },
    ]);
    expect(commonBlocks.length).toBe(2);
    expect(commonBlocks[0]).toStrictEqual({
      models: [{ base: '- opt1' }],
      propsValues: [],
    });
  });
  test('should insert block at the end', () => {
    const commonBlocks = addBlockByPosition(
      dummyBlock,
      2
    )([
      {
        models: [{ base: '# H1' }, { base: '## H2' }],
        propsValues: [],
      },
    ]);
    expect(commonBlocks.length).toBe(2);
    expect(commonBlocks[1]).toStrictEqual({
      models: [{ base: '- opt1' }],
      propsValues: [],
    });
  });

  test('should insert a block if position arg is a function', () => {
    const commonBlocks = addBlockByPosition(
      dummyBlock,
      (content) => content.length
    )([
      {
        models: [{ base: '# H1' }, { base: '## H2' }],
        propsValues: [],
      },
    ]);
    expect(commonBlocks.length).toBe(2);
    expect(commonBlocks[1]).toStrictEqual({
      models: [{ base: '- opt1' }],
      propsValues: [],
    });
  });
});
