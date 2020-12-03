import { ReactElement } from 'react';

export const renderFromContentfulModel = (
  { componentMap },
  item,
  index = 0,
  parentId = ''
): ReactElement => {
  const { __typename: type } = item;

  if (!type) {
    console.warn('{__typename} not specified on Entry data');
    return null;
  }

  if (!Object.keys(componentMap).includes(type)) {
    console.warn(`Type of, ${type}, not defined in componentMap`);
    return null;
  }

  if (!item?.sys?.id) {
    console.warn('Entry lacks sys.id`]', item);
    return null;
  }

  const key = `${parentId}_${item.sys.id}_${index}`;

  return componentMap[type](
    { ...item, key, componentMap },
    index
  );
};
