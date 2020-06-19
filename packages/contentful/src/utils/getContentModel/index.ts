import { ReactElement, useContext } from 'react';
import { ContentfulContext } from 'context';
import { ChildProps } from 'types/ChildProps';

export const getContentModel = ({ id, type }: ChildProps): ReactElement[] => {
  const { queryMap } = useContext(ContentfulContext);
  return queryMap[type]({ id });
};
