import { generateMdx } from '.';

const mockBundleMDX = jest.fn();
mockBundleMDX.mockImplementation((s: { source: string }) => Promise.resolve({ code: `bundled: ${s.source}` }));
jest.mock('mdx-bundler', () => ({
  bundleMDX: (params) => mockBundleMDX(params),
}));

const mockReplaceCmlTemplates = jest.fn();
mockReplaceCmlTemplates.mockImplementation((m) => m);
jest.mock('@cmpsr/cml', () => {
  const actual = jest.requireActual('@cmpsr/cml');
  return {
    ...actual,
    replaceCmlTemplates: (m, v) => mockReplaceCmlTemplates(m, v),
  };
});

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
    expect(mockReplaceCmlTemplates).toHaveBeenCalledTimes(fakeBlocks.length);
    fakeBlocks.forEach((block, index) => {
      expect(mockReplaceCmlTemplates).toHaveBeenNthCalledWith(index + 1, block.models[0], block.propsValues[0] || {});
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
});
