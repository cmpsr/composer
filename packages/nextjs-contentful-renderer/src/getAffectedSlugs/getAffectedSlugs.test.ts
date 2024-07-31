import { getAffectedSlugs } from './getAffectedSlugs';
import { ContentType, ContentTypeEntry } from './types';
import { getBlocksByModelIds } from '../getBlocksByModelIds';
import { getPagesByBlockIds } from '../getPagesByBlockIds';
import { getReplicasByPageIds } from '../getReplicasByPageIds';
import { getRoutesByVariantIds } from '../getRoutesByVariantIds';
import { getPagesByFooterIds } from '../getPagesByFooterIds';
import { getPagesByThemeIds } from '../getPagesByThemeIds';
import { getPagesByNavbarIds } from '../getPagesByNavbarIds';
import { getVariantsByPageIds } from '../getVariantsByPageIds';

jest.mock('../getBlocksByModelIds');
jest.mock('../getPagesByBlockIds');
jest.mock('../getReplicasByPageIds');
jest.mock('../getRoutesByVariantIds');
jest.mock('../getPagesByFooterIds');
jest.mock('../getPagesByThemeIds');
jest.mock('../getPagesByNavbarIds');
jest.mock('../getVariantsByPageIds');

describe('getAffectedSlugs', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('should return slug for Route content type when slug is provided', async () => {
    const entry: ContentTypeEntry = { contentType: ContentType.Route, entryId: 'route1', slug: '/test-route' };
    const result = await getAffectedSlugs(entry);
    expect(result).toEqual(['/test-route']);
  });

  test('should return slug for Replica content type when slug is provided', async () => {
    const entry: ContentTypeEntry = { contentType: ContentType.Replica, entryId: 'replica1', slug: '/test-replica' };
    const result = await getAffectedSlugs(entry);
    expect(result).toEqual(['/test-replica']);
  });

  test('should return empty array for Route when slug is not provided', async () => {
    const entry: ContentTypeEntry = { contentType: ContentType.Route, entryId: 'route1' };
    const result = await getAffectedSlugs(entry);
    expect(result).toEqual([]);
  });

  test('should return empty array for Replica when slug is not provided', async () => {
    const entry: ContentTypeEntry = { contentType: ContentType.Replica, entryId: 'replica1' };
    const result = await getAffectedSlugs(entry);
    expect(result).toEqual([]);
  });

  test('should handle Model content type correctly', async () => {
    (getBlocksByModelIds as jest.Mock).mockResolvedValue(['block1']);
    (getPagesByBlockIds as jest.Mock).mockResolvedValue(['page1']);
    (getVariantsByPageIds as jest.Mock).mockResolvedValue(['variant1']);
    (getRoutesByVariantIds as jest.Mock).mockResolvedValue(['/route1', '/route2']);
    (getReplicasByPageIds as jest.Mock).mockResolvedValue(['/replica1']);

    const entry: ContentTypeEntry = { contentType: ContentType.Model, entryId: 'model1' };
    const result = await getAffectedSlugs(entry);
    expect(result).toEqual(['/replica1', '/route1', '/route2']);
  });

  test('should handle Block content type correctly', async () => {
    (getPagesByBlockIds as jest.Mock).mockResolvedValue(['page1']);
    (getVariantsByPageIds as jest.Mock).mockResolvedValue(['variant1']);
    (getRoutesByVariantIds as jest.Mock).mockResolvedValue(['/route1']);
    (getReplicasByPageIds as jest.Mock).mockResolvedValue(['/replica1']);

    const entry: ContentTypeEntry = { contentType: ContentType.Block, entryId: 'block1' };
    const result = await getAffectedSlugs(entry);
    expect(result).toEqual(['/replica1', '/route1']);
  });

  test('should handle Page content type correctly', async () => {
    (getVariantsByPageIds as jest.Mock).mockResolvedValue(['variant1']);
    (getRoutesByVariantIds as jest.Mock).mockResolvedValue(['/route1']);
    (getReplicasByPageIds as jest.Mock).mockResolvedValue(['/replica1']);

    const entry: ContentTypeEntry = { contentType: ContentType.Page, entryId: 'page1' };
    const result = await getAffectedSlugs(entry);
    expect(result).toEqual(['/replica1', '/route1']);
  });

  test('should handle Variant content type correctly', async () => {
    (getRoutesByVariantIds as jest.Mock).mockResolvedValue(['/route1', '/route2']);

    const entry: ContentTypeEntry = { contentType: ContentType.Variant, entryId: 'variant1' };
    const result = await getAffectedSlugs(entry);
    expect(result).toEqual(['/route1', '/route2']);
  });

  test('should handle Theme content type correctly', async () => {
    (getPagesByThemeIds as jest.Mock).mockResolvedValue(['page1']);
    (getVariantsByPageIds as jest.Mock).mockResolvedValue(['variant1']);
    (getRoutesByVariantIds as jest.Mock).mockResolvedValue(['/route1']);
    (getReplicasByPageIds as jest.Mock).mockResolvedValue(['/replica1']);

    const entry: ContentTypeEntry = { contentType: ContentType.Theme, entryId: 'theme1' };
    const result = await getAffectedSlugs(entry);
    expect(result).toEqual(['/replica1', '/route1']);
  });

  test('should handle Navbar content type correctly', async () => {
    (getPagesByNavbarIds as jest.Mock).mockResolvedValue(['page1']);
    (getVariantsByPageIds as jest.Mock).mockResolvedValue(['variant1']);
    (getRoutesByVariantIds as jest.Mock).mockResolvedValue(['/route1']);
    (getReplicasByPageIds as jest.Mock).mockResolvedValue(['/replica1']);

    const entry: ContentTypeEntry = { contentType: ContentType.Navbar, entryId: 'navbar1' };
    const result = await getAffectedSlugs(entry);
    expect(result).toEqual(['/replica1', '/route1']);
  });

  test('should handle Footer content type correctly', async () => {
    (getPagesByFooterIds as jest.Mock).mockResolvedValue(['page1']);
    (getVariantsByPageIds as jest.Mock).mockResolvedValue(['variant1']);
    (getRoutesByVariantIds as jest.Mock).mockResolvedValue(['/route1']);
    (getReplicasByPageIds as jest.Mock).mockResolvedValue(['/replica1']);

    const entry: ContentTypeEntry = { contentType: ContentType.Footer, entryId: 'footer1' };
    const result = await getAffectedSlugs(entry);
    expect(result).toEqual(['/replica1', '/route1']);
  });

  test('should throw error for unsupported content type', async () => {
    const entry: ContentTypeEntry = { contentType: 'UnsupportedType' as ContentType, entryId: 'unsupported1' };
    await expect(getAffectedSlugs(entry)).rejects.toThrow('Unsupported content type: UnsupportedType');
  });

  test('should handle empty results correctly', async () => {
    (getBlocksByModelIds as jest.Mock).mockResolvedValue([]);
    (getPagesByBlockIds as jest.Mock).mockResolvedValue([]);
    (getVariantsByPageIds as jest.Mock).mockResolvedValue([]);
    (getRoutesByVariantIds as jest.Mock).mockResolvedValue([]);
    (getReplicasByPageIds as jest.Mock).mockResolvedValue([]);

    const entry: ContentTypeEntry = { contentType: ContentType.Model, entryId: 'model1' };
    const result = await getAffectedSlugs(entry);
    expect(result).toEqual([]);
  });

  test('should handle preview mode correctly', async () => {
    (getBlocksByModelIds as jest.Mock).mockResolvedValue(['block1']);
    (getPagesByBlockIds as jest.Mock).mockResolvedValue(['page1']);
    (getVariantsByPageIds as jest.Mock).mockResolvedValue(['variant1']);
    (getRoutesByVariantIds as jest.Mock).mockResolvedValue(['/route1']);
    (getReplicasByPageIds as jest.Mock).mockResolvedValue(['/replica1']);

    const entry: ContentTypeEntry = { contentType: ContentType.Model, entryId: 'model1' };
    await getAffectedSlugs(entry, true);

    expect(getBlocksByModelIds).toHaveBeenCalledWith(['model1'], true);
    expect(getPagesByBlockIds).toHaveBeenCalledWith(['block1'], true);
    expect(getVariantsByPageIds).toHaveBeenCalledWith(['page1'], true);
    expect(getRoutesByVariantIds).toHaveBeenCalledWith(['variant1'], true);
    expect(getReplicasByPageIds).toHaveBeenCalledWith(['page1'], true);
  });
});
