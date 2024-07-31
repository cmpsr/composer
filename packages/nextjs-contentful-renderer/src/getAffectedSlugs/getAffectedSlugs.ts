import { getBlocksByModelIds } from '../getBlocksByModelIds';
import { getPagesByBlockIds } from '../getPagesByBlockIds';
import { getReplicasByPageIds } from '../getReplicasByPageIds';
import { getRoutesByVariantIds } from '../getRoutesByVariantIds';
import { getPagesByFooterIds } from '../getPagesByFooterIds';
import { getPagesByThemeIds } from '../getPagesByThemeIds';
import { getPagesByNavbarIds } from '../getPagesByNavbarIds';
import { getVariantsByPageIds } from '../getVariantsByPageIds';
import { ContentType, ContentTypeEntry } from './types';

const nextContentTypeMap: Partial<Record<ContentType, ContentType>> = {
  [ContentType.Model]: ContentType.Block,
  [ContentType.Block]: ContentType.Page,
  [ContentType.Page]: ContentType.Variant,
  [ContentType.Theme]: ContentType.Page,
  [ContentType.Navbar]: ContentType.Page,
  [ContentType.Footer]: ContentType.Page,
};

export async function getAffectedSlugs(
  { contentType, entryId, slug }: ContentTypeEntry,
  preview: boolean = false
): Promise<string[]> {
  if (contentType === ContentType.Route || contentType === ContentType.Replica) {
    return slug ? [slug] : [];
  }

  const slugs = new Set<string>();
  await recursivelyGetSlugs(entryId, contentType, slugs, preview);
  return Array.from(slugs);
}

async function recursivelyGetSlugs(
  entryId: string,
  contentType: ContentType,
  slugs: Set<string>,
  preview: boolean
): Promise<void> {
  let nextIds: string[] = [];
  let nextContentType = nextContentTypeMap[contentType];

  switch (contentType) {
    case ContentType.Model: {
      nextIds = await getBlocksByModelIds([entryId], preview);
      break;
    }
    case ContentType.Block: {
      nextIds = await getPagesByBlockIds([entryId], preview);
      break;
    }
    case ContentType.Page: {
      nextIds = await getVariantsByPageIds([entryId], preview);
      const replicaSlugs = await getReplicasByPageIds([entryId], preview);
      replicaSlugs.forEach((slug) => slugs.add(slug));
      break;
    }
    case ContentType.Variant: {
      const routeSlugs = await getRoutesByVariantIds([entryId], preview);
      routeSlugs.forEach((slug) => slugs.add(slug));
      return;
    }
    case ContentType.Theme:
    case ContentType.Navbar:
    case ContentType.Footer: {
      const getPageIds =
        contentType === ContentType.Theme
          ? getPagesByThemeIds
          : contentType === ContentType.Navbar
          ? getPagesByNavbarIds
          : getPagesByFooterIds;
      nextIds = await getPageIds([entryId], preview);
      break;
    }
    default:
      throw new Error(`Unsupported content type: ${contentType}`);
  }

  if (nextContentType) {
    await Promise.all(nextIds.map((id) => recursivelyGetSlugs(id, nextContentType, slugs, preview)));
  }
}
