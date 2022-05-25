import { ApolloClient } from '@apollo/client';
import { getApolloClient } from '.';

const mockCreateLink = jest.fn();
jest.mock('@cmpsr/contentful-core', () => ({
  createContentfulLink: (params: Record<string, unknown>) => mockCreateLink(params),
}));

describe('getApolloClient', () => {
  test('should return an ApolloClient', () => {
    const client = getApolloClient();
    expect(client).toBeInstanceOf(ApolloClient);
  });

  test('should create link with env variables if no values provided', () => {
    getApolloClient();
    expect(mockCreateLink).toBeCalledTimes(1);
    expect(mockCreateLink).toBeCalledWith({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN_DELIVERY,
      environment: process.env.CONTENTFUL_ENVIRONMENT,
    });
  });

  test('should create link with preview token if preview', () => {
    getApolloClient({ preview: true });
    expect(mockCreateLink).toBeCalledTimes(1);
    expect(mockCreateLink).toBeCalledWith({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN_PREVIEW,
      environment: process.env.CONTENTFUL_ENVIRONMENT,
    });
  });

  test('should use provided values', () => {
    const preview = true;
    const space = 'new_space';
    const previewAccessToken = 'new_preview_token';
    getApolloClient({ preview, space, deliveryAccessToken: '', previewAccessToken });
    expect(mockCreateLink).toBeCalledTimes(1);
    expect(mockCreateLink).toBeCalledWith({
      space,
      accessToken: previewAccessToken,
      environment: process.env.CONTENTFUL_ENVIRONMENT,
    });
  });
});
