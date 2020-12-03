import { ReactElement } from 'react';

export const renderFromContentfulModel = (
  { componentMap },
  item,
  index = 0,
  parentId = ''
): ReactElement => {
  const { __typename: type } = item;

  if (!type) {
    console.warn('Undefined Type: \'{__typename}\' not specified on Entry data');
    return null;
  }

  if (!Object.keys(componentMap).includes(type)) {
    console.warn(`Undefined Type: '${type}' not defined in componentMap`);
    return null;
  }

  if (!item?.sys?.id) {
    console.warn('Incomplete Data: \'sys.id\' missing from Entry data', item);
    return null;
  }

  const key = `${parentId}_${item.sys.id}_${index}`;

  return componentMap[type](
    { ...item, key, componentMap },
    index
  );
};
