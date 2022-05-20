import { getThemeByPageId } from '.';

const mockTheme = {
  fonts: {
    heading: 'Graphik Web',
    body: 'Inter',
  },
  textStyles: {
    'text-header-4XL': {
      fontWeight: 'bold',
    },
  },
};

describe('getThemeByPageId', () => {
  const preview = true;
  const mockQuery = jest.fn();
  const getMockApolloClient: any = (mockQuery: jest.Mock<any, any>) => {
    return {
      query: (params: Record<string, unknown>) => mockQuery(params),
    };
  };

  test('should return default theme', async () => {
    const mockQuery = jest.fn();
    const mockApolloClient = getMockApolloClient(mockQuery);

    mockQuery.mockResolvedValue({
      data: {
        page: {
          themesCollection: {
            items: [
              {
                defaultTheme: true,
                theme: mockTheme,
              },
            ],
          },
        },
      },
    });

    const theme = await getThemeByPageId(mockApolloClient, '123', preview);
    expect(theme).toStrictEqual(mockTheme);
  });

  test('should return the first occurrence if there is more than one as default', async () => {
    const mockApolloClient = getMockApolloClient(mockQuery);

    mockQuery.mockResolvedValue({
      data: {
        page: {
          themesCollection: {
            items: [
              {
                defaultTheme: true,
                theme: mockTheme,
              },
              {
                defaultTheme: true,
                theme: {},
              },
            ],
          },
        },
      },
    });

    const theme = await getThemeByPageId(mockApolloClient, '123', preview);
    expect(theme).toStrictEqual(mockTheme);
  });

  test('should return the first item if there is none as default', async () => {
    const mockApolloClient = getMockApolloClient(mockQuery);

    mockQuery.mockResolvedValue({
      data: {
        page: {
          themesCollection: {
            items: [
              {
                defaultTheme: false,
                theme: mockTheme,
              },
              {
                defaultTheme: false,
                theme: {},
              },
            ],
          },
        },
      },
    });

    const theme = await getThemeByPageId(mockApolloClient, '123', preview);
    expect(theme).toStrictEqual(mockTheme);
  });

  test('should return an empty object if there is no theme configured', async () => {
    const mockApolloClient = getMockApolloClient(mockQuery);

    mockQuery.mockResolvedValue({
      data: {
        page: {
          themesCollection: {
            items: [],
          },
        },
      },
    });

    const theme = await getThemeByPageId(mockApolloClient, '123', preview);
    expect(theme).toEqual({});
  });
});
