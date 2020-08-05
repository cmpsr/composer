import React, { ReactElement, useContext } from 'react';

import { DEFAULT } from 'constants/index';
import { Group as GroupDSM } from '@cmpsr/components/components/layouts';

import { ContentfulContext } from "context";
import renderFromComponentMap from 'utils/renderFromComponentMap';
import renderFromContentfulModel from 'utils/renderFromContentfulModel';

import { GroupProps } from './types';

const Group: React.FC<GroupProps> = React.memo((props) => {
  const contentfulContext = useContext(ContentfulContext);
  const {
    sys: { id },
    className,
    type,
    style,
    contentCollection,
  } = props;

  const groupProps = {
    className,
    style: style || {},
  };

  const componentMap = {
    [DEFAULT]: (): ReactElement => (
      <GroupDSM {...groupProps}>
        {contentCollection.items.map((item, index) => (
          <div key={index}>{renderFromContentfulModel(contentfulContext, item, index, id)}</div>
        ))}
      </GroupDSM>
    ),
  };

  return renderFromComponentMap(componentMap, type);
});
export default Group;
