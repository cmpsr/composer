import { isReplica } from './isReplica';

describe('isReplica', () => {
  test('should return true if data is a replica', () => {
    const data = {
      id: 'replica_id',
      modelData: [],
      page: 'page_id',
      slug: 'replica_slug',
    };
    expect(isReplica(data)).toBe(true);
  });

  test('should return false if data is not a replica', () => {
    const data = {
      id: 'route_id',
      slug: 'route_slug',
      variants: [
        {
          id: 'variant_id',
          page: 'page_id',
          traffic: 1,
        },
      ],
    };
    expect(isReplica(data)).toBe(false);
  });
});
