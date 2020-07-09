import { useContext } from 'react';
import { ContentfulContext } from '../context';
import { renderFromContentfulModel } from 'renderers';

type Props = {
  model?: any;
  index?: number;
  parentId?: string;
}

export const ContentfulComponent = ({ index, model, parentId }: Props) => {
  const contentfulContext = useContext(ContentfulContext);

  return renderFromContentfulModel(
    contentfulContext,
    model,
    index,
    parentId
  );
};
