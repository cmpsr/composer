import { configNavbar } from '.';

const mockGetDefaultNavbar = jest.fn();
jest.mock('../utils/contentful/getDefaultNavbar', () => ({
  getDefaultNavbar: (...params) => mockGetDefaultNavbar(...params),
}));

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
    const newContent = await configNavbar({ content: null }, { apolloClient: {} });
    expect(newContent).toBeNull();
  });
  test('should return original content if there is no default navbar', async () => {
    const newContent = await configNavbar(dummyPageContent, { apolloClient: {} });
    expect(newContent).toStrictEqual(dummyContent);
  });

  test('should return an array with navbar if it has a navbar but content is null', async () => {
    const navbar = { model: { base: '- opt 1' } };
    const newContent = await configNavbar({ content: null, navbar }, { apolloClient: {} });
    expect(newContent).toStrictEqual([
      {
        models: [{ base: '- opt 1' }],
        propsValues: [],
      },
    ]);
  });

  test('should concat navbar to content', async () => {
    const navbar = { model: { base: '- opt 1' } };
    const newContent = await configNavbar({ content: dummyContent, navbar }, { apolloClient: {} });
    expect(newContent).toStrictEqual([
      {
        models: [{ base: '- opt 1' }],
        propsValues: [],
      },
      ...dummyContent,
    ]);
  });

  test('should concat defaultNavbar to content', async () => {
    const defaultNavbar = { model: { base: '- opt 1' } };
    mockGetDefaultNavbar.mockResolvedValueOnce(defaultNavbar);
    const newContent = await configNavbar({ content: dummyContent }, { apolloClient: {} });
    expect(newContent).toStrictEqual([
      {
        models: [{ base: '- opt 1' }],
        propsValues: [],
      },
      ...dummyContent,
    ]);
  });

  test('should return defaultNavbar if there is neither content nor navbar', async () => {
    const defaultNavbar = { model: { base: '- opt 1' } };
    mockGetDefaultNavbar.mockResolvedValueOnce(defaultNavbar);
    const newContent = await configNavbar({ content: null }, { apolloClient: {} });
    expect(newContent).toStrictEqual([
      {
        models: [{ base: '- opt 1' }],
        propsValues: [],
      },
    ]);
  });
});
