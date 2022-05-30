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

describe('setDefaultNavbar', () => {
  test('should return null if there is no default navbar', async () => {
    const newContent = await configNavbar({ content: null });
    expect(newContent).toBeNull();
  });

  test('should return original content if there is no default navbar', async () => {
    const newContent = await configNavbar(dummyPageContent);
    expect(newContent).toStrictEqual(dummyContent);
  });

  test('should return an array with navbar if it has a navbar but content is null', async () => {
    const navbar = { model: { base: '- opt 1' } };
    const newContent = await configNavbar({ content: null, navbar });
    expect(newContent).toStrictEqual([
      {
        models: [{ base: '- opt 1' }],
        propsValues: [],
      },
    ]);
  });

  test('should concat navbar to content', async () => {
    const navbar = { model: { base: '- opt 1' } };
    const newContent = await configNavbar({ content: dummyContent, navbar });
    expect(newContent).toStrictEqual([
      {
        models: [{ base: '- opt 1' }],
        propsValues: [],
      },
      ...dummyContent,
    ]);
  });
});
