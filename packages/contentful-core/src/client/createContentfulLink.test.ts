import { ContentfulLinkOptions, createContentfulLink } from './createContentfulLink';
import { HttpLink } from '@apollo/client';

describe('createContentfulLink', () => {
  beforeEach(() => {
    global.fetch = jest.fn(
      () =>
        Promise.resolve({
          json: () => Promise.resolve({ data: 'mocked data' }),
        }) as Promise<Response>,
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('creates a new HttpLink with correct URI and headers', () => {
    const options = {
      accessToken: 'testAccessToken',
      space: 'testSpace',
      environment: 'testEnvironment',
      headers: { 'Custom-Header': 'value' },
    };

    const link = createContentfulLink(options);

    expect(link).toBeInstanceOf(HttpLink);
    expect(link.options.uri).toBe(
      `https://graphql.contentful.com/content/v1/spaces/testSpace/environments/testEnvironment`,
    );
    expect(link.options.headers?.Authorization).toBe(`Bearer testAccessToken`);
    expect(link.options.headers?.['Custom-Header']).toBe('value');
  });

  it('uses default values for missing optional parameters', () => {
    const options = {
      accessToken: 'testAccessToken',
      space: 'testSpace',
    };

    const link = createContentfulLink(options);

    expect(link.options.uri).toBe(`https://graphql.contentful.com/content/v1/spaces/testSpace/environments/master`);
    expect(link.options.headers?.Authorization).toBe(`Bearer testAccessToken`);
  });

  it('throws an error if space is missing', () => {
    const options = {
      accessToken: 'testAccessToken',
    } as ContentfulLinkOptions;

    expect(() => createContentfulLink(options)).toThrow('Contentful `space` ID is required for initialization.');
  });

  it('throws an error if accessToken is missing', () => {
    const options = {
      space: 'testSpace',
    } as ContentfulLinkOptions;

    expect(() => createContentfulLink(options)).toThrow('Contentful `accessToken` is required for initialization.');
  });
});
