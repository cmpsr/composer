import { useContext } from 'react';
import { ContentfulContext } from 'context';
import { renderFromContentfulModel } from 'renderers';
import { isCollectionShape } from 'utils';

type Props = {
  className?: string;
  componentMap?: any;
  data?: any;
  index?: number;
  parentId?: string;
  rest?: any[];
};

export const ComponentRenderer = ({
  className = '',
  componentMap: componentMapOverrides,
  data,
  index,
  parentId,
  ...rest
}: Props) => {
  try {
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
          { ...item, ...rest, className },
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
          { ...item, ...rest, className },
          index,
          parentId
        )
      );
    }

    return renderFromContentfulModel(
      { componentMap },
      { ...data, ...rest, className },
      index,
      parentId
    );
  } catch (e) {
    console.log('error', e);
    return null;
  }
};
