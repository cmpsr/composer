import { getBlocksByModelIds } from 'src/getBlocksByModelIds';
import { getPagesByBlockIds } from 'src/getPagesByBlockIds';
import { getReplicaById } from 'src/getReplicaById';
import { getReplicasByPageIds } from 'src/getReplicasByPageIds';
import { getRouteById } from 'src/getRouteById';
import { getRoutesByVariantIds } from 'src/getRoutesByVariantIds';
import { getVariantsByPageIds } from 'src/getVariantsByPageIds';
import { ContentType, ContentfulWebhookPayload } from './types';

export async function getAffectedSlugs(
  webhookPayload: ContentfulWebhookPayload,
  preview: boolean = false
): Promise<string[]> {
  const contentType = webhookPayload.sys.contentType.sys.id;
  const entryId = webhookPayload.sys.id;

  if (contentType === ContentType.Route || contentType === ContentType.Replica) {
    const slug = webhookPayload.fields.slug?.['en-US'];
    if (slug) {
      return [slug];
    }
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
  switch (contentType) {
    case ContentType.Model:
      const blockIds = await getBlocksByModelIds([entryId], preview);
      for (const blockId of blockIds) {
        await recursivelyGetSlugs(blockId, ContentType.Block, slugs, preview);
      }
      break;
    case ContentType.Block:
      const pageIds = await getPagesByBlockIds([entryId], preview);
      for (const pageId of pageIds) {
        await recursivelyGetSlugs(pageId, ContentType.Page, slugs, preview);
      }
      break;
    case ContentType.Page:
      const variantIds = await getVariantsByPageIds([entryId], preview);
      const replicaSlugs = await getReplicasByPageIds([entryId], preview);
      replicaSlugs.forEach((slug) => slugs.add(slug));

      for (const variantId of variantIds) {
        await recursivelyGetSlugs(variantId, ContentType.Variant, slugs, preview);
      }
      break;
    case ContentType.Variant:
      const routeSlugs = await getRoutesByVariantIds([entryId], preview);
      routeSlugs.forEach((slug) => slugs.add(slug));
      break;
    case ContentType.Route:
      const routeSlug = await getRouteById(entryId, preview);
      if (routeSlug) slugs.add(routeSlug);
      break;
    case ContentType.Replica:
      const replicaSlug = await getReplicaById(entryId, preview);
      if (replicaSlug) slugs.add(replicaSlug);
      break;
    default:
      throw new Error(`Unsupported content type: ${contentType}`);
  }
}
