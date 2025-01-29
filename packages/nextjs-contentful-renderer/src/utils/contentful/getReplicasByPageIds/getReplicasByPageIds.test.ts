import { getReplicasByPageIds } from './getReplicasByPageIds';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

describe('getReplicasByPageIds', () => {
  const mockQuery = jest.fn();
  const mockApolloClient: ApolloClient<NormalizedCacheObject> = {
    query: mockQuery,
  } as any;

  const pageIds = ['page1', 'page2'];
  const preview = true;
  const domain = 'example.com';

  beforeEach(() => {
    mockQuery.mockReset();
    process.env.SITE_DOMAIN = 'default.com';
  });

  test('should query Apollo client with correct parameters', async () => {
    mockQuery.mockResolvedValue({
      data: {
        replicaCollection: {
          items: [],
        },
      },
    });

    await getReplicasByPageIds(mockApolloClient, pageIds, preview, domain);

    expect(mockQuery).toHaveBeenCalledTimes(1);
    expect(mockQuery).toHaveBeenCalledWith({
      query: expect.anything(),
      variables: {
        ids: pageIds,
        domain,
        preview,
      },
    });
  });

  test('should return unique replica slugs from the query result', async () => {
    mockQuery.mockResolvedValue({
      data: {
        replicaCollection: {
          items: [{ slug: '/replica1' }, { slug: '/replica2' }, { slug: '/replica2' }, { slug: '/replica3' }],
        },
      },
    });

    const result = await getReplicasByPageIds(mockApolloClient, pageIds, preview, domain);

    expect(result).toEqual(['/replica1', '/replica2', '/replica3']);
  });

  test('should return an empty array when no replicas are found', async () => {
    mockQuery.mockResolvedValue({
      data: {
        replicaCollection: {
          items: [],
        },
      },
    });

    const result = await getReplicasByPageIds(mockApolloClient, pageIds, preview, domain);

    expect(result).toEqual([]);
  });

  test('should use default domain when not provided', async () => {
    mockQuery.mockResolvedValue({
      data: {
        replicaCollection: {
          items: [],
        },
      },
    });

    await getReplicasByPageIds(mockApolloClient, pageIds, preview);

    expect(mockQuery).toHaveBeenCalledWith({
      query: expect.anything(),
      variables: {
        ids: pageIds,
        domain: process.env.SITE_DOMAIN,
        preview,
      },
    });
  });
});
