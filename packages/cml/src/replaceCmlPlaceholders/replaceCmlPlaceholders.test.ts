import { replaceCmlPlaceholders } from '.';

describe('replaceCmlPlaceholders', () => {
  test('should only return breakpoint with mdx', () => {
    const code = '<Text>Title</Text>';
    const model = { base: code };
    const mdx = replaceCmlPlaceholders(model, {});
    expect(mdx).toStrictEqual({ base: code });
  });
  test('should return all breakpoint with mdx', () => {
    const code = '<Text>Title</Text>';
    const model = { base: code, lg: code };
    const mdx = replaceCmlPlaceholders(model, {});
    expect(mdx).toStrictEqual({ base: code, lg: code });
  });
  test('should replace props', () => {
    const model = { base: '<Text>{{title:string}}</Text>' };
    const values = { base: { title: 'base' } };
    const mdx = replaceCmlPlaceholders(model, values);
    expect(mdx).toStrictEqual({ base: '<Text>base</Text>' });
  });
  test('should replace boolean props as boolean', () => {
    const model = { base: '<Text prop={{prop:boolean}}/>' };
    const values = { base: { prop: false } };
    const mdx = replaceCmlPlaceholders(model, values);
    expect(mdx).toStrictEqual({ base: '<Text prop={false}/>' });
  });
  test('should replace boolean props with default value as boolean', () => {
    const model = { base: '<Text prop={{prop:boolean:false}}/>' };
    const mdx = replaceCmlPlaceholders(model, {});
    expect(mdx).toStrictEqual({ base: '<Text prop={false}/>' });
  });
  test('should replace number props with provided values, preferring them over default values when both are present', () => {
    const model = { base: '<Text prop={{prop:number:1}}/>' };
    const values = { base: { prop: 0 } };
    const mdx = replaceCmlPlaceholders(model, values);
    expect(mdx).toStrictEqual({ base: '<Text prop={0}/>' });
  });
  test('should replace number props as number', () => {
    const model = { base: '<Text prop={{prop:number}}/>' };
    const values = { base: { prop: 5 } };
    const mdx = replaceCmlPlaceholders(model, values);
    expect(mdx).toStrictEqual({ base: '<Text prop={5}/>' });
  });
  test.each`
    description    | prop
    ${'array'}     | ${['value']}
    ${'object'}    | ${{ json: 'value' }}
    ${'string'}    | ${'{"json":"value"}'}
    ${'number'}    | ${5}
    ${'boolean'}   | ${true}
    ${'null'}      | ${null}
    ${'undefined'} | ${undefined}
  `('should replace json $description props as json', ({ prop }) => {
    const model = { base: '<Text prop={{prop:json}}/>' };
    const values = { base: { prop } };
    const mdx = replaceCmlPlaceholders(model, values);
    expect(mdx).toStrictEqual({ base: `<Text prop={${typeof prop === 'object' ? JSON.stringify(prop) : prop}}/>` });
  });
  test('should replace props in all breakpoints', () => {
    const model = { base: '<Text>{{title:string}}</Text>', lg: '<Text size="m">{{title:string}}</Text>' };
    const values = { base: { title: 'base' }, lg: { title: 'lg' } };
    const mdx = replaceCmlPlaceholders(model, values);
    expect(mdx).toStrictEqual({ base: '<Text>base</Text>', lg: '<Text size="m">lg</Text>' });
  });
  test('should reuse props values', () => {
    const model = { base: '<Text>{{title:string}}</Text>', xxl: '<Text size="m">{{title:string}}</Text>' };
    const values = { base: { title: 'title' } };
    const mdx = replaceCmlPlaceholders(model, values);
    expect(mdx).toStrictEqual({ base: '<Text>title</Text>', xxl: '<Text size="m">title</Text>' });
  });
  test('should reuse model and set different prop values', () => {
    const model = { base: '<Text>{{title:string}}</Text>' };
    const values = { base: { title: 'base' }, xxl: { title: 'xxl' } };
    const mdx = replaceCmlPlaceholders(model, values);
    expect(mdx).toStrictEqual({ base: '<Text>base</Text>', xxl: '<Text>xxl</Text>' });
  });
  test('should merge prop values', () => {
    const model = { base: '<Text>{{title:string}}-{{subtitle:string}}</Text>' };
    const values = {
      base: { title: 'base', subtitle: 'subtitle' },
      lg: { subtitle: 'large subtitle' },
      xxl: { title: 'xxl' },
    };
    const mdx = replaceCmlPlaceholders(model, values);
    expect(mdx).toStrictEqual({
      base: '<Text>base-subtitle</Text>',
      lg: '<Text>base-large subtitle</Text>',
      xxl: '<Text>xxl-large subtitle</Text>',
    });
  });
  test('should use default value', () => {
    const model = { base: '<Text>Must use {{value:string:default value}}</Text>' };
    const mdx = replaceCmlPlaceholders(model, {});
    expect(mdx).toStrictEqual({ base: '<Text>Must use default value</Text>' });
  });
  test('should handle list values', () => {
    const model = { base: '<Text>Value {{value:list(1|2)}}</Text>' };
    const values = { base: { value: '1' }, lg: { value: '2' } };
    const mdx = replaceCmlPlaceholders(model, values);
    expect(mdx).toStrictEqual({ base: '<Text>Value 1</Text>', lg: '<Text>Value 2</Text>' });
  });
  test('should use list default value', () => {
    const model = { base: '<Text>Value {{value:list(1|2|3):3}}</Text>' };
    const mdx = replaceCmlPlaceholders(model, {});
    expect(mdx).toStrictEqual({ base: '<Text>Value 3</Text>' });
  });
  test('should handle multiple templates in the same line', () => {
    const model = { base: '<Text>Value {{value1:number}}-{{value2:string}}</Text>' };
    const values = { base: { value1: 1, value2: '2' } };
    const mdx = replaceCmlPlaceholders(model, values);
    expect(mdx).toStrictEqual({ base: '<Text>Value {1}-2</Text>' });
  });
  test('should handle component with object props', () => {
    const model = { base: '<HighlightedText>{{legend:Text:HighlightedText.Legend}}</HighlightedText>' };
    const values = { base: { legend: { children: 'Legend' } } };
    const mdx = replaceCmlPlaceholders(model, values);
    expect(mdx).toStrictEqual({
      base: '<HighlightedText><HighlightedText.Legend >Legend</HighlightedText.Legend></HighlightedText>',
    });
  });
  test('should handle component with string props', () => {
    const model = { base: '<HighlightedText>{{action:Action:HighlightedText.Link}}</HighlightedText>' };
    const values = { base: { action: 'href="#"' } };
    const mdx = replaceCmlPlaceholders(model, values);
    expect(mdx).toStrictEqual({ base: '<HighlightedText><HighlightedText.Link href="#"/></HighlightedText>' });
  });
  test('should handle component children as an array', () => {
    const model = { base: '<HighlightedText>{{title:TextPairing:HighlightedText.TextPairing}}</HighlightedText>' };
    const values = {
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
    };
    const mdx = replaceCmlPlaceholders(model, values);
    expect(mdx).toStrictEqual({
      base: '<HighlightedText><HighlightedText.TextPairing variant="textpairing-header-4XL"><HighlightedText.TextPairing.Label >Label</HighlightedText.TextPairing.Label><HighlightedText.TextPairing.SubLabel color="text-secondary">SubLabel</HighlightedText.TextPairing.SubLabel></HighlightedText.TextPairing></HighlightedText>',
    });
  });
  test('should handle component children as an array merging nested props', () => {
    const model = { base: '<HighlightedText>{{title:TextPairing:HighlightedText.TextPairing}}</HighlightedText>' };
    const values = {
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
    };
    const mdx = replaceCmlPlaceholders(model, values);
    expect(mdx).toStrictEqual({
      base: '<HighlightedText><HighlightedText.TextPairing variant="textpairing-header-4XL"><HighlightedText.TextPairing.Label >Label</HighlightedText.TextPairing.Label><HighlightedText.TextPairing.SubLabel color="text-secondary">SubLabel</HighlightedText.TextPairing.SubLabel></HighlightedText.TextPairing></HighlightedText>',
      xxl: '<HighlightedText><HighlightedText.TextPairing variant="textpairing-header-3XL"><HighlightedText.TextPairing.Label >Label</HighlightedText.TextPairing.Label><HighlightedText.TextPairing.SubLabel color="text-secondary">SubLabel</HighlightedText.TextPairing.SubLabel></HighlightedText.TextPairing></HighlightedText>',
    });
  });
  test('should remove template if value is not set', () => {
    const model = { base: '<HighlightedText>{{legend:Text:HighlightedText.Legend}}</HighlightedText>' };
    const mdx = replaceCmlPlaceholders(model, {});
    expect(mdx).toStrictEqual({ base: '<HighlightedText></HighlightedText>' });
  });
  test('should remove template if value is "undefined"', () => {
    const model = { base: '<HighlightedText>{{legend:Text:HighlightedText.Legend}}</HighlightedText>' };
    const values = { base: { legend: 'undefined' } };
    const mdx = replaceCmlPlaceholders(model, values);
    expect(mdx).toStrictEqual({ base: '<HighlightedText></HighlightedText>' });
  });
  test('should add BoxProps as string to component', () => {
    const model = { base: '<HighlightedText {{props:BoxProps}} />' };
    const values = { base: { props: 'color="red"' } };
    const mdx = replaceCmlPlaceholders(model, values);
    expect(mdx).toStrictEqual({ base: '<HighlightedText color="red" />' });
  });
  test('should add BoxProps as object to component', () => {
    const model = { base: '<HighlightedText {{props:BoxProps}} />' };
    const values = { base: { props: { color: 'red' } } };
    const mdx = replaceCmlPlaceholders(model, values);
    expect(mdx).toStrictEqual({ base: '<HighlightedText color="red" />' });
  });
  test('should add FlexProps as string to component', () => {
    const model = { base: '<HighlightedText {{props:FlexProps}} />' };
    const values = { base: { props: 'color="red"' } };
    const mdx = replaceCmlPlaceholders(model, values);
    expect(mdx).toStrictEqual({ base: '<HighlightedText color="red" />' });
  });
  test('should add FlexProps as object to component', () => {
    const model = { base: '<HighlightedText {{props:FlexProps}} />' };
    const values = { base: { props: { color: 'red' } } };
    const mdx = replaceCmlPlaceholders(model, values);
    expect(mdx).toStrictEqual({ base: '<HighlightedText color="red" />' });
  });
  test('should handle Image type', () => {
    const model = { base: '<div>{{image:Image:Image}}<div/>' };
    const values = { base: { image: { src: 'https://image.url', alt: 'Image alt' } } };
    const mdx = replaceCmlPlaceholders(model, values);
    expect(mdx).toStrictEqual({ base: '<div><Image src="https://image.url" alt="Image alt"/><div/>' });
  });
  test('should handle ENV_VAR', () => {
    process.env.composer = 'composerEnvVar';
    const model = { base: '{{composer:ENV_VAR}}' };
    const mdx = replaceCmlPlaceholders(model, {});
    expect(mdx).toStrictEqual({ base: 'composerEnvVar' });
  });
  test('should handle extras on type', () => {
    const model = { base: '{{image:Image[href:string,target:string]:Navigation.Image}}' };
    const values = { base: { image: { src: 'https://image.url', alt: 'Image alt', href: '#', target: '_blank' } } };
    const mdx = replaceCmlPlaceholders(model, values);
    expect(mdx).toStrictEqual({
      base: '<Navigation.Image src="https://image.url" alt="Image alt" href="#" target="_blank"/>',
    });
  });
  test('should add styling to text using span tag', () => {
    const model = {
      base: '<Text>This {{_:styling[color=primary-default,decoration=underline 4px accent-default]:text should have color}}, not this one</Text>',
    };
    const mdx = replaceCmlPlaceholders(model, {});
    expect(mdx).toStrictEqual({
      base: '<Text>This <Text as="span" variant="inherited" color="primary-default" decoration="underline 4px accent-default">text should have color</Text>, not this one</Text>',
    });
  });
  test('should not crash when two styling are provided', () => {
    const model = {
      base: '{{_:styling[color=primary-default]:copy one}}{{_:styling[color=primary-default]:copy two}}',
    };
    const mdx = replaceCmlPlaceholders(model, {});
    expect(mdx).toStrictEqual({
      base: '<Text as="span" variant="inherited" color="primary-default">copy one</Text><Text as="span" variant="inherited" color="primary-default">copy two</Text>',
    });
  });
  test('should allow props name with white spaces', () => {
    const model = { base: '<>{{prop name:string}}</><>{{other prop name:string}}</>' };
    const values = { base: { 'prop name': 'prop value', 'other prop name': 'other prop value' } };
    const mdx = replaceCmlPlaceholders(model, values);
    expect(mdx).toStrictEqual({ base: '<>prop value</><>other prop value</>' });
  });
  test('should render icons', () => {
    const model = { base: `<HighlightedText>{{actions:Actions:HighlightedText.Actions}}</HighlightedText>` };
    const values = {
      base: {
        actions: {
          children: ['{{actionsAction1:Action:HighlightedText.Action}}'],
        },
        actionsAction1: {
          children: 'Test',
          trailingIcon: '{{actionsAction1TrailingIcon:Icon:IconAlertCircle}}',
        },
        actionsAction1TrailingIcon: '',
      },
    };
    const mdx = replaceCmlPlaceholders(model, values);
    expect(mdx).toStrictEqual({
      base: '<HighlightedText><HighlightedText.Actions ><HighlightedText.Action trailingIcon={<IconAlertCircle /> }>Test</HighlightedText.Action></HighlightedText.Actions></HighlightedText>',
    });
  });
  test('should handle AccordionsGallery field type', () => {
    const model = { base: '{{accordion:AccordionsGallery:AccordionGallery}}' };
    const values = {
      base: {
        accordion: {
          children: [
            '{{overlineTitle:Text:AccordionGallery.Overline}}',
            '{{title:TextPairing:AccordionGallery.Title}}',
          ],
        },
        title: {
          children: [
            '{{titleLabel:Text:AccordionGallery.Title.Label}}',
            '{{titleSublabel:Text:AccordionGallery.Title.SubLabel}}',
          ],
        },
        overlineTitle: { children: 'Overline' },
        titleLabel: { children: 'Label' },
        titleSubLabel: { children: 'SubLabel' },
      },
    };
    const mdx = replaceCmlPlaceholders(model, values);
    expect(mdx).toStrictEqual({
      base: '<AccordionGallery ><AccordionGallery.Overline >Overline</AccordionGallery.Overline><AccordionGallery.Title ><AccordionGallery.Title.Label >Label</AccordionGallery.Title.Label></AccordionGallery.Title></AccordionGallery>',
    });
  });
  test('should return tag component', () => {
    const model = { base: '<div>{{tag:Tag:Tag}}</div>' };
    const values = {
      base: {
        tag: {
          children: 'Tag',
          variant: 'text-header-4XL',
          color: 'accent-default',
        },
      },
    };
    const mdx = replaceCmlPlaceholders(model, values);
    expect(mdx).toStrictEqual({
      base: '<div><Tag variant="text-header-4XL" color="accent-default">Tag</Tag></div>',
    });
  });
  test('should exclude AiTextGenerator from bundle', () => {
    const model = { base: '{{aiTextGenerator:AiTextGenerator}}' };
    const values = {};
    const mdx = replaceCmlPlaceholders(model, values);
    expect(mdx).toStrictEqual({ base: '' });
  });
  test('should handle Carousel field type', () => {
    const model = { base: '{{carouselSlider:Carousel:Carousel.Slider}}' };
    const values = {
      base: {
        carouselSlider: {
          children: ['{{carouselSliderCarousel1Slide:Container:Carousel.Slide}}'],
        },
        carouselSliderCarousel1Slide: {
          children: ['{{carouselSliderCarousel1SlideMediaBlock:Container:MediaBlock}}'],
        },
        carouselSliderCarousel1SlideMediaBlock: {
          children: ['{{carouselSliderCarousel1SlideMediaBlockTag:Tag:MediaBlock.Tag}}'],
        },
        carouselSliderCarousel1SlideMediaBlockTag: {
          children: 'TAG',
        },
      },
    };
    const mdx = replaceCmlPlaceholders(model, values);
    expect(mdx).toStrictEqual({
      base: '<Carousel.Slider ><Carousel.Slide ><MediaBlock ><MediaBlock.Tag >TAG</MediaBlock.Tag></MediaBlock></Carousel.Slide></Carousel.Slider>',
    });
  });
  test('should handle strings field type with an array value', () => {
    const model = { base: '<Text prop={{props:strings}} />' };
    const values = {
      base: {
        props: ['Apple', 'Banana', 'Cherry'],
      },
    };
    const mdx = replaceCmlPlaceholders(model, values);
    expect(mdx).toStrictEqual({
      base: '<Text prop={["Apple","Banana","Cherry"]} />',
    });
  });
  test('should handle strings field type with a string value', () => {
    const model = { base: '<Text prop={{props:strings}} />' };
    const values = {
      base: {
        props: 'Orange',
      },
    };
    const mdx = replaceCmlPlaceholders(model, values);
    expect(mdx).toStrictEqual({
      base: '<Text prop={["Orange"]} />',
    });
  });
});
