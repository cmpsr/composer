import { configNavbar } from '.';

const dummyContent = [
  {
    models: [{ base: '# H1' }, { base: '## H2' }],
    propsValues: [],
  },
];

const dummyPageContent = {
  content: dummyContent,
};

describe('configNavbar', () => {
  test('should return content if there is no navbar', () => {
    const newContent = configNavbar(dummyPageContent);
    expect(newContent).toStrictEqual(dummyContent);
  });

  test('should return an array with navbar if it has a navbar but content is null', () => {
    const navbar = { model: { base: '- opt 1' } };
    const newContent = configNavbar({ content: null, navbar });
    expect(newContent).toStrictEqual([
      {
        models: [{ base: '- opt 1' }],
        propsValues: [],
      },
    ]);
  });

  test('should concat navbar to content', () => {
    const navbar = { model: { base: '- opt 1' } };
    const newContent = configNavbar({ content: dummyContent, navbar });
    expect(newContent).toStrictEqual([
      {
        models: [{ base: '- opt 1' }],
        propsValues: [],
      },
      ...dummyContent,
    ]);
  });
});
