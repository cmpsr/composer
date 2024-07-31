import { getReplicaById } from './getReplicaById';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

describe('getReplicaById', () => {
  const mockQuery = jest.fn();
  const mockApolloClient: ApolloClient<NormalizedCacheObject> = {
    query: mockQuery,
  } as any;

  const replicaId = 'replica1';
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

    await getReplicaById(mockApolloClient, replicaId, preview, domain);

    expect(mockQuery).toHaveBeenCalledTimes(1);
    expect(mockQuery).toHaveBeenCalledWith({
      query: expect.anything(),
      variables: {
        id: replicaId,
        domain,
        preview,
      },
    });
  });

  test('should return slug when replica is found', async () => {
    const expectedSlug = '/test-replica';
    mockQuery.mockResolvedValue({
      data: {
        replicaCollection: {
          items: [{ slug: expectedSlug }],
        },
      },
    });

    const result = await getReplicaById(mockApolloClient, replicaId, preview, domain);

    expect(result).toBe(expectedSlug);
  });

  test('should return null when no replica is found', async () => {
    mockQuery.mockResolvedValue({
      data: {
        replicaCollection: {
          items: [],
        },
      },
    });

    const result = await getReplicaById(mockApolloClient, replicaId, preview, domain);

    expect(result).toBeNull();
  });

  test('should use default domain when not provided', async () => {
    mockQuery.mockResolvedValue({
      data: {
        replicaCollection: {
          items: [],
        },
      },
    });

    await getReplicaById(mockApolloClient, replicaId, preview);

    expect(mockQuery).toHaveBeenCalledWith({
      query: expect.anything(),
      variables: {
        id: replicaId,
        domain: process.env.SITE_DOMAIN,
        preview,
      },
    });
  });

  test('should handle undefined slug gracefully', async () => {
    mockQuery.mockResolvedValue({
      data: {
        replicaCollection: {
          items: [{}], // Item without a slug
        },
      },
    });

    const result = await getReplicaById(mockApolloClient, replicaId, preview, domain);

    expect(result).toBeNull();
  });
});
