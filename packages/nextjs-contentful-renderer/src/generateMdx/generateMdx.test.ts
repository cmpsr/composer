import { generateMdx } from './generateMdx';

const mockBundleMDX = jest.fn();
mockBundleMDX.mockImplementation((s: { source: string }) => Promise.resolve({ code: `bundled: ${s.source}` }));
jest.mock('mdx-bundler', () => ({
  bundleMDX: (params) => mockBundleMDX(params),
}));

const mockReplaceCmlPlaceholders = jest.fn();
mockReplaceCmlPlaceholders.mockImplementation((m) => m);
jest.mock('@cmpsr/cml', () => {
  const actual = jest.requireActual('@cmpsr/cml');
  return {
    ...actual,
    replaceCmlPlaceholders: (m, v) => mockReplaceCmlPlaceholders(m, v),
  };
});

jest.mock('remark-gfm', () => jest.fn().mockImplementation(() => {}));

describe('generateMdx', () => {
  test('should replace CML templates', async () => {
    const fakeBlocks = [
      {
        models: [{ base: '<Text>Title</Text>' }],
        propsValues: [{ base: { prop: 'value' } }],
      },
      {
        models: [{ base: '<Text>Title</Text>' }],
        propsValues: [],
      },
    ];
    await generateMdx(fakeBlocks);
    expect(mockReplaceCmlPlaceholders).toHaveBeenCalledTimes(fakeBlocks.length);
    fakeBlocks.forEach((block, index) => {
      expect(mockReplaceCmlPlaceholders).toHaveBeenNthCalledWith(
        index + 1,
        block.models[0],
        block.propsValues[0] || {},
      );
    });
  });
  test('should bundle blocks', async () => {
    const fakeBlocks = [
      {
        models: [{ base: '<Text>Title</Text>' }, { base: '<Link>Title</Link>', lg: '<Link>Lg</Link>' }],
        propsValues: [],
      },
    ];
    const mdx = await generateMdx(fakeBlocks);
    expect(mdx).toStrictEqual([
      { base: 'bundled: <Text>Title</Text>' },
      { base: 'bundled: <Link>Title</Link>', lg: 'bundled: <Link>Lg</Link>' },
    ]);
  });
  test('should filter out empty models', async () => {
    const mdx = await generateMdx([
      {
        models: [{ base: '' }],
        propsValues: [],
      },
    ]);
    expect(mdx).toStrictEqual([]);
  });
  test('should use global variables values', async () => {
    const fakeBlocks = [
      {
        models: [{ base: '<Text>globalVariable</Text>' }],
        propsValues: [{ base: {} }],
      },
    ];
    const globalVariables = { base: { globalVariable: 'globalVariableValue' } };
    await generateMdx(fakeBlocks, globalVariables);
    expect(mockReplaceCmlPlaceholders).toHaveBeenCalledTimes(1);
    expect(mockReplaceCmlPlaceholders).toHaveBeenCalledWith(expect.anything(), globalVariables);
  });
  test('should use model vales over global variables values', async () => {
    const fakeBlocks = [
      {
        models: [{ base: '<Text>globalVariable</Text>' }],
        propsValues: [{ base: { globalVariable: 'modelVariableValue' } }],
      },
    ];
    const globalVariables = { base: { globalVariable: 'globalVariableValue' } };
    await generateMdx(fakeBlocks, globalVariables);
    expect(mockReplaceCmlPlaceholders).toHaveBeenCalledTimes(1);
    expect(mockReplaceCmlPlaceholders).toHaveBeenCalledWith(expect.anything(), fakeBlocks[0].propsValues[0]);
  });
});
