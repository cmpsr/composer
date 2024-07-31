// import { getBlocksByModelIds } from '../getBlocksByModelIds';
// import { getPagesByBlockIds } from '../getPagesByBlockIds';
// import { getReplicaById } from '../getReplicaById';
// import { getReplicasByPageIds } from '../getReplicasByPageIds';
// import { getRouteById } from '../getRouteById';
// import { getRoutesByVariantIds } from '../getRoutesByVariantIds';
// import { getPagesByFooterIds } from '../getPagesByFooterIds';
// import { getPagesByThemeIds } from '../getPagesByThemeIds';
// import { getPagesByNavbarIds } from '../getPagesByNavbarIds';
// import { getVariantsByPageIds } from '../getVariantsByPageIds';
// import { ContentType, ContentTypeEntry } from './types';

// export async function getAffectedSlugs(
//   { contentType, entryId, slug }: ContentTypeEntry,
//   preview: boolean = false
// ): Promise<string[]> {
//   if (contentType === ContentType.Route || contentType === ContentType.Replica) {
//     return slug ? [slug] : [];
//   }

//   const slugs = new Set<string>();
//   await recursivelyGetSlugs(entryId, contentType, slugs, preview);
//   return Array.from(slugs);
// }

// async function recursivelyGetSlugs(
//   entryId: string,
//   contentType: ContentType,
//   slugs: Set<string>,
//   preview: boolean
// ): Promise<void> {
//   switch (contentType) {
//     case ContentType.Model: {
//       const blockIds = await getBlocksByModelIds([entryId], preview);
//       for (const blockId of blockIds) {
//         await recursivelyGetSlugs(blockId, ContentType.Block, slugs, preview);
//       }
//       break;
//     }
//     case ContentType.Block: {
//       const pageIds = await getPagesByBlockIds([entryId], preview);
//       for (const pageId of pageIds) {
//         await recursivelyGetSlugs(pageId, ContentType.Page, slugs, preview);
//       }
//       break;
//     }
//     case ContentType.Page: {
//       const variantIds = await getVariantsByPageIds([entryId], preview);
//       const replicaSlugs = await getReplicasByPageIds([entryId], preview);
//       replicaSlugs.forEach((slug) => slugs.add(slug));

//       for (const variantId of variantIds) {
//         await recursivelyGetSlugs(variantId, ContentType.Variant, slugs, preview);
//       }
//       break;
//     }
//     case ContentType.Variant: {
//       const routeSlugs = await getRoutesByVariantIds([entryId], preview);
//       routeSlugs.forEach((slug) => slugs.add(slug));
//       break;
//     }
//     case ContentType.Route: {
//       const routeSlug = await getRouteById(entryId, preview);
//       if (routeSlug) slugs.add(routeSlug);
//       break;
//     }
//     case ContentType.Replica: {
//       const replicaSlug = await getReplicaById(entryId, preview);
//       if (replicaSlug) slugs.add(replicaSlug);
//       break;
//     }
//     case ContentType.Theme: {
//       const pageIds = await getPagesByThemeIds([entryId], preview);
//       for (const pageId of pageIds) {
//         await recursivelyGetSlugs(pageId, ContentType.Page, slugs, preview);
//       }
//       break;
//     }
//     case ContentType.Navbar: {
//       const pageIds = await getPagesByNavbarIds([entryId], preview);
//       for (const pageId of pageIds) {
//         await recursivelyGetSlugs(pageId, ContentType.Page, slugs, preview);
//       }
//       break;
//     }
//     case ContentType.Footer: {
//       const pageIds = await getPagesByFooterIds([entryId], preview);
//       for (const pageId of pageIds) {
//         await recursivelyGetSlugs(pageId, ContentType.Page, slugs, preview);
//       }
//       break;
//     }
//     default:
//       throw new Error(`Unsupported content type: ${contentType}`);
//   }
// }

import { getBlocksByModelIds } from '../getBlocksByModelIds';
import { getPagesByBlockIds } from '../getPagesByBlockIds';
import { getReplicaById } from '../getReplicaById';
import { getReplicasByPageIds } from '../getReplicasByPageIds';
import { getRouteById } from '../getRouteById';
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
    case ContentType.Model:
      nextIds = await getBlocksByModelIds([entryId], preview);
      break;
    case ContentType.Block:
      nextIds = await getPagesByBlockIds([entryId], preview);
      break;
    case ContentType.Page:
      nextIds = await getVariantsByPageIds([entryId], preview);
      const replicaSlugs = await getReplicasByPageIds([entryId], preview);
      replicaSlugs.forEach((slug) => slugs.add(slug));
      break;
    case ContentType.Variant:
      const routeSlugs = await getRoutesByVariantIds([entryId], preview);
      routeSlugs.forEach((slug) => slugs.add(slug));
      return;
    case ContentType.Route:
      const routeSlug = await getRouteById(entryId, preview);
      if (routeSlug) slugs.add(routeSlug);
      return;
    case ContentType.Replica:
      const replicaSlug = await getReplicaById(entryId, preview);
      if (replicaSlug) slugs.add(replicaSlug);
      return;
    case ContentType.Theme:
    case ContentType.Navbar:
    case ContentType.Footer:
      const getPageIds =
        contentType === ContentType.Theme
          ? getPagesByThemeIds
          : contentType === ContentType.Navbar
          ? getPagesByNavbarIds
          : getPagesByFooterIds;
      nextIds = await getPageIds([entryId], preview);
      break;
    default:
      throw new Error(`Unsupported content type: ${contentType}`);
  }

  if (nextContentType) {
    await Promise.all(nextIds.map((id) => recursivelyGetSlugs(id, nextContentType, slugs, preview)));
  }
}
