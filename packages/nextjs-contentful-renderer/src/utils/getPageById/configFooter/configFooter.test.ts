import { configFooter } from '.';

const dummyContent = [
  {
    models: [{ base: '# H1' }, { base: '## H2' }],
    propsValues: [],
  },
];

const dummyPageContent = {
  content: dummyContent,
};

describe('configFooter', () => {
  test('should return content if there is no footer', () => {
    const newContent = configFooter(dummyPageContent);
    expect(newContent).toStrictEqual(dummyContent);
  });

  test('should return an array with footer if it has a footer but content is null', () => {
    const footer = { model: { base: '- opt 1' } };
    const newContent = configFooter({ content: null, footer });
    expect(newContent).toStrictEqual([
      {
        models: [{ base: '- opt 1' }],
        propsValues: [],
      },
    ]);
  });

  test('should concat footer to content', () => {
    const footer = { model: { base: '- opt 1' } };
    const newContent = configFooter({ content: dummyContent, footer });
    expect(newContent).toStrictEqual([
      ...dummyContent,
      {
        models: [{ base: '- opt 1' }],
        propsValues: [],
      },
    ]);
  });
});
