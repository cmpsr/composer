import type { Replica } from '../contentful/getRouteBySlug/types';

export const isReplica = (data): boolean => {
  return (data as Replica).modelData !== undefined;
};
