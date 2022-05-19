import { generateMdx } from '.';

const mockBundleMDX = jest.fn();
mockBundleMDX.mockImplementation((s) => Promise.resolve({ code: s.source }));
jest.mock('mdx-bundler', () => ({
  bundleMDX: (params) => mockBundleMDX(params),
}));

describe('generateMdx', () => {
  test('should return empty array for empty array', async () => {
    const mdx = await generateMdx([]);
    expect(mdx).toStrictEqual([]);
  });
  test('should return given code for all breakpoints', async () => {
    const code = '<Text>Title</Text>';
    const fakeBlocks = [
      {
        models: [
          {
            base: code,
          },
        ],
        propsValues: [],
      },
    ];
    const mdx = await generateMdx(fakeBlocks);
    expect(mdx).toStrictEqual([
      {
        base: code,
        md: code,
        lg: code,
        xl: code,
        xxl: code,
      },
    ]);
  });
  test('should return given code for each breakpoints', async () => {
    const fakeBlocks = [
      {
        models: [
          {
            base: '<Text>Title base</Text>',
            md: '<Text>Title md</Text>',
            lg: '<Text>Title lg</Text>',
            xl: '<Text>Title xl</Text>',
            xxl: '<Text>Title xxl</Text>',
          },
        ],
        propsValues: [],
      },
    ];
    const mdx = await generateMdx(fakeBlocks);
    expect(mdx).toStrictEqual(fakeBlocks[0].models);
  });
  test('should return appropriate code for each breakpoint', async () => {
    const code = '<Text>Title</Text>';
    const largeCode = '<Text>Large Title</Text>';
    const fakeBlocks = [
      {
        models: [
          {
            base: code,
            lg: largeCode,
          },
        ],
        propsValues: [],
      },
    ];
    const mdx = await generateMdx(fakeBlocks);
    expect(mdx).toStrictEqual([
      {
        base: code,
        md: code,
        lg: largeCode,
        xl: largeCode,
        xxl: largeCode,
      },
    ]);
  });
  test('should return code with replaced string values', async () => {
    const code = '<Text>Title {{title:string}}</Text>';
    const fakeBlocks = [
      {
        models: [
          {
            base: code,
          },
        ],
        propsValues: [
          {
            base: { title: 'base' },
            md: { title: 'md' },
            lg: { title: 'lg' },
            xl: { title: 'xl' },
            xxl: { title: 'xxl' },
          },
        ],
      },
    ];
    const mdx = await generateMdx(fakeBlocks);
    expect(mdx).toStrictEqual([
      {
        base: '<Text>Title base</Text>',
        md: '<Text>Title md</Text>',
        lg: '<Text>Title lg</Text>',
        xl: '<Text>Title xl</Text>',
        xxl: '<Text>Title xxl</Text>',
      },
    ]);
  });
  test('should return code with replaced string values for breakpoint', async () => {
    const code = '<Text>Title {{title:string}}</Text>';
    const fakeBlocks = [
      {
        models: [
          {
            base: code,
          },
        ],
        propsValues: [
          {
            base: { title: 'base' },
            lg: { title: 'lg' },
          },
        ],
      },
    ];
    const mdx = await generateMdx(fakeBlocks);
    expect(mdx).toStrictEqual([
      {
        base: '<Text>Title base</Text>',
        md: '<Text>Title base</Text>',
        lg: '<Text>Title lg</Text>',
        xl: '<Text>Title lg</Text>',
        xxl: '<Text>Title lg</Text>',
      },
    ]);
  });
  test('should return merged code with replaced values for multiple models', async () => {
    const code = '<Text>Title {{title:string}}</Text>';
    const fakeBlocks = [
      {
        models: [
          {
            base: code,
          },
          {
            base: code,
          },
        ],
        propsValues: [
          {
            base: { title: 'base' },
            lg: { title: 'lg' },
          },
          {
            base: { title: 'base1' },
          },
        ],
      },
    ];
    const mdx = await generateMdx(fakeBlocks);
    expect(mdx).toStrictEqual([
      {
        base: '<Text>Title base</Text><Text>Title base1</Text>',
        md: '<Text>Title base</Text><Text>Title base1</Text>',
        lg: '<Text>Title lg</Text><Text>Title base1</Text>',
        xl: '<Text>Title lg</Text><Text>Title base1</Text>',
        xxl: '<Text>Title lg</Text><Text>Title base1</Text>',
      },
    ]);
  });
  test('should return code with replaced number values', async () => {
    const code = '<Text>Value {{value:number}}</Text>';
    const fakeBlocks = [
      {
        models: [
          {
            base: code,
          },
        ],
        propsValues: [
          {
            base: { value: '1' },
            md: { value: '2' },
            lg: { value: '3' },
            xl: { value: '4' },
            xxl: { value: '5' },
          },
        ],
      },
    ];
    const mdx = await generateMdx(fakeBlocks);
    expect(mdx).toStrictEqual([
      {
        base: '<Text>Value 1</Text>',
        md: '<Text>Value 2</Text>',
        lg: '<Text>Value 3</Text>',
        xl: '<Text>Value 4</Text>',
        xxl: '<Text>Value 5</Text>',
      },
    ]);
  });
  test('should return code with replaced values with default value', async () => {
    const code = '<Text>Must use {{value:number:default value}}</Text>';
    const fakeBlocks = [
      {
        models: [
          {
            base: code,
          },
        ],
        propsValues: [],
      },
    ];
    const mdx = await generateMdx(fakeBlocks);
    expect(mdx).toStrictEqual([
      {
        base: '<Text>Must use default value</Text>',
        md: '<Text>Must use default value</Text>',
        lg: '<Text>Must use default value</Text>',
        xl: '<Text>Must use default value</Text>',
        xxl: '<Text>Must use default value</Text>',
      },
    ]);
  });
  // List are not supported yet
  test.skip('should return code with replaced list values', async () => {
    const code = '<Text>Value {{list:(1|2)}}</Text>';
    const fakeBlocks = [
      {
        models: [
          {
            base: code,
          },
        ],
        propsValues: [
          {
            base: { value: '1' },
            lg: { value: '2' },
          },
        ],
      },
    ];
    const mdx = await generateMdx(fakeBlocks);
    expect(mdx).toStrictEqual([
      {
        base: '<Text>Value 1</Text>',
        md: '<Text>Value 1</Text>',
        lg: '<Text>Value 2</Text>',
        xl: '<Text>Value 2</Text>',
        xxl: '<Text>Value 2</Text>',
      },
    ]);
  });
});
