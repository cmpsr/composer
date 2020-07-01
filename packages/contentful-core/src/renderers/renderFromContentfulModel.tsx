import { ReactElement } from 'react';

export const renderFromContentfulModel = (
  { componentMap },
  item,
  index = 0,
  parentId = ''
): ReactElement => {
  const { __typename: type } = item;

  if (!type || !Object.keys(componentMap).includes(type)) return null;

  return componentMap[type](
    { ...item, key: `${parentId}_${item.sys.id}_${index}` },
    index
  );
};
