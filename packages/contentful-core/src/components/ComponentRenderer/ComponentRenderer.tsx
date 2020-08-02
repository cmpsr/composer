import { useContext } from 'react';
import { ContentfulContext } from 'context';
import { renderFromContentfulModel } from 'renderers';
import { isCollectionShape } from 'utils';

type Props = {
  componentMap?: any;
  data?: any;
  index?: number;
  parentId?: string;
  rest?: any[];
};

export const ComponentRenderer = ({
  componentMap: componentMapOverrides,
  data,
  index,
  parentId,
  ...rest
}: Props) => {
  const contentfulContext = useContext(ContentfulContext);
  const componentMap = Object.assign(
    {},
    contentfulContext?.componentMap,
    componentMapOverrides
  );

  if (Array.isArray(data)) {
    return data.map((item, index) =>
      renderFromContentfulModel(
        { componentMap },
        { ...item, ...rest },
        index,
        parentId
      )
    );
  }

  if (isCollectionShape(data)) {
    const collectionKey = Object.keys(data)[0];
    return data[collectionKey].items.map((item, index) =>
      renderFromContentfulModel(
        { componentMap },
        { ...item, ...rest },
        index,
        parentId
      )
    );
  }

  return renderFromContentfulModel({ componentMap }, data, index, parentId);
};
