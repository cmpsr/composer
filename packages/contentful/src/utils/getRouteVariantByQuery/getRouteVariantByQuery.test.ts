import { getRouteVariantByQuery } from '.';

describe('getVariantByRoute', () => {
  it('should return variant matching the params over traffic', () => {
    const routeQuery = {
      routeCollection: {
        items: [
          {
            id: 'id',
            slug: '/',
            variants: {
              variants: [
                {
                  name: 'name1',
                  id: 'id1',
                  traffic: 1,
                },
                {
                  name: 'name2',
                  id: 'id2',
                  traffic: 1,
                  match: [{ utm_option: 'camp' }],
                },
              ],
            },
          },
        ],
      },
    };
    const variant = getRouteVariantByQuery(routeQuery, { utm_option: 'camp' });
    expect(variant.id).toBe('id2');
    expect(variant.name).toBe('name2');
    expect(variant.ref).toBe('/');
  });
  it('should transform the matching route', () => {
    const routeQuery = {
      routeCollection: {
        items: [
          {
            id: 'id',
            slug: '/',
            variants: {
              variants: [
                {
                  name: 'name',
                  id: 'id',
                  traffic: 1,
                },
              ],
            },
          },
        ],
      },
    };
    const variant = getRouteVariantByQuery(routeQuery, {});
    expect(variant.id).toBe('id');
    expect(variant.name).toBe('name');
    expect(variant.ref).toBe('/');
  });
});
