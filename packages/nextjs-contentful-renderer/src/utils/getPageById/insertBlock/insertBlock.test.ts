import { insertBlock } from '.';

const dummyContent = [
  {
    models: [{ base: '# H1' }, { base: '## H2' }],
    propsValues: [],
  },
];

describe('insertBlock', () => {
  test('should return original content if there is no block', () => {
    const newContent = insertBlock(dummyContent, null, 'unshift');
    expect(newContent).toStrictEqual(dummyContent);
  });

  test('should return content with the new block inserted even when the originalContent is null', () => {
    const footer = { models: [{ base: 'footer' }], propsValues: [] };
    const newContent = insertBlock(null, footer, 'push');
    expect(newContent).toStrictEqual([
      {
        models: [{ base: 'footer' }],
        propsValues: [],
      },
    ]);
  });

  test('should unshift a block to content', () => {
    const navbar = { models: [{ base: '- opt 1' }], propsValues: [] };
    const newContent = insertBlock(dummyContent, navbar, 'unshift');
    expect(newContent).toStrictEqual([
      {
        models: [{ base: '- opt 1' }],
        propsValues: [],
      },
      ...dummyContent,
    ]);
  });

  test('should push a block into content', () => {
    const footer = { models: [{ base: 'footer' }], propsValues: [] };
    const newContent = insertBlock(dummyContent, footer, 'push');
    expect(newContent).toStrictEqual([
      ...dummyContent,
      {
        models: [{ base: 'footer' }],
        propsValues: [],
      },
    ]);
  });
});
