import type { Replica, Route } from '../contentful/getRouteBySlug/types';

export const isReplica = (data: Replica | Route): data is Replica => {
  return (data as Replica).modelData !== undefined;
};
