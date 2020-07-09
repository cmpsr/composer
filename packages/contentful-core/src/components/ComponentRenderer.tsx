import { useContext } from 'react';
import { ContentfulContext } from 'context';
import { renderFromContentfulModel } from 'renderers';
import { isCollectionShape } from 'utils';

type Props = {
  data?: any;
  index?: number;
  parentId?: string;
  rest: any[];
}

export const ComponentRenderer = ({ data, index, parentId, ...rest }: Props) => {
  const contentfulContext = useContext(ContentfulContext);

  if (Array.isArray(data)) {
    return data.map((item, index) => renderFromContentfulModel(
      contentfulContext,
      { ...item, ...rest },
      index,
      parentId
    ));
  }

  if (isCollectionShape(data)) {
    const collectionKey = Object.keys(data)[0];
    return data[collectionKey].items.map((item, index) => renderFromContentfulModel(
      contentfulContext,
      { ...item, ...rest },
      index,
      parentId
    ));
  }

  return renderFromContentfulModel(
    contentfulContext,
    data,
    index,
    parentId
  );
};
