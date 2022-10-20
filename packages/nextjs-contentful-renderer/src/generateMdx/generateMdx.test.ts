import { generateMdx } from '.';

const mockBundleMDX = jest.fn();
mockBundleMDX.mockImplementation((s) => Promise.resolve({ code: s.source }));
jest.mock('mdx-bundler', () => ({
  bundleMDX: (params) => mockBundleMDX(params),
}));

describe('generateMdx', () => {
  test('should only render breakpoint with models', async () => {
    const code = '<Text>Title</Text>';
    const fakeBlocks = [{ models: [{ base: code }], propsValues: [] }];
    const mdx = await generateMdx(fakeBlocks);
    expect(mdx).toStrictEqual([{ base: code }]);
  });
  test('should render all breakpoint with models', async () => {
    const code = '<Text>Title</Text>';
    const fakeBlocks = [{ models: [{ base: code, lg: code }], propsValues: [] }];
    const mdx = await generateMdx(fakeBlocks);
    expect(mdx).toStrictEqual([{ base: code, lg: code }]);
  });
  test('should replace props', async () => {
    const fakeBlocks = [
      {
        models: [{ base: '<Text>{{title:string}}</Text>' }],
        propsValues: [{ base: { title: 'base' } }],
      },
    ];
    const mdx = await generateMdx(fakeBlocks);
    expect(mdx).toStrictEqual([
      {
        base: '<Text>base</Text>',
      },
    ]);
  });
  test('should replace props in all breakpoints', async () => {
    const fakeBlocks = [
      {
        models: [{ base: '<Text>{{title:string}}</Text>', lg: '<Text size="m">{{title:string}}</Text>' }],
        propsValues: [{ base: { title: 'base' }, lg: { title: 'lg' } }],
      },
    ];
    const mdx = await generateMdx(fakeBlocks);
    expect(mdx).toStrictEqual([
      {
        base: '<Text>base</Text>',
        lg: '<Text size="m">lg</Text>',
      },
    ]);
  });
  test('should reuse props values', async () => {
    const fakeBlocks = [
      {
        models: [{ base: '<Text>{{title:string}}</Text>', xxl: '<Text size="m">{{title:string}}</Text>' }],
        propsValues: [{ base: { title: 'title' } }],
      },
    ];
    const mdx = await generateMdx(fakeBlocks);
    expect(mdx).toStrictEqual([
      {
        base: '<Text>title</Text>',
        xxl: '<Text size="m">title</Text>',
      },
    ]);
  });
  test('should reuse model and set different prop values', async () => {
    const fakeBlocks = [
      {
        models: [{ base: '<Text>{{title:string}}</Text>' }],
        propsValues: [{ base: { title: 'base' }, xxl: { title: 'xxl' } }],
      },
    ];
    const mdx = await generateMdx(fakeBlocks);
    expect(mdx).toStrictEqual([
      {
        base: '<Text>base</Text>',
        xxl: '<Text>xxl</Text>',
      },
    ]);
  });
  test('should merge prop values', async () => {
    const fakeBlocks = [
      {
        models: [{ base: '<Text>{{title:string}}-{{subtitle:string}}</Text>' }],
        propsValues: [
          {
            base: { title: 'base', subtitle: 'subtitle' },
            lg: { subtitle: 'large subtitle' },
            xxl: { title: 'xxl' },
          },
        ],
      },
    ];
    const mdx = await generateMdx(fakeBlocks);
    expect(mdx).toStrictEqual([
      {
        base: '<Text>base-subtitle</Text>',
        lg: '<Text>base-large subtitle</Text>',
        xxl: '<Text>xxl-large subtitle</Text>',
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
        base: '<Text>Title base</Text>',
        lg: '<Text>Title lg</Text>',
      },
      {
        base: '<Text>Title base1</Text>',
      },
    ]);
  });
  test('should return code with replaced number values', async () => {
    const code = '<Text>Value {{value:number}}</Text>';
    const fakeBlocks = [{ models: [{ base: code }], propsValues: [{ base: { value: '1' } }] }];
    const mdx = await generateMdx(fakeBlocks);
    expect(mdx).toStrictEqual([{ base: '<Text>Value 1</Text>' }]);
  });
  test('should return code with replaced values with default value', async () => {
    const code = '<Text>Must use {{value:number:default value}}</Text>';
    const fakeBlocks = [{ models: [{ base: code }], propsValues: [] }];
    const mdx = await generateMdx(fakeBlocks);
    expect(mdx).toStrictEqual([{ base: '<Text>Must use default value</Text>' }]);
  });
  test('should return code with replaced list values', async () => {
    const code = '<Text>Value {{value:list(1|2)}}</Text>';
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
        lg: '<Text>Value 2</Text>',
      },
    ]);
  });
  test('should return code with replaced list values with default value', async () => {
    const code = '<Text>Value {{value:list(1|2):3}}</Text>';
    const fakeBlocks = [{ models: [{ base: code }], propsValues: [] }];
    const mdx = await generateMdx(fakeBlocks);
    expect(mdx).toStrictEqual([{ base: '<Text>Value 3</Text>' }]);
  });
  test('should handle multiple templates in the same line', async () => {
    const code = '<Text>Value {{value1:number}}-{{value2:string}}</Text>';
    const fakeBlocks = [{ models: [{ base: code }], propsValues: [{ base: { value1: '1', value2: '2' } }] }];
    const mdx = await generateMdx(fakeBlocks);
    expect(mdx).toStrictEqual([{ base: '<Text>Value 1-2</Text>' }]);
  });
  test('should render component with object props', async () => {
    const fakeBlocks = [
      {
        models: [{ base: '<HighlightedText>{{legend:Text:HighlightedText.Legend}}</HighlightedText>' }],
        propsValues: [{ base: { legend: { children: 'Legend' } } }],
      },
    ];
    const mdx = await generateMdx(fakeBlocks);
    expect(mdx).toStrictEqual([
      { base: '<HighlightedText><HighlightedText.Legend >Legend</HighlightedText.Legend></HighlightedText>' },
    ]);
  });
  test('should render component with string props', async () => {
    const fakeBlocks = [
      {
        models: [{ base: '<HighlightedText>{{action:Action:HighlightedText.Link}}</HighlightedText>' }],
        propsValues: [{ base: { action: 'href="#"' } }],
      },
    ];
    const mdx = await generateMdx(fakeBlocks);
    expect(mdx).toStrictEqual([{ base: '<HighlightedText><HighlightedText.Link href="#"/></HighlightedText>' }]);
  });
  test('should render component children as an array', async () => {
    const fakeBlocks = [
      {
        models: [{ base: '<HighlightedText>{{title:TextPairing:HighlightedText.TextPairing}}</HighlightedText>' }],
        propsValues: [
          {
            base: {
              title: {
                variant: 'textpairing-header-4XL',
                children: [
                  '{{titleLabel:Text:HighlightedText.TextPairing.Label}}',
                  '{{titleSubLabel:Text:HighlightedText.TextPairing.SubLabel}}',
                ],
              },
              titleLabel: { children: 'Label' },
              titleSubLabel: { color: 'text-secondary', children: 'SubLabel' },
            },
          },
        ],
      },
    ];
    const mdx = await generateMdx(fakeBlocks);
    expect(mdx).toStrictEqual([
      {
        base:
          '<HighlightedText><HighlightedText.TextPairing variant="textpairing-header-4XL" ><HighlightedText.TextPairing.Label >Label</HighlightedText.TextPairing.Label>\n<HighlightedText.TextPairing.SubLabel color="text-secondary" >SubLabel</HighlightedText.TextPairing.SubLabel></HighlightedText.TextPairing></HighlightedText>',
      },
    ]);
  });
  test('should render component children as an array merging nested props', async () => {
    const fakeBlocks = [
      {
        models: [{ base: '<HighlightedText>{{title:TextPairing:HighlightedText.TextPairing}}</HighlightedText>' }],
        propsValues: [
          {
            base: {
              title: {
                variant: 'textpairing-header-4XL',
                children: [
                  '{{titleLabel:Text:HighlightedText.TextPairing.Label}}',
                  '{{titleSubLabel:Text:HighlightedText.TextPairing.SubLabel}}',
                ],
              },
              titleLabel: { children: 'Label' },
              titleSubLabel: { color: 'text-secondary', children: 'SubLabel' },
            },
            xxl: {
              title: { variant: 'textpairing-header-3XL' },
            },
          },
        ],
      },
    ];
    const mdx = await generateMdx(fakeBlocks);
    expect(mdx).toStrictEqual([
      {
        base:
          '<HighlightedText><HighlightedText.TextPairing variant="textpairing-header-4XL" ><HighlightedText.TextPairing.Label >Label</HighlightedText.TextPairing.Label>\n<HighlightedText.TextPairing.SubLabel color="text-secondary" >SubLabel</HighlightedText.TextPairing.SubLabel></HighlightedText.TextPairing></HighlightedText>',
        xxl:
          '<HighlightedText><HighlightedText.TextPairing variant="textpairing-header-3XL" ><HighlightedText.TextPairing.Label >Label</HighlightedText.TextPairing.Label>\n<HighlightedText.TextPairing.SubLabel color="text-secondary" >SubLabel</HighlightedText.TextPairing.SubLabel></HighlightedText.TextPairing></HighlightedText>',
      },
    ]);
  });
  test('should not render component if value is not set', async () => {
    const fakeBlocks = [
      {
        models: [{ base: '<HighlightedText>{{legend:Text:HighlightedText.Legend}}</HighlightedText>' }],
        propsValues: [],
      },
    ];
    const mdx = await generateMdx(fakeBlocks);
    expect(mdx).toStrictEqual([{ base: '<HighlightedText></HighlightedText>' }]);
  });
  test('should not render component if value is "undefined"', async () => {
    const fakeBlocks = [
      {
        models: [{ base: '<HighlightedText>{{legend:Text:HighlightedText.Legend}}</HighlightedText>' }],
        propsValues: [{ base: { legend: 'undefined' } }],
      },
    ];
    const mdx = await generateMdx(fakeBlocks);
    expect(mdx).toStrictEqual([{ base: '<HighlightedText></HighlightedText>' }]);
  });
  test('should add BoxProps to component', async () => {
    const fakeBlocks = [
      {
        models: [{ base: '<HighlightedText {{props:BoxProps}} />' }],
        propsValues: [{ base: { props: 'color="red"' } }],
      },
    ];
    const mdx = await generateMdx(fakeBlocks);
    expect(mdx).toStrictEqual([{ base: '<HighlightedText color="red" />' }]);
  });
  test('should add object BoxProps to component', async () => {
    const fakeBlocks = [
      {
        models: [{ base: '<HighlightedText {{props:BoxProps}} />' }],
        propsValues: [{ base: { props: { color: 'red' } } }],
      },
    ];
    const mdx = await generateMdx(fakeBlocks);
    expect(mdx).toStrictEqual([{ base: '<HighlightedText color="red"  />' }]);
  });
  test('should add FlexProps to component', async () => {
    const fakeBlocks = [
      {
        models: [{ base: '<HighlightedText {{props:FlexProps}} />' }],
        propsValues: [{ base: { props: 'color="red"' } }],
      },
    ];
    const mdx = await generateMdx(fakeBlocks);
    expect(mdx).toStrictEqual([{ base: '<HighlightedText color="red" />' }]);
  });
  test('should add object FlexProps to component', async () => {
    const fakeBlocks = [
      {
        models: [{ base: '<HighlightedText {{props:FlexProps}} />' }],
        propsValues: [{ base: { props: { color: 'red' } } }],
      },
    ];
    const mdx = await generateMdx(fakeBlocks);
    expect(mdx).toStrictEqual([{ base: '<HighlightedText color="red"  />' }]);
  });
  test('should render Image component', async () => {
    const fakeBlocks = [
      {
        models: [{ base: '<div>{{image:Image:Image}}<div/>' }],
        propsValues: [{ base: { image: { src: 'https://image.url', alt: 'Image alt' } } }],
      },
    ];
    const mdx = await generateMdx(fakeBlocks);
    expect(mdx).toStrictEqual([{ base: '<div><Image src="https://image.url" alt="Image alt" /><div/>' }]);
  });
});
