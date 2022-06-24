import { insertSection } from '.';

const dummyContent = [
  {
    models: [{ base: '# H1' }, { base: '## H2' }],
    propsValues: [],
  },
];

describe('insertSection', () => {
  test('should return content if there is no section', () => {
    const newContent = insertSection(dummyContent, null, 'unshift');
    expect(newContent).toStrictEqual(dummyContent);
  });

  test('should return an array with section if it has a section but content is null', () => {
    const footer = { model: { base: 'footer' } };
    const newContent = insertSection(null, footer, 'push');
    expect(newContent).toStrictEqual([
      {
        models: [{ base: 'footer' }],
        propsValues: [],
      },
    ]);
  });

  test('should unshift a section to content', () => {
    const navbar = { model: { base: '- opt 1' } };
    const newContent = insertSection(dummyContent, navbar, 'unshift');
    expect(newContent).toStrictEqual([
      {
        models: [{ base: '- opt 1' }],
        propsValues: [],
      },
      ...dummyContent,
    ]);
  });

  test('should push a section into content', () => {
    const footer = { model: { base: 'footer' } };
    const newContent = insertSection(dummyContent, footer, 'push');
    expect(newContent).toStrictEqual([
      ...dummyContent,
      {
        models: [{ base: 'footer' }],
        propsValues: [],
      },
    ]);
  });
});
