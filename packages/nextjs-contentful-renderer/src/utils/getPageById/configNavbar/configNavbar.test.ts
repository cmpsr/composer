import { configNavbar } from './configNavbar';

const dummyContent = [
  {
    models: [{ base: '# H1' }, { base: '## H2' }],
    propsValues: [],
  },
];

const dummyPageContent = {
  content: dummyContent,
};

const navbar = [{ models: [{ base: '- opt 1' }], propsValues: [] }];

describe('configNavbar', () => {
  test('should return content if there is no navbar', () => {
    const newContent = configNavbar(dummyPageContent);
    expect(newContent).toStrictEqual(dummyContent);
  });

  test('should return an array with navbar if it has a navbar but content is null', () => {
    const newContent = configNavbar({ content: null, navbar });
    expect(newContent).toStrictEqual([
      {
        models: [{ base: '- opt 1' }],
        propsValues: [],
      },
    ]);
  });

  test('should concat navbar to content', () => {
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
