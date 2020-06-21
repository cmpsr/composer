import { useQuery } from '@apollo/react-hooks';

import Route from '../queries/Route.graphql';
import { RouteQuery } from 'types/RouteQuery';

type Props = {
  slug: string;
  siteId?: string;
};

export const getRoute = ({ slug }: Props): RouteQuery => {
  const { data }: { data: RouteQuery } = useQuery(Route, {
    variables: { slug },
  });
  return data;
};
